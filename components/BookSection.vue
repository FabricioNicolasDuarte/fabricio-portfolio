<template>
  <section id="book" class="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
    <div class="fd-card overflow-hidden p-8 sm:p-10">
      <p class="fd-kicker">{{ t.book.kicker }}</p>
      <h2 class="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ t.book.title }}</h2>
      <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">{{ t.book.body }}</p>
      <p class="mt-2 text-sm text-muted">{{ t.book.meta }}</p>
      <p class="mt-2 text-sm text-muted">{{ t.book.zone }}</p>
      <p class="mt-4 text-sm text-slate-200">
        <a class="underline decoration-white/20 underline-offset-4 hover:text-white" href="mailto:fabricioduarteoficial@gmail.com">fabricioduarteoficial@gmail.com</a>
      </p>

      <form class="mt-8 grid max-w-xl gap-3" @submit.prevent="send">
        <input
          v-model="honeypot"
          type="text"
          name="company_url"
          tabindex="-1"
          autocomplete="off"
          class="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          :aria-hidden="true"
        />
        <label class="text-xs text-muted" for="book-name">
          {{ t.book.name }}
          <input
            id="book-name"
            v-model="name"
            type="text"
            maxlength="120"
            autocomplete="name"
            class="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-lime-400/50"
          />
        </label>
        <label class="text-xs text-muted" for="book-email">
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
            class="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-lime-400/50"
          />
        </label>
        <div class="grid gap-3 sm:grid-cols-2">
          <label class="text-xs text-muted" for="book-day">
            {{ t.book.day }}
            <input
              id="book-day"
              v-model="day"
              required
              type="date"
              :min="minDay"
              class="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-lime-400/50"
            />
          </label>
          <label class="text-xs text-muted" for="book-hour">
            {{ t.book.hour }}
            <select
              id="book-hour"
              v-model="hour"
              required
              class="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-lime-400/50"
            >
              <option disabled value="">{{ t.book.hourPick }}</option>
              <option v-for="slot in slots" :key="slot" :value="slot">{{ slot }}</option>
            </select>
          </label>
        </div>
        <label class="text-xs text-muted" for="book-note">
          {{ t.book.note }}
          <textarea
            id="book-note"
            v-model="note"
            rows="3"
            maxlength="800"
            class="mt-1 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-lime-400/50"
          />
        </label>
        <p v-if="formError" id="book-status" class="text-sm text-red-300" role="alert">{{ formError }}</p>
        <button type="submit" class="fd-btn w-fit" :disabled="sending">
          {{ sending ? t.book.sending : t.book.submit }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const { t, locale, localePath } = useLocale()
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
