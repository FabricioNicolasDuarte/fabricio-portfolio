-- Portal Fabricio Duarte (Supabase)
-- Ejecutar en SQL Editor del proyecto. Luego crear usuario admin en Authentication.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  role text not null default 'client' check (role in ('admin', 'client')),
  created_at timestamptz not null default now()
);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text,
  email text,
  country text,
  status text not null default 'activo',
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  name text not null,
  status text not null default 'propuesta',
  phase text,
  share_token text unique not null,
  repo_url text,
  demo_url text,
  payment_gateway text,
  budget_ref numeric,
  budget_proposed numeric,
  ops_monthly numeric,
  currency text default 'USD',
  summary text,
  updated_at timestamptz not null default now()
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  kind text not null default 'documento',
  href text,
  storage_path text,
  note text,
  downloadable boolean default false,
  visible_to_client boolean default true,
  created_at timestamptz not null default now()
);

create table if not exists public.milestones (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  label text not null,
  status text not null default 'pendiente',
  due date
);

alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.documents enable row level security;
alter table public.milestones enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

-- Admin full access
create policy "admin profiles" on public.profiles for all using (public.is_admin());
create policy "admin clients" on public.clients for all using (public.is_admin());
create policy "admin projects" on public.projects for all using (public.is_admin());
create policy "admin documents" on public.documents for all using (public.is_admin());
create policy "admin milestones" on public.milestones for all using (public.is_admin());

-- Público: lectura de proyecto por share_token (vía RPC o vista; client usa anon + token filter en API)
-- Para links /c/:token usar Edge Function o server route con service role.
-- Mientras tanto el modo demo del front cubre la previsualización.
