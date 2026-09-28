-- Portal bootstrap: admin por email + seed AXIA + lectura pública por share_token
-- 1) Antes Authentication → Users → Add user (email + password).
-- 2) Corré este script (ajustá el email si usaste otro).

-- Perfil admin (reemplaza el placeholder: busca el usuario real por email)
insert into public.profiles (id, full_name, role)
select id, coalesce(raw_user_meta_data->>'full_name', 'Fabricio Duarte'), 'admin'
from auth.users
where email = 'admin@fabricioduarte.tech'
on conflict (id) do update
  set full_name = excluded.full_name,
      role = 'admin';

-- Si usaste otro email, cambiá la línea del where o corré:
-- select id, email from auth.users;

-- Lectura del propio perfil (para saber el rol)
drop policy if exists "own profile read" on public.profiles;
create policy "own profile read" on public.profiles
  for select using (auth.uid() = id);

-- Vista cliente pública por token
create or replace function public.portal_share(p_token text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  result json;
begin
  select json_build_object(
    'project', json_build_object(
      'id', p.id,
      'clientId', p.client_id,
      'name', p.name,
      'status', p.status,
      'phase', p.phase,
      'shareToken', p.share_token,
      'repoUrl', p.repo_url,
      'demoUrl', p.demo_url,
      'paymentGateway', p.payment_gateway,
      'budgetRef', p.budget_ref,
      'budgetProposed', p.budget_proposed,
      'opsMonthly', p.ops_monthly,
      'currency', p.currency,
      'updatedAt', p.updated_at,
      'summary', p.summary
    ),
    'client', json_build_object(
      'id', c.id,
      'name', c.name,
      'contact', c.contact,
      'email', c.email,
      'country', c.country,
      'status', c.status,
      'notes', c.notes
    ),
    'documents', (
      select coalesce(json_agg(json_build_object(
        'id', d.id,
        'projectId', d.project_id,
        'title', d.title,
        'kind', d.kind,
        'href', d.href,
        'note', d.note,
        'downloadable', d.downloadable,
        'visibleToClient', d.visible_to_client
      ) order by d.created_at), '[]'::json)
      from public.documents d
      where d.project_id = p.id and d.visible_to_client = true
    ),
    'milestones', (
      select coalesce(json_agg(json_build_object(
        'id', m.id,
        'projectId', m.project_id,
        'label', m.label,
        'status', m.status,
        'due', m.due
      ) order by m.label), '[]'::json)
      from public.milestones m
      where m.project_id = p.id
    )
  )
  into result
  from public.projects p
  join public.clients c on c.id = p.client_id
  where p.share_token = p_token;

  return result;
end;
$$;

grant execute on function public.portal_share(text) to anon, authenticated;

-- Seed AXIA (idempotente por share_token)
do $$
declare
  cid uuid;
  pid uuid;
begin
  select id into cid from public.clients where email = 'info@axia.com.py' limit 1;
  if cid is null then
    insert into public.clients (name, contact, email, country, status, notes)
    values (
      'AXIA Real Estate',
      'Karen Montiel',
      'info@axia.com.py',
      'Paraguay',
      'activo',
      'Brokerage de inversión · Asunción'
    )
    returning id into cid;
  end if;

  select id into pid from public.projects where share_token = 'axia' limit 1;
  if pid is null then
    insert into public.projects (
      client_id, name, status, phase, share_token,
      repo_url, demo_url, payment_gateway,
      budget_ref, budget_proposed, ops_monthly, currency, summary
    ) values (
      cid,
      'Plataforma AXIA (PWA)',
      'propuesta',
      'Etapa 1 · Sitio público',
      'axia',
      'https://github.com/FabricioNicolasDuarte',
      null,
      'Arnipay (previsto)',
      7000, 3500, 150, 'USD',
      'App web instalable: sitio público, portal inversor, cobranzas con IA, admin. de rentas y contabilidad operativa. Propiedad a nombre del cliente.'
    )
    returning id into pid;

    insert into public.documents (project_id, title, kind, href, note, downloadable, visible_to_client)
    values
      (pid, 'Propuesta comercial (web)', 'presupuesto', '/propuestas/axia', null, false, true),
      (pid, 'Propuesta HTML (archivo local / PDF)', 'documento', null, 'Versión descargable al publicar en Storage', false, true);

    insert into public.milestones (project_id, label, status)
    values
      (pid, 'Kickoff etapa 1', 'pendiente'),
      (pid, 'Sitio público en aire', 'pendiente'),
      (pid, 'Portal cliente', 'pendiente');
  end if;
end $$;
