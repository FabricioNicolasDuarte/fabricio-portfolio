<template>
  <PortalShell>
    <main id="contenido" tabindex="-1" class="axia-reuniones-page pb-24">
      <!-- Top Banner Corporativo AXIA & Fabricio Duarte -->
      <section class="border-b border-white/10 bg-gradient-to-b from-[#182f40]/40 to-transparent px-5 py-8 sm:px-8">
        <div class="mx-auto max-w-6xl">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <!-- Logo AXIA Vectorial -->
              <svg class="h-10 w-auto" viewBox="0 0 689.97 798.3" xmlns="http://www.w3.org/2000/svg">
                <path fill="#d08b22" d="M344.99,0l-.11,1.01,129.85,223.9-217.81,380.17-256.92.03v-.69L342.74,2.74c.53-.94.78-2.14.87-2.74h1.38Z"/>
                <path fill="#ffffff" d="M689.97,604.41v.46l-181.38.42c-23.86.05-46.93-2.95-68.8-12.15-17.98-7.56-33.87-18.73-45.3-34.73-11.14-15.61-18.54-33.7-21.97-52.32-5.66-25.43,1.32-49.02,13.66-70.97l103.4-183.84,200.39,353.13Z"/>
                <path fill="#ffffff" d="M368.44,798.3h-8.97c-.66-.44-2.72-.76-4.18-.91l-27.7-40.24-26.93,40.07c-1.49.3-3.81.75-4.66,1.08h-9.66l-7.29-1.93,36.83-52.33-34.37-51.52c7.77-1.65,14.99-2.01,22.39-.94l25.36,40.07,24.63-40.22c7.46-.73,14.35-.72,21.42,1.14l-34.18,51.98,36.42,51.94-9.1,1.81Z"/>
                <path fill="#ffffff" d="M262.19,798.3h-8.77l-3.09-1.45-9.36-24.72-41.89.05-9.21,25.23c-1.84.17-3.43.4-4.26.88h-8.28l-6.41-2.17,39.83-104.14c6.86-.96,13.09-1.18,19.37.21l40.09,104.06c-3.55.89-5.84,1.7-8.01,2.04ZM235.08,756.24l-12.15-32.54-3.01-9.05-3.73,10.77-11.19,30.93,30.08-.11Z"/>
                <path fill="#ffffff" d="M510.58,798.3h-8.09l-3.19-1.26-9.42-24.89-41.9.03-9.29,25.35c-1.97.1-3.35.29-4,.77h-8.28l-6.59-2.2,39.76-104.02c6.45-1.13,12.69-1.13,19.35-.03l40.18,104.28-8.54,1.98ZM483.98,756.26l-12.3-32.9-2.87-8.84-3.29,9.69-11.69,32.18,30.15-.12Z"/>
                <path fill="#ffffff" d="M403.63,798.3h-12.91l-2.4-1.6v-104.38c6.4-1.46,12.5-1.48,18.85.02v104.95c-1.62.41-2.74.71-3.54,1.02Z"/>
              </svg>
              <div>
                <span class="rounded-full border border-[#d08b22]/40 bg-[#d08b22]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#efc981]">
                  Subsección: Archivo de Reuniones & Minutas
                </span>
                <p class="mt-0.5 text-xs text-slate-400">
                  Acceso exclusivo para <strong class="text-white">{{ session?.name || 'Equipo Comercial AXIA' }}</strong>
                </p>
              </div>
            </div>

            <!-- Navegación y Acción de Registro -->
            <div class="flex items-center gap-2">
              <NuxtLink
                :to="localePath('/panel/axia')"
                class="fd-btn-outline text-xs"
              >
                ← Volver al Flujo
              </NuxtLink>
              <button
                type="button"
                class="fd-btn text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
                @click="showNewMeetingModal = true"
              >
                + Cargar Nueva Minuta Meet
              </button>
            </div>
          </div>

          <!-- Barra de Pestañas de Subsección Unificada -->
          <div class="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4">
            <NuxtLink
              :to="localePath('/panel/axia')"
              class="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              📊 1. Flujo Completo & Estrategia
            </NuxtLink>
            <NuxtLink
              :to="localePath('/panel/axia/herramientas')"
              class="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              🛠️ 2. Banco de Herramientas & Videos
            </NuxtLink>
            <span class="rounded-xl bg-[#d08b22]/20 px-4 py-2 text-xs font-semibold text-[#efc981] border border-[#d08b22]/40">
              🎙️ 3. Reuniones & Minutas Meet
            </span>
            <NuxtLink
              :to="localePath('/panel/axia#manual-meta')"
              class="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              📘 4. Manual Interno de Meta Ads
            </NuxtLink>
          </div>
        </div>
      </section>

      <div class="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <!-- Encabezado de la Subsección -->
        <div class="border-b border-white/10 pb-6">
          <p class="text-xs uppercase tracking-widest text-[#d08b22]">HUB DE DECISIONES & SEGUIMIENTO</p>
          <h1 class="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Reuniones Virtuales & Resúmenes de Google Meet
          </h1>
          <p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
            En esta sección queda almacenado el registro ordenado por fecha de cada videollamada por Google Meet con sus <strong>resúmenes textuales automáticos (Gemini in Meet)</strong>, acuerdos comerciales, acuerdos de pauta, asignación de tareas y etiquetas temáticas. Cualquier miembro del equipo tiene acceso permanente para no perder el hilo de las operaciones.
          </p>
        </div>

        <!-- Barra de Control: Buscador en Vivo & Filtros por Etiquetas -->
        <div class="mt-8 space-y-4">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <!-- Input de Búsqueda -->
            <div class="relative flex-1">
              <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                🔍
              </span>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Buscar por tema, palabra clave, acuerdo o asistente..."
                class="w-full rounded-2xl border border-white/15 bg-slate-900/80 py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-400 focus:border-[#efc981] focus:outline-none focus:ring-1 focus:ring-[#efc981]"
              />
            </div>

            <!-- Contador de Reuniones -->
            <div class="text-xs text-slate-400">
              Mostrando <strong class="text-[#efc981]">{{ filteredMeetings.length }}</strong> de {{ allMeetings.length }} reuniones registradas
            </div>
          </div>

          <!-- Filtros Rápidos de Etiquetas -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mr-1">Filtrar por Etiqueta:</span>
            <button
              type="button"
              class="rounded-xl px-3 py-1 text-xs font-medium transition"
              :class="selectedTag === '' ? 'bg-[#d08b22] text-black font-semibold' : 'border border-white/15 text-slate-300 hover:border-white/30'"
              @click="selectedTag = ''"
            >
              Todas
            </button>
            <button
              v-for="tag in availableTags"
              :key="tag"
              type="button"
              class="rounded-xl px-3 py-1 text-xs font-medium transition"
              :class="selectedTag === tag ? 'bg-[#d08b22] text-black font-semibold' : 'border border-white/15 text-slate-300 hover:border-white/30'"
              @click="selectedTag = tag"
            >
              #{{ tag }}
            </button>
          </div>
        </div>

        <!-- Listado Cronológico de Reuniones -->
        <div class="mt-8 space-y-6">
          <div v-if="filteredMeetings.length === 0" class="fd-card p-12 text-center">
            <p class="text-3xl">📭</p>
            <h3 class="mt-3 font-display text-base font-bold text-white">No se encontraron reuniones</h3>
            <p class="mt-1 text-xs text-slate-400">Intentá con otra palabra clave o limpiá los filtros de etiqueta.</p>
            <button
              type="button"
              class="fd-btn-outline mt-4 text-xs"
              @click="searchQuery = ''; selectedTag = ''"
            >
              Restablecer Filtros
            </button>
          </div>

          <!-- Card de Reunión -->
          <article
            v-for="meet in filteredMeetings"
            :key="meet.id"
            class="fd-card overflow-hidden border border-white/15 transition-all hover:border-[#d08b22]/50"
          >
            <!-- Cabecera de la Tarjeta -->
            <div class="border-b border-white/10 bg-gradient-to-r from-[#182f40]/50 via-slate-900 to-transparent p-5 sm:p-6">
              <div class="flex flex-wrap items-start justify-between gap-3">
                <div class="space-y-1.5">
                  <div class="flex flex-wrap items-center gap-2">
                    <!-- Badge de Fecha & Hora -->
                    <span class="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                      🗓️ {{ meet.date }} • {{ meet.time }}
                    </span>
                    <!-- Duración -->
                    <span class="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[11px] text-slate-300">
                      ⏱ {{ meet.duration }}
                    </span>
                    <!-- Indicador Meet -->
                    <span class="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                      📹 Google Meet
                    </span>
                  </div>

                  <!-- Título de la Reunión -->
                  <h2 class="font-display text-xl font-bold text-white sm:text-2xl">
                    {{ meet.title }}
                  </h2>
                </div>

                <!-- Enlace a Drive / Meet -->
                <div class="flex items-center gap-2">
                  <a
                    v-if="meet.driveLink"
                    :href="meet.driveLink"
                    target="_blank"
                    rel="noopener"
                    class="fd-btn-outline inline-flex items-center gap-1.5 !py-1.5 text-xs text-[#efc981]"
                  >
                    ▶ Abrir Grabación en Drive ↗
                  </a>
                  <button
                    type="button"
                    class="rounded-xl border border-white/15 bg-white/5 p-2 text-xs text-slate-300 transition hover:bg-white/10"
                    title="Copiar resumen al portapapeles"
                    @click="copySummary(meet)"
                  >
                    📋
                  </button>
                </div>
              </div>

              <!-- Asistentes -->
              <div class="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span class="font-semibold text-white">Participantes:</span>
                <span
                  v-for="person in meet.attendees"
                  :key="person"
                  class="rounded-lg bg-black/40 px-2 py-0.5 text-[11px] text-slate-300 border border-white/5"
                >
                  👤 {{ person }}
                </span>
              </div>

              <!-- Etiquetas / Tags -->
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span
                  v-for="tag in meet.tags"
                  :key="tag"
                  class="cursor-pointer rounded-md bg-[#d08b22]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#efc981] border border-[#d08b22]/30 hover:bg-[#d08b22]/30"
                  @click="selectedTag = tag"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Cuerpo del Resumen Textual Integrado (Meet + Gemini) -->
            <div class="p-5 sm:p-6 space-y-6">
              <!-- Resumen Ejecutivo -->
              <div>
                <h3 class="font-display text-xs font-bold uppercase tracking-wider text-[#d08b22]">
                  Resumen Ejecutivo Textual (Google Meet AI)
                </h3>
                <p class="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200">
                  {{ meet.summary }}
                </p>
              </div>

              <!-- Grid de Puntos Clave & Decisiones -->
              <div class="grid gap-4 md:grid-cols-2">
                <!-- Puntos Clave Tratados -->
                <div class="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <h4 class="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-white">
                    <span>📌</span> Temas & Puntos Tratados:
                  </h4>
                  <ul class="mt-3 space-y-2 text-xs text-slate-300">
                    <li v-for="(point, idx) in meet.keyPoints" :key="idx" class="flex items-start gap-2">
                      <span class="text-[#d08b22] font-bold">•</span>
                      <span>{{ point }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Acuerdos & Decisiones Tomadas -->
                <div class="rounded-2xl border border-[#d08b22]/20 bg-[#d08b22]/5 p-4">
                  <h4 class="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-[#efc981]">
                    <span>🤝</span> Acuerdos & Decisiones:
                  </h4>
                  <ul class="mt-3 space-y-2 text-xs text-slate-300">
                    <li v-for="(decision, idx) in meet.decisions" :key="idx" class="flex items-start gap-2">
                      <span class="text-emerald-400 font-bold">✓</span>
                      <span>{{ decision }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Plan de Acción & Tareas con Responsables -->
              <div v-if="meet.actionItems && meet.actionItems.length > 0" class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 class="font-display text-xs font-bold uppercase tracking-wider text-white">
                  ⚡ Próximos Pasos & Compromisos Asignados:
                </h4>
                <div class="mt-3 space-y-2">
                  <div
                    v-for="(item, idx) in meet.actionItems"
                    :key="idx"
                    class="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/5 bg-black/40 px-3 py-2 text-xs"
                  >
                    <div class="flex items-center gap-2 text-slate-200">
                      <span class="h-2 w-2 rounded-full bg-[#efc981]"></span>
                      <span>{{ item.task }}</span>
                    </div>
                    <span class="rounded-lg bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                      Asignado: <strong class="text-white">{{ item.owner }}</strong>
                    </span>
                  </div>
                </div>
              </div>

              <!-- Transcripción Detallada / Minuta Extendida Colapsable -->
              <div v-if="meet.fullTranscript" class="border-t border-white/10 pt-4">
                <button
                  type="button"
                  class="flex w-full items-center justify-between text-xs font-medium text-slate-400 hover:text-white"
                  @click="meet.isExpanded = !meet.isExpanded"
                >
                  <span>{{ meet.isExpanded ? '▲ Ocultar transcripción y notas detalladas' : '▼ Ver transcripción y notas detalladas de la sesión' }}</span>
                  <span class="text-[10px] text-[#efc981]">Click para alternar</span>
                </button>
                <div v-if="meet.isExpanded" class="mt-3 rounded-xl border border-white/5 bg-black/50 p-4 text-xs leading-relaxed text-slate-300 whitespace-pre-line font-mono">
                  {{ meet.fullTranscript }}
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- MODAL: Cargar Nueva Minuta Meet -->
        <div
          v-if="showNewMeetingModal"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div class="w-full max-w-2xl rounded-3xl border border-white/20 bg-slate-900 p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 class="font-display text-lg font-bold text-white">
                Registrar Nueva Reunión de Google Meet
              </h3>
              <button
                type="button"
                class="rounded-lg p-1 text-slate-400 hover:text-white"
                @click="showNewMeetingModal = false"
              >
                ✕
              </button>
            </div>

            <p class="text-xs text-slate-300">
              Copia y pega aquí la información y el resumen textual que Google Meet genera automáticamente para que quede indexado en el historial de todo el equipo.
            </p>

            <form class="space-y-4" @submit.prevent="saveNewMeeting">
              <div>
                <label class="block text-[11px] font-semibold text-slate-300 uppercase">Título de la Reunión</label>
                <input
                  v-model="newForm.title"
                  required
                  type="text"
                  placeholder="Ej: Alineación Pauta Ads & Revisión de Guion de Ventas"
                  class="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#efc981] focus:outline-none"
                />
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-[11px] font-semibold text-slate-300 uppercase">Fecha</label>
                  <input
                    v-model="newForm.date"
                    required
                    type="text"
                    placeholder="Ej: 28 Octubre 2026"
                    class="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#efc981] focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-slate-300 uppercase">Horario & Duración</label>
                  <input
                    v-model="newForm.time"
                    required
                    type="text"
                    placeholder="Ej: 18:00 - 19:15 (45 min)"
                    class="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#efc981] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-slate-300 uppercase">Participantes (separados por coma)</label>
                <input
                  v-model="newForm.attendees"
                  type="text"
                  placeholder="Fabricio Duarte, Josefina Ruiz, Deborah, Karen Montiel"
                  class="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#efc981] focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-slate-300 uppercase">Etiquetas / Tags (separados por coma)</label>
                <input
                  v-model="newForm.tags"
                  type="text"
                  placeholder="PautaPublicitaria, GuionesVideo, CierreOperaciones"
                  class="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#efc981] focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-slate-300 uppercase">Enlace a Grabación / Google Drive</label>
                <input
                  v-model="newForm.driveLink"
                  type="url"
                  placeholder="https://drive.google.com/drive/folders/..."
                  class="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#efc981] focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-slate-300 uppercase">Resumen Textual Integrado (Google Meet / Gemini)</label>
                <textarea
                  v-model="newForm.summary"
                  required
                  rows="4"
                  placeholder="Pega aquí el resumen o puntos clave redactados por Google Meet..."
                  class="mt-1 w-full rounded-xl border border-white/15 bg-black/50 p-3 text-xs text-white placeholder-slate-500 focus:border-[#efc981] focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-slate-300 uppercase">Puntos Clave / Acuerdos (uno por línea)</label>
                <textarea
                  v-model="newForm.keyPointsText"
                  rows="3"
                  placeholder="• Definición de presupuesto diario&#10;• Validación de videos para reels"
                  class="mt-1 w-full rounded-xl border border-white/15 bg-black/50 p-3 text-xs text-white placeholder-slate-500 focus:border-[#efc981] focus:outline-none"
                ></textarea>
              </div>

              <div class="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  class="fd-btn-outline text-xs"
                  @click="showNewMeetingModal = false"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="fd-btn text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
                >
                  Guardar Reunión en el Archivo
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Banner de Notificación / Copiado al Portapapeles -->
        <div
          v-if="copyToast"
          class="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-slate-900 px-4 py-3 text-xs font-semibold text-emerald-300 shadow-2xl backdrop-blur-md"
        >
          <span>✓</span> Resumen de la reunión copiado al portapapeles
        </div>

        <!-- Footer Oficial Fabricio Duarte Tech -->
        <footer class="mt-20 border-t border-white/10 pt-8 text-center text-xs text-slate-400">
          <p class="font-medium text-white">
            © {{ new Date().getFullYear() }} <a href="https://fabricioduarte.tech" class="text-[#efc981] hover:underline" target="_blank">fabricioduarte.tech</a> • Fabricio Nicolás Duarte. Todos los derechos reservados.
          </p>
          <p class="mt-1 text-slate-500">
            Plataforma interna de archivo, minutas y operaciones estratégicas para el equipo de ventas.
          </p>
        </footer>
      </div>
    </main>
  </PortalShell>
</template>

<script setup>
const { session } = usePortal()
const { localePath } = useLocale()

const searchQuery = ref('')
const selectedTag = ref('')
const showNewMeetingModal = ref(false)
const copyToast = ref(false)

// Historial inicial de reuniones reales de la operación AXIA
const allMeetings = ref([
  {
    id: 'meet-01-lanzamiento-estrategia',
    date: '27 Octubre 2026',
    time: '19:30 - 20:45',
    duration: '1h 15m',
    title: 'Lanzamiento Comercial Pauta Fin de Año: Auditoría de Videos y Esquema de Cierre',
    driveLink: 'https://drive.google.com/drive/folders/15vYyUnXLzlA7N1HijYjCLsut8ofDeao-',
    attendees: ['Fabricio Nicolás Duarte', 'Josefina Ruiz', 'Deborah', 'Karen Montiel'],
    tags: ['PautaPublicitaria', 'GuionesVideo', 'MetaAds', 'Comisiones5%'],
    summary: 'Sesión integral de alineación estratégica para presentar el nuevo sistema de captación de inversores para AXIA Inmobiliaria. Fabricio expuso la arquitectura completa desde la grabación del video hasta el cierre de la operación, destacando por qué Meta Advantage+ y los guiones estructurados con gancho de 3 segundos son indispensables para evitar que la audiencia deslice.',
    keyPoints: [
      'Explicación del embudo: Tráfico frío en Meta -> Auditoría IA -> WhatsApp Bot -> Llamada de Cierre -> Boleto de Reserva.',
      'Revisión de los 4 videos grabados en Google Drive: Se contrastó el Caso 1 (rechazado por inicio lento y falta de datos) con el Caso 2 (aprobado con estructura de alto impacto).',
      'Acuerdo de comisión del 5% para Fabricio sobre el valor bruto facturado por cada departamento cerrado derivado de la infraestructura.',
      'Estandarización de 2 grabaciones semanales por asesora siguiendo los guiones maestros sin saludar con fórmulas obsoletas.'
    ],
    decisions: [
      'Aprobado el lanzamiento de la pauta publicitaria bajo la Categoría Especial de Vivienda (Housing) de Meta para evitar bloqueos.',
      'Se implementa la regla de oro: Ningún video sale a pauta de pago sin pasar la auditoría previa con score mayor a 80 puntos.',
      'Se habilita el acceso individual al portal interno en fabricioduarte.tech para Josefina, Deborah y Karen.'
    ],
    actionItems: [
      { task: 'Publicar el portal privado con reproductor interactivo y recursos de marca', owner: 'Fabricio Duarte' },
      { task: 'Re-grabar el recorrido del edificio aplicando el gancho financiero en los primeros 3 segundos', owner: 'Josefina & Deborah' },
      { task: 'Definir el listado de 3 propiedades en pozo prioritarias con precios y cuotas exactas', owner: 'Karen Montiel' }
    ],
    isExpanded: false,
    fullTranscript: `[19:30] Fabricio Duarte: Buenas noches equipo. Hoy les quiero mostrar exactamente cómo vamos a pasar de depender de prospectos curiosos a construir una máquina predecible de ventas para AXIA en Asunción.
[19:38] Josefina Ruiz: Sí Fabricio, estuvimos viendo que en Meta nos llegan muchas consultas por curiosidad pero poca gente con dinero listo para reservar.
[19:42] Fabricio Duarte: Exacto, Josefina. El problema es el filtro inicial. Si arrancamos un video diciendo "Hola chicas, hoy les quiero mostrar...", el inversor ya deslizó hacia arriba. El gancho tiene que ser agresivo: "¿Dejar tus ahorros en el banco perdiendo contra la inflación? Te muestro cómo cambiarlos por pozo con cuotas accesibles en Asunción".
[19:55] Deborah: ¿Y cómo nos aseguramos de que el video cumpla eso antes de meter dinero en la pauta?
[20:05] Fabricio Duarte: Ahí entra el Auditor de Videos con IA que integré en nuestro portal. El sistema revisa cuadro a cuadro: hook de 0 a 3s, oferta de pozo, claridad del precio base y llamada a WhatsApp. Si no da 80 puntos, lo corregimos antes de gastar un solo guaraní.
[20:25] Karen Montiel: Excelente, así cada una sabe qué mejorar antes de subir el material definitivo.
[20:40] Fabricio Duarte: Quedamos de acuerdo en la comisión del 5% por cierre y en mantener este repositorio de minutas actualizado en la plataforma.`
  },
  {
    id: 'meet-02-optimizacion-whatsapp-capi',
    date: '25 Octubre 2026',
    time: '18:00 - 18:50',
    duration: '50 min',
    title: 'Arquitectura Técnica: WhatsApp Cloud API, Meta CAPI y Cualificación de Inversores',
    driveLink: 'https://drive.google.com/drive/folders/15vYyUnXLzlA7N1HijYjCLsut8ofDeao-',
    attendees: ['Fabricio Nicolás Duarte', 'Karen Montiel'],
    tags: ['WhatsAppBot', 'MetaAds', 'CAPI', 'Automatizacion'],
    summary: 'Revisión técnica de la integración entre las campañas de Meta Ads y el enrutador de WhatsApp. Se definió la estructura de 3 preguntas de cualificación para filtrar al prospecto antes de que consuma tiempo de las asesoras: rango de inversión disponible, plazo de compra y modalidad (inversión para renta o vivienda propia).',
    keyPoints: [
      'Configuración de Meta Conversions API (CAPI) para retroalimentar al algoritmo cuando un lead es calificado.',
      'Automatización de respuestas inmediatas en menos de 90 segundos para no perder el calor del prospecto.',
      'Sincronización de contactos con etiquetas en el CRM comercial de AXIA.'
    ],
    decisions: [
      'Todo lead sin capacidad de entrega inicial de al menos USD 5.000 se deriva a lista de nutrición automática por correo/newsletter sin agendar llamada directa.',
      'Las asesoras solo reciben contactos con estatus "Cualificado" listos para agendar visita presencial o videollamada de cierre.'
    ],
    actionItems: [
      { task: 'Conectar Webhook de WhatsApp con el servidor de eventos CAPI', owner: 'Fabricio Duarte' },
      { task: 'Redactar los guiones de respuestas rápidas para objeciones bancarias', owner: 'Karen Montiel' }
    ],
    isExpanded: false,
    fullTranscript: `[18:00] Fabricio Duarte: Hola Karen, en esta sesión nos enfocamos en el backend de cualificación por WhatsApp.
[18:15] Karen Montiel: Lo más importante es que las chicas no pierdan 20 minutos con personas que no tienen el monto de entrega inicial para el pozo.
[18:30] Fabricio Duarte: Exactamente. El bot hace 3 preguntas en WhatsApp: objetivo de inversión, horizonte de tiempo y disponibilidad de capital. Si califica, se le notifica a la asesora de turno con el link a su ficha.`
  }
])

// Etiquetas únicas para filtros
const availableTags = computed(() => {
  const set = new Set()
  allMeetings.value.forEach(m => m.tags.forEach(t => set.add(t)))
  return Array.from(set)
})

// Filtrado reactivo en tiempo real
const filteredMeetings = computed(() => {
  return allMeetings.value.filter(m => {
    const matchesSearch = !searchQuery.value.trim() || [
      m.title,
      m.summary,
      m.fullTranscript,
      m.date,
      ...m.attendees,
      ...m.tags,
      ...m.keyPoints,
      ...m.decisions
    ].some(field => field && field.toLowerCase().includes(searchQuery.value.toLowerCase()))

    const matchesTag = !selectedTag.value || m.tags.includes(selectedTag.value)

    return matchesSearch && matchesTag
  })
})

// Formulario para registrar nueva reunión
const newForm = ref({
  title: '',
  date: '',
  time: '',
  attendees: '',
  tags: '',
  driveLink: '',
  summary: '',
  keyPointsText: ''
})

const saveNewMeeting = () => {
  const attendeesList = newForm.value.attendees
    ? newForm.value.attendees.split(',').map(s => s.trim()).filter(Boolean)
    : ['Fabricio Nicolás Duarte', 'Equipo AXIA']

  const tagsList = newForm.value.tags
    ? newForm.value.tags.split(',').map(s => s.trim().replace(/^#/, '')).filter(Boolean)
    : ['General']

  const pointsList = newForm.value.keyPointsText
    ? newForm.value.keyPointsText.split('\n').map(s => s.trim().replace(/^[•\-\*]\s*/, '')).filter(Boolean)
    : []

  const newMeeting = {
    id: `meet-${Date.now()}`,
    date: newForm.value.date || 'Fecha Reciente',
    time: newForm.value.time || 'Horario Registrado',
    duration: '45 min',
    title: newForm.value.title,
    driveLink: newForm.value.driveLink || 'https://drive.google.com/drive/folders/15vYyUnXLzlA7N1HijYjCLsut8ofDeao-',
    attendees: attendeesList,
    tags: tagsList,
    summary: newForm.value.summary,
    keyPoints: pointsList.length > 0 ? pointsList : ['Sesión de coordinación y seguimiento comercial.'],
    decisions: ['Acuerdos registrados según el resumen de sesión.'],
    actionItems: [
      { task: 'Revisar acuerdos y ejecutar compromisos', owner: 'Equipo AXIA' }
    ],
    isExpanded: false,
    fullTranscript: `Resumen generado por Google Meet AI: \n${newForm.value.summary}`
  }

  allMeetings.value.unshift(newMeeting)

  // Reset y cerrar modal
  newForm.value = {
    title: '',
    date: '',
    time: '',
    attendees: '',
    tags: '',
    driveLink: '',
    summary: '',
    keyPointsText: ''
  }
  showNewMeetingModal.value = false

  // Notificación toast
  copyToast.value = true
  setTimeout(() => {
    copyToast.value = false
  }, 3500)
}

// Copiar resumen al portapapeles
const copySummary = (meet) => {
  const text = `📌 MINUTA DE REUNIÓN GOOGLE MEET: ${meet.title}
🗓️ Fecha: ${meet.date} (${meet.time})
👥 Asistentes: ${meet.attendees.join(', ')}
🏷️ Etiquetas: ${meet.tags.map(t => '#' + t).join(' ')}

📋 RESUMEN TEXTUAL (MEET AI):
${meet.summary}

🔑 PUNTOS CLAVE:
${meet.keyPoints.map(p => '• ' + p).join('\n')}

🤝 DECISIONES:
${meet.decisions.map(d => '✓ ' + d).join('\n')}

🔗 Enlace Grabación Drive: ${meet.driveLink || 'N/A'}`

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      copyToast.value = true
      setTimeout(() => {
        copyToast.value = false
      }, 3500)
    })
  }
}

usePageMeta(() => 'Reuniones & Minutas Meet AXIA')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>
