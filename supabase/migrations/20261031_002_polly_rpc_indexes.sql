-- Small indexes for foreign-key lookups plus narrowly scoped REST RPC entry points.
create index if not exists badge_awards_badge_code_idx
  on public.badge_awards(badge_code);
create index if not exists class_members_student_id_idx
  on public.class_members(student_id);
create index if not exists profiles_guardian_consent_recorded_by_idx
  on public.profiles(guardian_consent_recorded_by);

create or replace function public.approve_polly_profile(
  target_profile uuid,
  record_guardian_consent boolean default false
)
returns public.profiles
language plpgsql
security definer
set search_path = ''
as $$
begin
  return private.approve_profile(target_profile, record_guardian_consent);
end;
$$;
revoke all on function public.approve_polly_profile(uuid,boolean) from public, anon;
grant execute on function public.approve_polly_profile(uuid,boolean) to authenticated;

create or replace function public.join_polly_class(invite text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
begin
  return private.join_class(invite);
end;
$$;
revoke all on function public.join_polly_class(text) from public, anon;
grant execute on function public.join_polly_class(text) to authenticated;
