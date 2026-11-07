<template>
  <section id="book" data-kpr-section="book" data-kpr-theme="dark" class="frame-container py-12 md:py-16 flex items-center justify-center">
    <div class="kpr-clip-folder border border-white/15 bg-[#0a0a0a] p-6 sm:p-10 max-w-2xl w-full mx-auto shadow-2xl">
      <p class="fd-kicker text-center">008 // {{ t.book.kicker }}</p>
      <h1 class="mt-2 type-h1 text-white text-center">{{ t.book.title }}</h1>
      <p class="mt-3 type-body1 text-white/80 text-center">{{ t.book.body }}</p>
      <p class="mt-3 font-mono text-[11px] uppercase text-[#c0fb50] text-center">// {{ t.book.expect }}</p>
      <p class="mt-2 font-mono text-[10px] uppercase text-white/50 text-center">{{ t.book.meta }} · {{ t.book.zone }}</p>
      <p class="mt-4 font-mono text-[12px] text-white text-center">
        <a class="underline decoration-[#c0fb50] underline-offset-4 hover:text-[#c0fb50]" href="mailto:fabricioduarteoficial@gmail.com">
          FABRICIODUARTEOFICIAL@GMAIL.COM
        </a>
      </p>

      <form class="mt-8 grid w-full gap-4" @submit.prevent="send">
        <input
          v-model="honeypot"
          type="text"
          name="company_url"
          tabindex="-1"
          autocomplete="off"
          class="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          :aria-hidden="true"
        />
        <label class="font-mono text-[10px] uppercase tracking-wider text-white/70" for="book-name">
          {{ t.book.name }}
          <input
            id="book-name"
            v-model="name"
            type="text"
            maxlength="120"
            autocomplete="name"
            class="mt-1.5 w-full border border-white/20 bg-black px-3.5 py-2.5 font-sans text-sm text-white outline-none focus:border-[#c0fb50]"
            @focus="playHover"
          />
        </label>
        <label class="font-mono text-[10px] uppercase tracking-wider text-white/70" for="book-email">
          {{ t.book.email }}
          <input
            id="book-email"
            v-model="email"
            required
            type="email"
            maxlength="160"
            autocomplete="email"
            :aria-invalid="!!formError"
            aria-describedby="book-status"
            class="mt-1.5 w-full border border-white/20 bg-black px-3.5 py-2.5 font-sans text-sm text-white outline-none focus:border-[#c0fb50]"
            @focus="playHover"
          />
        </label>
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="font-mono text-[10px] uppercase tracking-wider text-white/70" for="book-day">
            {{ t.book.day }}
            <input
              id="book-day"
              v-model="day"
              required
              type="date"
              :min="minDay"
              class="mt-1.5 w-full border border-white/20 bg-black px-3.5 py-2.5 font-sans text-sm text-white outline-none focus:border-[#c0fb50]"
              @change="playFilter"
              @focus="playHover"
            />
          </label>
          <label class="font-mono text-[10px] uppercase tracking-wider text-white/70" for="book-hour">
            {{ t.book.hour }}
            <select
              id="book-hour"
              v-model="hour"
              required
              data-sfx="filter"
              class="mt-1.5 w-full border border-white/20 bg-black px-3.5 py-2.5 font-sans text-sm text-white outline-none focus:border-[#c0fb50]"
              @change="playFilter"
              @focus="playHover"
            >
              <option disabled value="">{{ t.book.hourPick }}</option>
              <option v-for="slot in slots" :key="slot" :value="slot">{{ slot }}</option>
            </select>
          </label>
        </div>
        <label class="font-mono text-[10px] uppercase tracking-wider text-white/70" for="book-note">
          {{ t.book.note }}
          <textarea
            id="book-note"
            v-model="note"
            rows="3"
            maxlength="800"
            class="mt-1.5 w-full border border-white/20 bg-black px-3.5 py-2.5 font-sans text-sm text-white outline-none focus:border-[#c0fb50]"
            @focus="playHover"
          />
        </label>
        <p v-if="formError" id="book-status" class="font-mono text-xs text-red-400" role="alert">{{ formError }}</p>
        <button
          type="submit"
          class="fd-btn w-fit mt-2 cursor-pointer mx-auto"
          :disabled="sending"
          @mouseenter="playHover"
          @click="playClick"
        >
          {{ sending ? t.book.sending : t.book.submit }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const { t, locale, localePath } = useLocale()
const { playHover, playClick, playFilter } = useKprAudio()
const name = ref('')
const email = ref('')
const day = ref('')
const hour = ref('')
const note = ref('')
const honeypot = ref('')
const sending = ref(false)
const formError = ref('')
const slots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00']
const minDay = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Argentina/Buenos_Aires',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date())

function mailtoHref() {
  const slot = `${day.value} ${hour.value}`.trim()
  const body = encodeURIComponent(
    `${t.value.book.mailBody}\n\n${slot} (America/Argentina/Buenos_Aires)\n${name.value}\n${email.value}\n${note.value}`,
  )
  const subject = encodeURIComponent(t.value.book.mailSubject)
  return `mailto:fabricioduarteoficial@gmail.com?subject=${subject}&body=${body}`
}

async function send() {
  formError.value = ''
  if (sending.value) return
  sending.value = true
  try {
    const res = await $fetch('/api/book', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        day: day.value,
        hour: hour.value,
        note: note.value,
        company_url: honeypot.value,
        locale: locale.value,
      },
    })
    if (res?.ok) {
      await navigateTo(localePath('/agendar/enviado'))
      return
    }
    throw new Error('bad')
  } catch (err) {
    const code = err?.statusCode || err?.status || err?.data?.statusCode
    const mailto = err?.data?.channel === 'mailto' || code === 503
    if (mailto) {
      window.location.href = mailtoHref()
      return
    }
    formError.value = t.value.book.fail
  } finally {
    sending.value = false
  }
}
</script>
