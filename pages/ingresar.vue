<template>
  <main id="contenido" tabindex="-1" class="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-16 sm:px-8">
    <PathTrail flush />
    <div class="fd-card mt-8 p-8">
      <p class="fd-kicker">Portal</p>
      <h1 class="mt-2 font-display text-3xl font-semibold text-white">Ingresar</h1>
      <p class="mt-3 text-sm leading-relaxed text-slate-400">
        Acceso al panel de proyectos, clientes, presupuestos y documentos.
      </p>

      <form class="mt-8 space-y-4" @submit.prevent="onSubmit">
        <div>
          <label class="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            autocomplete="username"
            class="w-full rounded-xl border border-white/15 bg-black px-3 py-2.5 text-sm text-white outline-none focus:border-signal"
          />
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted" for="password">Contraseña</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
            class="w-full rounded-xl border border-white/15 bg-black px-3 py-2.5 text-sm text-white outline-none focus:border-signal"
          />
        </div>
        <p v-if="error" class="text-sm text-rose-400">{{ error }}</p>
        <button type="submit" class="fd-btn w-full justify-center" :disabled="loading">
          {{ loading ? 'Entrando…' : 'Entrar al panel' }}
        </button>
      </form>

      <div v-if="supabaseReady" class="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-muted">
        <p class="font-medium text-slate-300">Supabase conectado</p>
        <p class="mt-2">Usá el email y clave del usuario que creaste en Authentication.</p>
      </div>
      <div v-else class="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-muted">
        <p class="font-medium text-slate-300">Modo demo (sin Supabase)</p>
        <p class="mt-2">Email: <code class="text-signal">{{ demoCredentials.email }}</code></p>
        <p>Clave: <code class="text-signal">{{ demoCredentials.password }}</code></p>
      </div>
    </div>
  </main>
</template>

<script setup>
const { localePath } = useLocale()
const {
  init,
  login,
  isAuthed,
  supabaseReady,
  demoCredentials,
} = usePortal()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

usePageMeta(() => 'Ingresar')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

onMounted(async () => {
  await init()
  if (!supabaseReady.value) email.value = demoCredentials.email
  if (isAuthed.value) await navigateTo(localePath('/panel'))
})

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    await login(email.value, password.value)
    await navigateTo(localePath('/panel'))
  } catch (e) {
    error.value = e?.message || 'No se pudo ingresar'
  } finally {
    loading.value = false
  }
}
</script>
