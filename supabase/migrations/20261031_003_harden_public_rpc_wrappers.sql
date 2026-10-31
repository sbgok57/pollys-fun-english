-- Public REST wrappers run as invoker; the private functions perform the
-- narrowly scoped privileged work and enforce auth.uid()/role checks.
create or replace function public.approve_polly_profile(
  target_profile uuid,
  record_guardian_consent boolean default false
)
returns public.profiles
language plpgsql
security invoker
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
security invoker
set search_path = ''
as $$
begin
  return private.join_class(invite);
end;
$$;
revoke all on function public.join_polly_class(text) from public, anon;
grant execute on function public.join_polly_class(text) to authenticated;
