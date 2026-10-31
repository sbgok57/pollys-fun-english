-- Polly accounts, school groups, progress and automatically-awarded badges.
-- The role allowlist and privileged helpers are kept outside the exposed API schema.
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
grant usage on schema private to authenticated;

create table if not exists private.admin_allowlist (
  email text primary key check (email = lower(email)),
  created_at timestamptz not null default now()
);
revoke all on private.admin_allowlist from public, anon, authenticated;
insert into private.admin_allowlist(email) values ('sinembuse724@gmail.com')
on conflict (email) do nothing;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  display_name text not null check (char_length(display_name) between 2 and 80),
  role text not null check (role in ('student_pending','student','teacher_pending','teacher','admin')),
  school_name text check (school_name is null or char_length(school_name) <= 120),
  grade smallint check (grade is null or grade between 1 and 4),
  section text check (section is null or char_length(section) <= 24),
  guardian_consent_recorded_at timestamptz,
  guardian_consent_recorded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
revoke all on public.profiles from anon, public;
grant select on public.profiles to authenticated;
grant update(display_name,school_name,grade,section) on public.profiles to authenticated;

create or replace function private.current_role()
returns text language sql stable security definer set search_path = ''
as $$ select p.role from public.profiles p where p.id = (select auth.uid()) $$;
revoke all on function private.current_role() from public, anon;
grant execute on function private.current_role() to authenticated;

create table public.classrooms (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  school_name text not null check (char_length(school_name) between 1 and 120),
  grade smallint not null check (grade between 1 and 4),
  section text not null check (char_length(section) between 1 and 24),
  invite_code text not null unique default upper(substr(replace(gen_random_uuid()::text,'-',''),1,10)),
  created_at timestamptz not null default now(),
  unique (teacher_id, school_name, grade, section)
);
alter table public.classrooms enable row level security;
revoke all on public.classrooms from anon, public;
grant select, insert, update, delete on public.classrooms to authenticated;

create table public.class_members (
  classroom_id uuid not null references public.classrooms(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (classroom_id, student_id)
);
alter table public.class_members enable row level security;
revoke all on public.class_members from anon, public;
grant select on public.class_members to authenticated;

create or replace function private.is_teacher_of(target_student uuid)
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1
    from public.class_members cm
    join public.classrooms c on c.id = cm.classroom_id
    where cm.student_id = target_student and c.teacher_id = (select auth.uid())
  )
$$;
revoke all on function private.is_teacher_of(uuid) from public, anon;
grant execute on function private.is_teacher_of(uuid) to authenticated;

create or replace function private.is_member_of(target_classroom uuid)
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1 from public.class_members cm
    where cm.classroom_id=target_classroom and cm.student_id=(select auth.uid())
  )
$$;
revoke all on function private.is_member_of(uuid) from public, anon;
grant execute on function private.is_member_of(uuid) to authenticated;

create or replace function private.create_profile_for_auth_user()
returns trigger language plpgsql security definer set search_path = ''
as $$
declare
  meta jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  requested_role text := coalesce(meta->>'requested_role','student');
  assigned_role text;
  requested_grade smallint;
  display_value text := nullif(btrim(meta->>'display_name'),'');
begin
  if lower(coalesce(new.email,'')) in (select email from private.admin_allowlist) then
    assigned_role := 'admin';
  elsif requested_role = 'teacher' then
    assigned_role := 'teacher_pending';
  else
    assigned_role := 'student_pending';
  end if;

  if coalesce(meta->>'grade','') ~ '^[1-4]$' then
    requested_grade := (meta->>'grade')::smallint;
  end if;

  insert into public.profiles(id,email,display_name,role,school_name,grade,section)
  values (
    new.id,
    lower(new.email),
    left(coalesce(display_value,'New learner'),80),
    assigned_role,
    nullif(left(btrim(coalesce(meta->>'school_name','')),120),''),
    requested_grade,
    nullif(left(btrim(coalesce(meta->>'section','')),24),'')
  );
  return new;
end;
$$;
revoke all on function private.create_profile_for_auth_user() from public, anon, authenticated;
drop trigger if exists polly_profile_after_signup on auth.users;
create trigger polly_profile_after_signup after insert on auth.users
for each row execute function private.create_profile_for_auth_user();

create or replace function private.approve_profile(target_profile uuid, record_guardian_consent boolean default false)
returns public.profiles language plpgsql security definer set search_path = ''
as $$
declare
  target public.profiles;
begin
  if (select auth.uid()) is null or private.current_role() <> 'admin' then
    raise exception 'Administrator access required';
  end if;
  select * into target from public.profiles where id = target_profile for update;
  if not found then raise exception 'Profile not found'; end if;
  if target.role = 'student_pending' then
    if not record_guardian_consent then raise exception 'School or guardian permission must be recorded first'; end if;
    update public.profiles set role='student', guardian_consent_recorded_at=now(),
      guardian_consent_recorded_by=(select auth.uid()), updated_at=now()
      where id=target_profile returning * into target;
  elsif target.role = 'teacher_pending' then
    update public.profiles set role='teacher', updated_at=now()
      where id=target_profile returning * into target;
  else
    raise exception 'Profile is not awaiting approval';
  end if;
  return target;
end;
$$;
revoke all on function private.approve_profile(uuid,boolean) from public, anon;
grant execute on function private.approve_profile(uuid,boolean) to authenticated;

create or replace function private.join_class(invite text)
returns uuid language plpgsql security definer set search_path = ''
as $$
declare class_id uuid;
begin
  if (select auth.uid()) is null or private.current_role() <> 'student' then
    raise exception 'An approved student account is required';
  end if;
  select c.id into class_id from public.classrooms c
  join public.profiles p on p.id=(select auth.uid())
    where c.invite_code = upper(btrim(invite))
      and c.grade=p.grade
      and lower(c.school_name)=lower(coalesce(p.school_name,''))
      and lower(c.section)=lower(coalesce(p.section,''));
  if class_id is null then raise exception 'Class code not found'; end if;
  insert into public.class_members(classroom_id,student_id)
    values(class_id,(select auth.uid())) on conflict do nothing;
  return class_id;
end;
$$;
revoke all on function private.join_class(text) from public, anon;
grant execute on function private.join_class(text) to authenticated;

create table public.progress_events (
  id bigint generated always as identity primary key,
  student_id uuid not null references public.profiles(id) on delete cascade default auth.uid(),
  activity_type text not null check (activity_type in ('game','story','speaking','lesson','word','listening','team')),
  activity_id text not null check (char_length(activity_id) between 1 and 100),
  unit_id text check (unit_id is null or char_length(unit_id) <= 32),
  grade smallint check (grade is null or grade between 1 and 4),
  score integer not null default 0 check (score between 0 and 100000),
  max_score integer not null default 0 check (max_score between 0 and 100000),
  earned_stars smallint not null default 0 check (earned_stars between 0 and 5),
  duration_seconds integer not null default 0 check (duration_seconds between 0 and 86400),
  completed_at timestamptz not null default now()
);
create index progress_events_student_time_idx on public.progress_events(student_id, completed_at desc);
create index progress_events_type_time_idx on public.progress_events(activity_type, completed_at desc);
alter table public.progress_events enable row level security;
revoke all on public.progress_events from anon, public;
grant select, insert on public.progress_events to authenticated;

create table public.badge_catalog (
  code text primary key,
  category text not null,
  title text not null,
  description text not null,
  threshold integer not null check (threshold between 1 and 100),
  visual_key text not null
);
insert into public.badge_catalog(code,category,title,description,threshold,visual_key)
select category || '-' || lpad(n::text,3,'0'), category,
       title_prefix || ' ' || lpad(n::text,3,'0'),
       'Reach milestone ' || n::text || ' in ' || lower(category) || ' practice.',
       n, visual_key
from (values
  ('Explorer','Complete activities','explorer'),
  ('Game','Finish games','game'),
  ('Story','Read stories','story'),
  ('Speaking','Complete speaking missions','speaking'),
  ('Lesson','Explore lessons','lesson'),
  ('Word','Practise words','word'),
  ('Listening','Listen and learn','listening'),
  ('Team','Play with a team','team'),
  ('Star','Earn stars','star'),
  ('Accuracy','Build accuracy','accuracy')
) as categories(category, title_prefix, visual_key)
cross join generate_series(1,100) n
on conflict (code) do nothing;
alter table public.badge_catalog enable row level security;
revoke all on public.badge_catalog from anon, public;
grant select on public.badge_catalog to authenticated;

create table public.badge_awards (
  student_id uuid not null references public.profiles(id) on delete cascade,
  badge_code text not null references public.badge_catalog(code) on delete cascade,
  awarded_at timestamptz not null default now(),
  primary key (student_id,badge_code)
);
create index badge_awards_student_time_idx on public.badge_awards(student_id, awarded_at desc);
alter table public.badge_awards enable row level security;
revoke all on public.badge_awards from anon, public;
grant select on public.badge_awards to authenticated;

create or replace function private.award_progress_badges()
returns trigger language plpgsql security definer set search_path = ''
as $$
declare metric integer; cat text;
begin
  for cat in select unnest(array['Explorer', initcap(new.activity_type)]) loop
    select count(*) into metric from public.progress_events p
      where p.student_id=new.student_id
        and (cat='Explorer' or initcap(p.activity_type)=cat);
    insert into public.badge_awards(student_id,badge_code)
      select new.student_id, b.code from public.badge_catalog b
      where b.category=cat and b.threshold<=metric
      on conflict do nothing;
  end loop;
  select coalesce(sum(earned_stars),0) into metric from public.progress_events where student_id=new.student_id;
  insert into public.badge_awards(student_id,badge_code)
    select new.student_id,b.code from public.badge_catalog b where b.category='Star' and b.threshold<=metric
    on conflict do nothing;
  select count(*) into metric from public.progress_events p
    where p.student_id=new.student_id and p.max_score>0 and p.score::numeric/p.max_score>=0.8;
  insert into public.badge_awards(student_id,badge_code)
    select new.student_id,b.code from public.badge_catalog b where b.category='Accuracy' and b.threshold<=metric
    on conflict do nothing;
  return new;
end;
$$;
revoke all on function private.award_progress_badges() from public, anon, authenticated;
create trigger polly_award_badges after insert on public.progress_events
for each row execute function private.award_progress_badges();

create policy "profiles_read_self_admin_or_assigned_teacher" on public.profiles
for select to authenticated
using (id=(select auth.uid()) or private.current_role()='admin' or private.is_teacher_of(id));
create policy "profiles_update_self_or_admin" on public.profiles
for update to authenticated
using (id=(select auth.uid()) or private.current_role()='admin')
with check (
  private.current_role()='admin'
  or (id=(select auth.uid()) and role=private.current_role())
);

create policy "classrooms_read_owner_admin_or_member" on public.classrooms
for select to authenticated
using (teacher_id=(select auth.uid()) or private.current_role()='admin' or exists (
  select 1 where private.is_member_of(id)
));
create policy "classrooms_insert_teacher_or_admin" on public.classrooms
for insert to authenticated
with check (teacher_id=(select auth.uid()) and private.current_role() in ('teacher','admin'));
create policy "classrooms_update_owner_or_admin" on public.classrooms
for update to authenticated
using (teacher_id=(select auth.uid()) or private.current_role()='admin')
with check (teacher_id=(select auth.uid()) or private.current_role()='admin');
create policy "classrooms_delete_owner_or_admin" on public.classrooms
for delete to authenticated
using (teacher_id=(select auth.uid()) or private.current_role()='admin');

create policy "class_members_read_self_teacher_or_admin" on public.class_members
for select to authenticated
using (student_id=(select auth.uid()) or private.current_role()='admin' or exists (
  select 1 from public.classrooms c where c.id=classroom_id and c.teacher_id=(select auth.uid())
));

create policy "progress_read_self_admin_or_assigned_teacher" on public.progress_events
for select to authenticated
using (student_id=(select auth.uid()) or private.current_role()='admin' or private.is_teacher_of(student_id));
create policy "students_insert_own_progress" on public.progress_events
for insert to authenticated
with check (student_id=(select auth.uid()) and private.current_role()='student');

create policy "badge_catalog_read_authenticated" on public.badge_catalog
for select to authenticated using (true);
create policy "badge_awards_read_self_admin_or_assigned_teacher" on public.badge_awards
for select to authenticated
using (student_id=(select auth.uid()) or private.current_role()='admin' or private.is_teacher_of(student_id));
