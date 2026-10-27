<template>
  <PortalShell>
    <main id="contenido" tabindex="-1" class="axia-tools-page pb-24">
      <!-- Top Banner Corporativo AXIA & Fabricio Duarte -->
      <section class="border-b border-white/10 bg-gradient-to-b from-[#182f40]/40 to-transparent px-5 py-8 sm:px-8">
        <div class="mx-auto max-w-6xl">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
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
                  Subsección: Herramientas & Recursos
                </span>
                <p class="mt-0.5 text-xs text-slate-400">
                  Acceso exclusivo para <strong class="text-white">{{ session?.name || 'Asesora AXIA' }}</strong>
                </p>
              </div>
            </div>

            <!-- Navegación entre Subsecciones -->
            <div class="flex items-center gap-2">
              <NuxtLink
                :to="localePath('/panel/axia')"
                class="fd-btn-outline text-xs"
              >
                ← Volver al Flujo & Estrategia
              </NuxtLink>
              <a
                href="#banco-logos"
                class="fd-btn text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
              >
                Descargas Directas ↓
              </a>
            </div>
          </div>

          <!-- Barra de Pestañas de Subsección -->
          <div class="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4">
            <NuxtLink
              :to="localePath('/panel/axia')"
              class="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              📊 1. Flujo Completo & Estrategia
            </NuxtLink>
            <span class="rounded-xl bg-[#d08b22]/20 px-4 py-2 text-xs font-semibold text-[#efc981] border border-[#d08b22]/40">
              🛠️ 2. Banco de Herramientas & Auditor IA
            </span>
            <NuxtLink
              :to="localePath('/panel/axia#manual-meta')"
              class="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              📘 3. Manual Interno de Meta Ads
            </NuxtLink>
          </div>
        </div>
      </section>

      <div class="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <!-- Encabezado de la Subsección -->
        <div class="border-b border-white/10 pb-6">
          <p class="text-xs uppercase tracking-widest text-[#d08b22]">HUB DE OPERACIONES COMERCIALES</p>
          <h1 class="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Herramientas, Auditor de Videos y Descargas
          </h1>
          <p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
            En esta subsección disponés de todos los recursos gráficos oficiales listos para descargar y el simulador del <strong>Auditor de Videos con IA</strong> con previsualización directa de los videos de referencia.
          </p>
        </div>

        <!-- ================================================================= -->
        <!-- REPRODUCTOR & PREVISUALIZACIÓN DE VIDEOS DE REFERENCIA -->
        <!-- ================================================================= -->
        <section class="mt-12">
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p class="text-xs uppercase tracking-wider text-[#d08b22]">Previsualización en Pantalla</p>
              <h2 class="font-display text-2xl font-bold text-white">Videos de Referencia & Análisis Cuadro a Cuadro</h2>
              <p class="mt-1 text-xs text-slate-400">
                Reproducí o inspeccioná los videos reales de la carpeta de Drive y mirá cómo reacciona el motor de IA.
              </p>
            </div>

            <!-- Selector de Video -->
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition"
                :class="selectedVideo === 'bad' ? 'border-rose-400 bg-rose-500/15 text-rose-300' : 'border-white/15 text-slate-400 hover:border-white/30'"
                @click="selectedVideo = 'bad'"
              >
                ⚠️ Video 1: Con Errores (Rechazado)
              </button>
              <button
                type="button"
                class="rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition"
                :class="selectedVideo === 'good' ? 'border-emerald-400 bg-emerald-500/15 text-emerald-300' : 'border-white/15 text-slate-400 hover:border-white/30'"
                @click="selectedVideo = 'good'"
              >
                ✅ Video 2: Estructura Óptima (Aprobado)
              </button>
            </div>
          </div>

          <!-- Video Player & AI Analysis Container -->
          <div class="mt-6 grid gap-6 lg:grid-cols-12 items-start">
            <!-- Columna del Reproductor de Video (5 cols) -->
            <div class="lg:col-span-5">
              <div class="overflow-hidden rounded-3xl border border-white/15 bg-black p-3 shadow-2xl">
                <!-- Marco de Teléfono / 9:16 -->
                <div class="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#182f40] to-[#0a141c]">
                  <!-- Video Header Overlay -->
                  <div class="absolute left-0 top-0 z-20 flex w-full items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
                    <span class="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-bold text-[#efc981] backdrop-blur-md">
                      {{ selectedVideo === 'bad' ? 'CASO 1: EN BRUTO' : 'CASO 2: CONVERTIDOR' }}
                    </span>
                    <span class="flex items-center gap-1.5 text-[10px] text-slate-300">
                      <span class="h-2 w-2 rounded-full animate-ping" :class="selectedVideo === 'bad' ? 'bg-rose-400' : 'bg-emerald-400'"></span>
                      {{ selectedVideo === 'bad' ? 'FALLA EN RETENCIÓN' : 'ALTA CONVERSIÓN' }}
                    </span>
                  </div>

                  <!-- Escáner láser animado -->
                  <div class="pointer-events-none absolute left-0 z-10 h-1 w-full bg-gradient-to-r from-transparent via-[#efc981] to-transparent shadow-[0_0_12px_#efc981] animate-bounce"></div>

                  <!-- Contenido visual del Video simulado / Canvas -->
                  <div class="flex h-full flex-col justify-center items-center px-6 text-center">
                    <div class="h-24 w-24 rounded-full border-2 border-[#d08b22] bg-[#182f40] flex items-center justify-center shadow-lg">
                      <svg v-if="selectedVideo === 'bad'" class="h-10 w-10 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <svg v-else class="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    <h4 class="mt-4 font-display text-lg font-bold text-white">
                      {{ selectedVideo === 'bad' ? 'Reel: Recorrido Espontáneo' : 'Reel: Inversor en Pozo (Asunción)' }}
                    </h4>
                    <p class="mt-1 text-xs text-slate-300">
                      {{ selectedVideo === 'bad' ? 'Grabado sin guion estructurado' : 'Grabado siguiendo el Guion Maestro A' }}
                    </p>

                    <!-- Subtítulos de muestra en pantalla -->
                    <div class="mt-6 rounded-lg bg-black/75 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-sm border border-white/10">
                      <span v-if="selectedVideo === 'bad'" class="text-rose-300">
                        "Hola chicas... hoy les quiero mostrar este departamento..."
                      </span>
                      <span v-else class="text-[#efc981]">
                        "¿Dejar tus ahorros en el banco? Te muestro cómo cambiarlos por pozo."
                      </span>
                    </div>

                    <!-- Enlace de Apertura Directa en Drive -->
                    <a
                      href="https://drive.google.com/drive/folders/15vYyUnXLzlA7N1HijYjCLsut8ofDeao-"
                      target="_blank"
                      rel="noopener"
                      class="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[10px] text-slate-200 backdrop-blur-md hover:bg-white/10"
                    >
                      ▶ Ver archivo original en Google Drive ↗
                    </a>
                  </div>

                  <!-- Controles de Reproducción Simulados -->
                  <div class="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/90 to-transparent p-4">
                    <!-- Barra de progreso con marcas de auditoría -->
                    <div class="relative h-2 w-full rounded-full bg-white/20">
                      <div
                        class="h-full rounded-full"
                        :class="selectedVideo === 'bad' ? 'w-1/3 bg-rose-500' : 'w-4/5 bg-[#d08b22]'"
                      ></div>
                      <!-- Puntos clave del video -->
                      <span class="absolute left-[15%] top-[-3px] h-3.5 w-1 rounded-sm bg-white" title="Gancho 0-3s"></span>
                      <span class="absolute left-[45%] top-[-3px] h-3.5 w-1 rounded-sm bg-white" title="Oferta 15s"></span>
                      <span class="absolute left-[80%] top-[-3px] h-3.5 w-1 rounded-sm bg-white" title="CTA final"></span>
                    </div>

                    <div class="mt-2 flex items-center justify-between text-[10px] text-slate-300">
                      <span>00:{{ selectedVideo === 'bad' ? '12' : '38' }} / 00:45</span>
                      <span :class="selectedVideo === 'bad' ? 'text-rose-400' : 'text-emerald-400'">
                        {{ selectedVideo === 'bad' ? 'Fuga del 82% de audiencia' : 'Retención proyectada 68%' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Columna de Diagnóstico de IA (7 cols) -->
            <div class="lg:col-span-7 space-y-4">
              <!-- Score Card -->
              <div
                class="fd-card p-6 border-l-4"
                :class="selectedVideo === 'bad' ? 'border-l-rose-500 border-rose-500/20 bg-rose-950/5' : 'border-l-emerald-500 border-emerald-500/20 bg-emerald-950/5'"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Veredicto del Algoritmo</span>
                    <h3 class="mt-1 font-display text-2xl font-bold text-white">
                      {{ selectedVideo === 'bad' ? '48 / 100 • RECHAZADO PARA PAUTA' : '94 / 100 • APROBADO PARA META ADS' }}
                    </h3>
                  </div>
                  <span
                    class="rounded-full px-3 py-1 text-xs font-bold"
                    :class="selectedVideo === 'bad' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'"
                  >
                    {{ selectedVideo === 'bad' ? 'NO INVERTIR PRESUPUESTO' : 'LISTO PARA ESCALAR' }}
                  </span>
                </div>

                <p class="mt-3 text-xs leading-relaxed text-slate-300">
                  <span v-if="selectedVideo === 'bad'">
                    <strong>Diagnóstico general:</strong> El video carece de un gancho en los primeros 3 segundos. Iniciar saludando o acomodando el celular genera que la audiencia deslice hacia arriba. No se menciona el precio base, la modalidad en pozo ni el esquema de cuotas. Pautar este video generará clics caros y curiosos sin solvencia.
                  </span>
                  <span v-else>
                    <strong>Diagnóstico general:</strong> Excelente ritmo y lenguaje no verbal. Ataca el dolor del dinero estancado en el banco y ofrece inmediatamente la solución en ladrillos con cuotas accesibles en Asunción. Conexión directa y fluida con el bot de WhatsApp.
                  </span>
                </p>
              </div>

              <!-- Puntos Auditados Cuadro a Cuadro -->
              <div class="fd-card p-6 space-y-3">
                <h4 class="font-display text-sm font-semibold text-white uppercase tracking-wider text-[#efc981]">
                  Desglose Técnico Cuadro a Cuadro:
                </h4>

                <div class="space-y-2.5 text-xs">
                  <!-- Gancho -->
                  <div class="flex items-start justify-between gap-3 rounded-lg border border-white/5 bg-black/30 p-3">
                    <div>
                      <span class="font-semibold text-white">1. Retención en los primeros 3 segundos (Hook)</span>
                      <p class="mt-0.5 text-slate-400">
                        {{ selectedVideo === 'bad' ? 'Empieza con saludo lento sin estímulo visual ni problema.' : 'Impacta inmediatamente con la frase financiera de resguardo en pozo.' }}
                      </p>
                    </div>
                    <span class="shrink-0 font-bold" :class="selectedVideo === 'bad' ? 'text-rose-400' : 'text-emerald-400'">
                      {{ selectedVideo === 'bad' ? '❌ 28%' : '✓ 96%' }}
                    </span>
                  </div>

                  <!-- Claridad Financiera -->
                  <div class="flex items-start justify-between gap-3 rounded-lg border border-white/5 bg-black/30 p-3">
                    <div>
                      <span class="font-semibold text-white">2. Claridad de la Propuesta (Números & Zona)</span>
                      <p class="mt-0.5 text-slate-400">
                        {{ selectedVideo === 'bad' ? 'Solo muestra paredes sin mencionar cuotas ni retorno de inversión.' : 'Menciona cuotas desde $450 USD y zona de alta demanda en Asunción.' }}
                      </p>
                    </div>
                    <span class="shrink-0 font-bold" :class="selectedVideo === 'bad' ? 'text-rose-400' : 'text-emerald-400'">
                      {{ selectedVideo === 'bad' ? '❌ 35%' : '✓ 92%' }}
                    </span>
                  </div>

                  <!-- Audio & Dicción -->
                  <div class="flex items-start justify-between gap-3 rounded-lg border border-white/5 bg-black/30 p-3">
                    <div>
                      <span class="font-semibold text-white">3. Calidad Sonora & Subtítulos</span>
                      <p class="mt-0.5 text-slate-400">
                        {{ selectedVideo === 'bad' ? 'Música de fondo compitiendo con la voz y eco de sala vacía.' : 'Voz clara, primer plano enérgico y subtítulos dinámicos de apoyo.' }}
                      </p>
                    </div>
                    <span class="shrink-0 font-bold" :class="selectedVideo === 'bad' ? 'text-rose-400' : 'text-emerald-400'">
                      {{ selectedVideo === 'bad' ? '❌ 50%' : '✓ 95%' }}
                    </span>
                  </div>

                  <!-- CTA -->
                  <div class="flex items-start justify-between gap-3 rounded-lg border border-white/5 bg-black/30 p-3">
                    <div>
                      <span class="font-semibold text-white">4. Llamado a la Acción (CTA) hacia WhatsApp</span>
                      <p class="mt-0.5 text-slate-400">
                        {{ selectedVideo === 'bad' ? 'Dice "escriban para más info" (muy pasivo y genérico).' : 'Invita a tocar el botón para recibir el dossier con flujo de fondos.' }}
                      </p>
                    </div>
                    <span class="shrink-0 font-bold" :class="selectedVideo === 'bad' ? 'text-rose-400' : 'text-emerald-400'">
                      {{ selectedVideo === 'bad' ? '❌ 40%' : '✓ 90%' }}
                    </span>
                  </div>
                </div>

                <!-- Botón de acción para grabar -->
                <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span class="text-xs text-slate-400">¿Querés que tu video saque 94/100?</span>
                  <NuxtLink
                    :to="localePath('/panel/axia#guiones')"
                    class="fd-btn text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
                  >
                    Usar Guion Maestro A →
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- BANCO DE DESCARGAS DE MARCA OFICIAL -->
        <!-- ================================================================= -->
        <section id="banco-logos" class="mt-16 scroll-mt-24">
          <div class="border-b border-white/10 pb-4">
            <p class="text-xs uppercase tracking-wider text-[#d08b22]">Archivos Institucionales</p>
            <h2 class="font-display text-2xl font-bold text-white">Banco de Logos, Tipografías & Manual 2025</h2>
            <p class="mt-1 text-xs text-slate-400">
              Todos los archivos del manual de marca alojados en nuestro servidor listos para descargar.
            </p>
          </div>

          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <!-- 1. Pack de Logos -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <span class="text-2xl">📁</span>
                <h3 class="mt-2 font-display text-base font-semibold text-white">Pack de Logos AXIA Completo</h3>
                <p class="mt-1 text-xs text-slate-400">PNGs transparentes, Isotipo y Logotipo en fondo blanco y oscuro.</p>
              </div>
              <a
                href="/axia/pack-logos-axia.zip"
                download="Pack_Logos_AXIA.zip"
                class="fd-btn mt-4 w-full justify-center text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
              >
                Descargar Pack Logos (.ZIP)
              </a>
            </div>

            <!-- 2. Manual de Marca PDF -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <span class="text-2xl">📕</span>
                <h3 class="mt-2 font-display text-base font-semibold text-white">Manual de Marca AXIA 2025</h3>
                <p class="mt-1 text-xs text-slate-400">Documento PDF con colores Pantone 2768 C y normas gráficas.</p>
              </div>
              <a
                href="/axia/Axia Manual de Marca 2025.pdf"
                download="Axia_Manual_de_Marca_2025.pdf"
                target="_blank"
                class="fd-btn-outline mt-4 w-full justify-center text-xs"
              >
                Descargar Manual (PDF)
              </a>
            </div>

            <!-- 3. Fuentes Branding SF -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <span class="text-2xl">🔤</span>
                <h3 class="mt-2 font-display text-base font-semibold text-white">Fuentes Oficiales Branding SF</h3>
                <p class="mt-1 text-xs text-slate-400">Archivos .OTF para instalar en Windows, Mac o Canva.</p>
              </div>
              <a
                href="/axia/pack-fuentes-branding-sf.zip"
                download="Fuentes_Branding_SF.zip"
                class="fd-btn-outline mt-4 w-full justify-center text-xs"
              >
                Descargar Fuentes (.ZIP)
              </a>
            </div>

            <!-- 4. Logo Vectorial con Luces -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <span class="text-2xl">✨</span>
                <h3 class="mt-2 font-display text-base font-semibold text-white">Isotipo AXIA con Luces</h3>
                <p class="mt-1 text-xs text-slate-400">Vector SVG con degradado dorado metalizado y azul pizarra.</p>
              </div>
              <a
                href="/axia/logo-con-luces.svg"
                download="AXIA_Isotipo_Luces.svg"
                class="fd-btn-outline mt-4 w-full justify-center text-xs"
              >
                Descargar Isotipo (.SVG)
              </a>
            </div>

            <!-- 5. Logo Blanco para Reels -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <span class="text-2xl">⚪</span>
                <h3 class="mt-2 font-display text-base font-semibold text-white">Logo Tipográfico Blanco</h3>
                <p class="mt-1 text-xs text-slate-400">Vector en blanco puro para marcas de agua sobre videos.</p>
              </div>
              <a
                href="/axia/TECTO-BLANCO-SOLO.svg"
                download="AXIA_Texto_Blanco.svg"
                class="fd-btn-outline mt-4 w-full justify-center text-xs"
              >
                Descargar Logo Blanco (.SVG)
              </a>
            </div>

            <!-- 6. Google Drive -->
            <div class="fd-card flex flex-col justify-between border-[#d08b22]/40 bg-[#d08b22]/5 p-5">
              <div>
                <span class="text-2xl">🎬</span>
                <h3 class="mt-2 font-display text-base font-semibold text-white">Carpeta Google Drive</h3>
                <p class="mt-1 text-xs text-slate-400">Acceso a la carpeta con los 4 videos en bruto grabados.</p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/15vYyUnXLzlA7N1HijYjCLsut8ofDeao-"
                target="_blank"
                rel="noopener"
                class="fd-btn mt-4 w-full justify-center text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
              >
                Abrir Google Drive ↗
              </a>
            </div>
          </div>
        </section>

        <!-- Footer Oficial Fabricio Duarte Tech -->
        <footer class="mt-20 border-t border-white/10 pt-8 text-center text-xs text-slate-400">
          <p class="font-medium text-white">
            © {{ new Date().getFullYear() }} <a href="https://fabricioduarte.tech" class="text-[#efc981] hover:underline" target="_blank">fabricioduarte.tech</a> • Fabricio Nicolás Duarte. Todos los derechos reservados.
          </p>
          <p class="mt-1 text-slate-500">
            Plataforma interna de desarrollo, herramientas y operaciones estratégicas para el equipo de ventas.
          </p>
        </footer>
      </div>
    </main>
  </PortalShell>
</template>

<script setup>
const { session } = usePortal()
const { localePath } = useLocale()
const selectedVideo = ref('bad')

usePageMeta(() => 'Herramientas & Descargas AXIA')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>
