<template>
  <section id="book" class="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
    <div class="glass overflow-hidden rounded-3xl p-8 sm:p-10">
      <p class="text-xs font-medium tracking-widest text-cyan-400 uppercase">{{ t.book.kicker }}</p>
      <h2 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ t.book.title }}</h2>
      <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.book.body }}</p>
      <p class="mt-2 text-sm text-slate-500">{{ t.book.meta }}</p>

      <a
        v-if="bookUrl"
        :href="bookUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        @click="tap"
      >
        {{ t.book.calendar }}
      </a>

      <form class="mt-8 grid max-w-xl gap-3" @submit.prevent="send">
        <label class="text-xs text-slate-500">
          {{ t.book.when }}
          <input
            v-model="when"
            required
            type="datetime-local"
            class="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/50"
          />
        </label>
        <label class="text-xs text-slate-500">
          {{ t.book.note }}
          <textarea
            v-model="note"
            rows="3"
            class="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/50"
          />
        </label>
        <button type="submit" class="w-fit rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/20">
          {{ t.book.submit }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const { t } = useLocale()
const { tap } = useUiSound()
const config = useRuntimeConfig()
const bookUrl = config.public.bookUrl || ''
const when = ref('')
const note = ref('')

const send = () => {
  tap()
  const slot = when.value ? when.value.replace('T', ' ') : ''
  const body = encodeURIComponent(`${t.value.book.mailBody}\n\n${slot}\n${note.value}`)
  const subject = encodeURIComponent(t.value.book.mailSubject)
  window.location.href = `mailto:fabricioduarteoficial@gmail.com?subject=${subject}&body=${body}`
}
</script>
