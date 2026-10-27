<template>
  <PortalShell>
    <main id="contenido" tabindex="-1" class="axia-portal pb-24">
      <!-- Top Banner Corporativo AXIA & Fabricio Duarte -->
      <section class="border-b border-white/10 bg-gradient-to-b from-[#182f40]/40 to-transparent px-5 py-8 sm:px-8">
        <div class="mx-auto max-w-6xl">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <!-- SVG Isotipo AXIA -->
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
                  Portal Comercial AXIA
                </span>
                <p class="mt-0.5 text-xs text-slate-400">
                  Bienvenida, <strong class="text-white">{{ session?.name || 'Asesora AXIA' }}</strong>
                </p>
              </div>
            </div>

            <!-- Acciones directas -->
            <div class="flex items-center gap-2">
              <a
                href="#descargas"
                class="fd-btn text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
              >
                📥 Descargas de Marca
              </a>
              <a
                href="#auditor-ia"
                class="fd-btn-outline text-xs"
              >
                🤖 Auditor de Videos
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <!-- Hero Header -->
        <div class="text-center sm:text-left">
          <p class="text-xs uppercase tracking-widest text-[#d08b22]">SISTEMA DE ESCALABILIDAD COMERCIAL 2025/2026</p>
          <h1 class="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Plan de Choque y Crecimiento: <span class="text-[#efc981]">AXIA Inmobiliaria</span>
          </h1>
          <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
            De prospectos fríos y curiosos a compradores e inversionistas calificados mediante Meta Advantage+, Inteligencia Artificial Multimodal y Calificación Automatizada en WhatsApp.
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>Socio Estratégico & Tecnología: <strong class="text-white">Fabricio Nicolás Duarte</strong></span>
            <span>•</span>
            <span>Alianza a Comisión por Éxito: <strong class="text-[#efc981]">5% por Cierre</strong></span>
            <span>•</span>
            <span>Base de Operaciones: <strong class="text-white">Asunción, Paraguay</strong></span>
          </div>
        </div>

        <!-- 4 KPI Cards -->
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div class="fd-card border-[#d08b22]/30 p-5">
            <p class="text-[11px] uppercase tracking-wider text-[#efc981]">Incentivo Mutuo</p>
            <p class="mt-1 font-display text-3xl font-bold text-[#efc981]">5%</p>
            <p class="mt-2 text-xs text-slate-400">Comisión por cierre. No vendo horas de software, ganamos cuando ustedes firman señas.</p>
          </div>

          <div class="fd-card border-[#d08b22]/30 p-5">
            <p class="text-[11px] uppercase tracking-wider text-[#efc981]">Velocidad de Respuesta</p>
            <p class="mt-1 font-display text-3xl font-bold text-white">&lt; 60s</p>
            <p class="mt-2 text-xs text-slate-400">Calificación en WhatsApp. Ningún lead interesado se enfría ni se va a otra inmobiliaria.</p>
          </div>

          <div class="fd-card border-[#d08b22]/30 p-5">
            <p class="text-[11px] uppercase tracking-wider text-[#efc981]">Creativos Validados</p>
            <p class="mt-1 font-display text-3xl font-bold text-white">3 Áng.</p>
            <p class="mt-2 text-xs text-slate-400">El gancho (Hook) es la segmentación: pozo para inversión, estilo de vida y autoridad.</p>
          </div>

          <div class="fd-card border-[#d08b22]/30 p-5">
            <p class="text-[11px] uppercase tracking-wider text-[#efc981]">Control de Calidad</p>
            <p class="mt-1 font-display text-3xl font-bold text-white">100% IA</p>
            <p class="mt-2 text-xs text-slate-400">Auditoría multimodal de retención y dicción antes de invertir presupuesto en pauta.</p>
          </div>
        </div>

        <!-- ================================================================= -->
        <!-- SUBSECCIÓN: BANCO DE DESCARGAS & MATERIALES DE MARCA -->
        <!-- ================================================================= -->
        <section id="descargas" class="mt-16 scroll-mt-24">
          <div class="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p class="text-xs uppercase tracking-wider text-[#d08b22]">Herramientas de Trabajo</p>
              <h2 class="font-display text-2xl font-bold text-white">Banco de Descargas Oficiales AXIA</h2>
              <p class="mt-1 text-xs text-slate-400">Archivos oficiales listos para usar en tus redes, presentaciones y cierres.</p>
            </div>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              Manual de Identidad 2025
            </span>
          </div>

          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <!-- 1. Pack de Logos -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-2xl">📁</span>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-[#efc981]">ZIP • 840 KB</span>
                </div>
                <h3 class="mt-3 font-display text-lg font-semibold text-white">Pack Completo de Logotipos</h3>
                <p class="mt-1 text-xs text-slate-400">
                  Logos oficiales en alta resolución (PNG fondo transparente y SVG vectorial), versión monocromática, tipográfica y con luces.
                </p>
              </div>
              <a
                href="/axia/pack-logos-axia.zip"
                download="AXIA_Pack_Logos.zip"
                class="fd-btn mt-5 w-full justify-center text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
              >
                Descargar Pack Logos (.ZIP)
              </a>
            </div>

            <!-- 2. Manual de Marca PDF -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-2xl">📕</span>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-[#efc981]">PDF • 543 KB</span>
                </div>
                <h3 class="mt-3 font-display text-lg font-semibold text-white">Manual de Marca AXIA 2025</h3>
                <p class="mt-1 text-xs text-slate-400">
                  Guía oficial de identidad: colores corporativos Pantone 2768 C, Dorado Axia (#CC800D), proporciones y sugerencias de uso.
                </p>
              </div>
              <a
                href="/axia/Axia Manual de Marca 2025.pdf"
                download="Axia_Manual_de_Marca_2025.pdf"
                target="_blank"
                class="fd-btn-outline mt-5 w-full justify-center text-xs"
              >
                Descargar Manual (PDF)
              </a>
            </div>

            <!-- 3. Fuentes Tipográficas -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-2xl">🔤</span>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-[#efc981]">ZIP • 4.4 MB</span>
                </div>
                <h3 class="mt-3 font-display text-lg font-semibold text-white">Fuentes Oficiales: Branding SF</h3>
                <p class="mt-1 text-xs text-slate-400">
                  Familia tipográfica completa (Bold, Medium, Light, SemiBold, Narrow y Cmp) para instalar en tu computadora o Canva.
                </p>
              </div>
              <a
                href="/axia/pack-fuentes-branding-sf.zip"
                download="AXIA_Fuentes_Branding_SF.zip"
                class="fd-btn-outline mt-5 w-full justify-center text-xs"
              >
                Descargar Fuentes (.ZIP)
              </a>
            </div>

            <!-- 4. Isotipo Vectorial con Luces -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-2xl">✨</span>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-[#efc981]">SVG • Vector</span>
                </div>
                <h3 class="mt-3 font-display text-lg font-semibold text-white">Isotipo Delta con Luces</h3>
                <p class="mt-1 text-xs text-slate-400">
                  Versión premium con degradado dorado metalizado y azul noche pizarra. Ideal para cierres de video y marcas de agua.
                </p>
              </div>
              <a
                href="/axia/logo-con-luces.svg"
                download="AXIA_Isotipo_Con_Luces.svg"
                class="fd-btn-outline mt-5 w-full justify-center text-xs"
              >
                Descargar Isotipo (.SVG)
              </a>
            </div>

            <!-- 5. Logotipo Blanco Negativo -->
            <div class="fd-card flex flex-col justify-between p-5">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-2xl">⚪</span>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-[#efc981]">SVG • Blanco</span>
                </div>
                <h3 class="mt-3 font-display text-lg font-semibold text-white">Logotipo Blanco para Reels</h3>
                <p class="mt-1 text-xs text-slate-400">
                  Versión en blanco puro (#FFF) para colocar sobre videos o fotos oscuras sin perder visibilidad ni contraste.
                </p>
              </div>
              <a
                href="/axia/TECTO-BLANCO-SOLO.svg"
                download="AXIA_Texto_Blanco.svg"
                class="fd-btn-outline mt-5 w-full justify-center text-xs"
              >
                Descargar Logo Blanco (.SVG)
              </a>
            </div>

            <!-- 6. Carpeta Drive de Videos Reales -->
            <div class="fd-card flex flex-col justify-between border-[#d08b22]/40 bg-[#d08b22]/5 p-5">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-2xl">🎬</span>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-[#efc981]">Google Drive</span>
                </div>
                <h3 class="mt-3 font-display text-lg font-semibold text-white">Carpeta de Videos en Bruto</h3>
                <p class="mt-1 text-xs text-slate-400">
                  Acceso a la carpeta en la nube con los 4 videos grabados para auditar, descargar o subir nuevo material.
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/15vYyUnXLzlA7N1HijYjCLsut8ofDeao-"
                target="_blank"
                rel="noopener"
                class="fd-btn mt-5 w-full justify-center text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
              >
                Abrir Carpeta Google Drive ↗
              </a>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- SUBSECCIÓN: AUDITOR DE VIDEOS CON IA (CASOS REALES) -->
        <!-- ================================================================= -->
        <section id="auditor-ia" class="mt-16 scroll-mt-24">
          <div class="border-b border-white/10 pb-4">
            <p class="text-xs uppercase tracking-wider text-[#d08b22]">Simulación de Auditoría Multimodal</p>
            <h2 class="font-display text-2xl font-bold text-white">Auditor de Videos con IA: Ejemplos Concretos</h2>
            <p class="mt-1 text-xs text-slate-400">
              Evaluamos dos casos reales extraídos de la carpeta de Drive: uno con fallas críticas que quemaría presupuesto y otro con estructura ganadora.
            </p>
          </div>

          <!-- Selector de Caso -->
          <div class="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              class="rounded-xl border px-4 py-2.5 text-xs font-semibold transition"
              :class="activeCase === 'bad' ? 'border-rose-400 bg-rose-400/10 text-rose-300' : 'border-white/10 text-slate-400 hover:border-white/20'"
              @click="activeCase = 'bad'"
            >
              ⚠️ Caso 1: Video con Mucho a Corregir (Rechazado)
            </button>
            <button
              type="button"
              class="rounded-xl border px-4 py-2.5 text-xs font-semibold transition"
              :class="activeCase === 'good' ? 'border-[#d08b22] bg-[#d08b22]/10 text-[#efc981]' : 'border-white/10 text-slate-400 hover:border-white/20'"
              @click="activeCase = 'good'"
            >
              ✅ Caso 2: Video con Excelente Criterio (Aprobado)
            </button>
          </div>

          <!-- Vista de Caso 1: A Corregir -->
          <div v-if="activeCase === 'bad'" class="mt-6 grid gap-6 lg:grid-cols-2">
            <div class="fd-card border-rose-500/30 bg-rose-950/10 p-6">
              <div class="flex items-center justify-between">
                <span class="rounded-full bg-rose-500/20 px-2.5 py-1 text-xs font-bold text-rose-400">
                  SCORE IA: 48 / 100 • RECHAZADO
                </span>
                <span class="text-xs text-slate-400">Video #01 (Bruto)</span>
              </div>
              <h3 class="mt-4 font-display text-xl font-bold text-white">
                Reel: "Hola chicas, miren este depto..."
              </h3>
              <p class="mt-2 text-xs text-slate-300">
                Típica grabación espontánea: la asesora entra caminando, acomoda el celular durante los primeros 3 segundos y describe la habitación sin mencionar precio ni financiamiento.
              </p>

              <div class="mt-6 space-y-3">
                <div class="rounded-lg border border-rose-500/20 bg-black/40 p-3">
                  <p class="text-xs font-semibold text-rose-400">❌ Gancho Inicial (0-3s): Fallo crítico</p>
                  <p class="mt-1 text-xs text-slate-400">
                    Comienza con saludo genérico ("Hola amigos..."). El 82% de las personas en Instagram deslizan hacia arriba (scroll) antes de que empiece a hablar del edificio.
                  </p>
                </div>

                <div class="rounded-lg border border-rose-500/20 bg-black/40 p-3">
                  <p class="text-xs font-semibold text-rose-400">❌ Oferta Comercial: Ausente</p>
                  <p class="mt-1 text-xs text-slate-400">
                    No se especifica si es pozo o listo, ni las cuotas mensuales, ni el retorno estimado de renta en dólares. El curioso pregunta "¿precio?" y no compra.
                  </p>
                </div>

                <div class="rounded-lg border border-rose-500/20 bg-black/40 p-3">
                  <p class="text-xs font-semibold text-rose-400">❌ Audio & Música: Compitiendo con la voz</p>
                  <p class="mt-1 text-xs text-slate-400">
                    Música de tendencia con volumen elevado que tapa la dicción de la asesora. Eco notable en el ambiente.
                  </p>
                </div>
              </div>
            </div>

            <div class="fd-card flex flex-col justify-between p-6">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-[#efc981]">
                  Directivas de Corrección para la Agente
                </span>
                <h4 class="mt-2 font-display text-lg font-semibold text-white">
                  Cómo transformar este video en una máquina de leads:
                </h4>
                <ol class="mt-4 list-decimal space-y-3 pl-4 text-xs text-slate-300">
                  <li><strong>Cortar los primeros 3 segundos:</strong> Iniciar directo con la imagen más atractiva (terraza o cocina) y la frase del gancho financiero.</li>
                  <li><strong>Inyectar subtítulos dinámicos:</strong> Resaltar en amarillo y blanco las palabras clave ("CUOTAS", "ASUNCIÓN", "RENTA 12%").</li>
                  <li><strong>Cambiar el cierre genérico por llamada a la acción:</strong> Reemplazar el <em>"cualquier cosa me escriben"</em> por <em>"tocá el botón de WhatsApp para recibir el brochure con precios de lanzamiento"</em>.</li>
                </ol>
              </div>

              <div class="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
                <p class="text-xs text-muted">¿Querés comparar con los archivos originales?</p>
                <a
                  href="https://drive.google.com/drive/folders/15vYyUnXLzlA7N1HijYjCLsut8ofDeao-"
                  target="_blank"
                  rel="noopener"
                  class="mt-2 inline-flex items-center gap-1.5 text-xs text-[#efc981] hover:underline"
                >
                  Abrir carpeta en Drive para ver el video ↗
                </a>
              </div>
            </div>
          </div>

          <!-- Vista de Caso 2: Buen Criterio -->
          <div v-else class="mt-6 grid gap-6 lg:grid-cols-2">
            <div class="fd-card border-emerald-500/30 bg-emerald-950/10 p-6">
              <div class="flex items-center justify-between">
                <span class="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-400">
                  SCORE IA: 94 / 100 • APROBADO PARA PAUTA
                </span>
                <span class="text-xs text-slate-400">Video #02 (Estructurado)</span>
              </div>
              <h3 class="mt-4 font-display text-xl font-bold text-white">
                Reel: "Dejar tus ahorros en el banco te está costando plata"
              </h3>
              <p class="mt-2 text-xs text-slate-300">
                La asesora mira a cámara con energía, presenta la oportunidad en pozo en Las Mercedes, muestra el render y cierra enviando al WhatsApp.
              </p>

              <div class="mt-6 space-y-3">
                <div class="rounded-lg border border-emerald-500/20 bg-black/40 p-3">
                  <p class="text-xs font-semibold text-emerald-400">✓ Gancho de 3s (Hook): 96% retención</p>
                  <p class="mt-1 text-xs text-slate-400">
                    Frena el scroll del inversionista inmediatamente atacando la pérdida de poder adquisitivo del dinero en el banco.
                  </p>
                </div>

                <div class="rounded-lg border border-emerald-500/20 bg-black/40 p-3">
                  <p class="text-xs font-semibold text-emerald-400">✓ Claridad Financiera: 92%</p>
                  <p class="mt-1 text-xs text-slate-400">
                    Menciona cuotas desde $450 USD sin intereses durante la obra y rentabilidad estimada del 10% al 12% anual en dólares.
                  </p>
                </div>

                <div class="rounded-lg border border-emerald-500/20 bg-black/40 p-3">
                  <p class="text-xs font-semibold text-emerald-400">✓ Conexión con el Bot de WhatsApp: 95%</p>
                  <p class="mt-1 text-xs text-slate-400">
                    Llamada a la acción precisa que activa la calificación automatizada en menos de 60 segundos.
                  </p>
                </div>
              </div>
            </div>

            <div class="fd-card flex flex-col justify-between p-6">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-[#efc981]">
                  Resultado Estimado en Campaña Meta Advantage+
                </span>
                <h4 class="mt-2 font-display text-lg font-semibold text-white">
                  Por qué este formato maximiza las comisiones:
                </h4>
                <div class="mt-4 space-y-3 text-xs text-slate-300">
                  <div class="flex items-center justify-between border-b border-white/10 pb-2">
                    <span class="text-slate-400">Costo por Lead Calificado estimado:</span>
                    <strong class="text-white">$1.80 – $2.60 USD</strong>
                  </div>
                  <div class="flex items-center justify-between border-b border-white/10 pb-2">
                    <span class="text-slate-400">Tasa de respuesta en WhatsApp:</span>
                    <strong class="text-emerald-400">78% en &lt; 5 minutos</strong>
                  </div>
                  <div class="flex items-center justify-between border-b border-white/10 pb-2">
                    <span class="text-slate-400">Perfil de prospectos:</span>
                    <strong class="text-white">Inversionistas con capital propio</strong>
                  </div>
                  <div class="flex items-center justify-between pb-2">
                    <span class="text-slate-400">Comisión por unidad cerrada:</span>
                    <strong class="text-[#efc981]">$3.500 – $6.000 USD</strong>
                  </div>
                </div>
              </div>

              <div class="mt-6 rounded-xl border border-[#d08b22]/30 bg-[#d08b22]/10 p-4">
                <p class="text-xs text-[#efc981] font-semibold">Listo para grabar tu versión:</p>
                <p class="mt-1 text-xs text-slate-300">Hacé clic abajo para copiar el guion exacto de este video en tu celular.</p>
                <a
                  href="#guiones"
                  class="mt-3 inline-block rounded-lg bg-[#d08b22] px-3 py-1.5 text-xs font-semibold text-black hover:bg-[#efc981]"
                >
                  Ver Guion Inversor en Pozo ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- SUBSECCIÓN: GUIONES MAESTROS INTERACTIVOS -->
        <!-- ================================================================= -->
        <section id="guiones" class="mt-16 scroll-mt-24">
          <div class="border-b border-white/10 pb-4">
            <p class="text-xs uppercase tracking-wider text-[#d08b22]">Teleprompter & Grabación</p>
            <h2 class="font-display text-2xl font-bold text-white">Los 3 Guiones de Alta Conversión</h2>
            <p class="mt-1 text-xs text-slate-400">Hagan clic en cada pestaña y usen el botón "Copiar Guion" para pegarlo en su aplicación de teleprompter o notas.</p>
          </div>

          <!-- Selector de Guion -->
          <div class="mt-6 flex flex-wrap gap-2">
            <button
              v-for="(g, idx) in guiones"
              :key="idx"
              type="button"
              class="rounded-xl border px-4 py-2 text-xs font-semibold transition"
              :class="activeScript === idx ? 'border-[#d08b22] bg-[#d08b22]/15 text-[#efc981]' : 'border-white/10 text-slate-400 hover:border-white/20'"
              @click="activeScript = idx"
            >
              {{ g.tabLabel }}
            </button>
          </div>

          <!-- Guion Activo -->
          <div class="fd-card mt-6 p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span class="rounded-full bg-[#d08b22]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[#efc981]">
                  {{ guiones[activeScript].tag }}
                </span>
                <h3 class="mt-2 font-display text-xl font-bold text-white">
                  {{ guiones[activeScript].title }}
                </h3>
              </div>
              <button
                type="button"
                class="fd-btn text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
                @click="copyText(guiones[activeScript].fullText)"
              >
                {{ copied ? '¡Copiado!' : '📋 Copiar Guion Completo' }}
              </button>
            </div>

            <!-- Desglose por tiempos -->
            <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div
                v-for="(step, sIdx) in guiones[activeScript].steps"
                :key="sIdx"
                class="rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#efc981]">
                  {{ step.time }}
                </span>
                <h4 class="mt-1 text-sm font-semibold text-white">{{ step.name }}</h4>
                <p class="mt-2 text-xs leading-relaxed text-slate-300 italic">"{{ step.text }}"</p>
              </div>
            </div>

            <!-- Texto continuo para lectura -->
            <div class="mt-6 rounded-xl border border-dashed border-[#d08b22]/40 bg-black/50 p-4 text-xs leading-relaxed text-slate-200">
              <p class="font-semibold text-[#efc981] mb-1">Texto continuo para teleprompter:</p>
              {{ guiones[activeScript].fullText }}
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- SUBSECCIÓN: SIMULADOR DE WHATSAPP -->
        <!-- ================================================================= -->
        <section class="mt-16">
          <div class="border-b border-white/10 pb-4">
            <p class="text-xs uppercase tracking-wider text-[#d08b22]">Embudo Automatizado</p>
            <h2 class="font-display text-2xl font-bold text-white">Filtrado en WhatsApp en Menos de 60 Segundos</h2>
            <p class="mt-1 text-xs text-slate-400">
              Así es como el sistema intercepta a los interesados y les pasa únicamente a los clientes con solvencia y ganas de visitar.
            </p>
          </div>

          <div class="mt-6 grid gap-6 lg:grid-cols-2 items-center">
            <!-- Mockup Chat -->
            <div class="mx-auto w-full max-w-md rounded-3xl border border-white/15 bg-[#0b141a] p-4 shadow-2xl">
              <div class="flex items-center gap-3 border-b border-white/10 pb-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#d08b22] font-bold text-black text-sm">
                  AX
                </div>
                <div>
                  <p class="text-sm font-semibold text-white">Asistente Comercial AXIA</p>
                  <p class="text-[10px] text-emerald-400">en línea • respuesta &lt;60s</p>
                </div>
              </div>

              <div class="mt-4 space-y-3 text-xs">
                <div class="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#202c33] p-3 text-white">
                  Hola, vi el video del proyecto en pozo en Las Mercedes. ¿Tienen precios?
                  <span class="block text-right text-[9px] text-slate-400 mt-1">21:40</span>
                </div>

                <div class="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#005c4b] p-3 text-white">
                  ¡Hola! Te comparto el brochure oficial 📑✨
                  <br><br>
                  Para darte las unidades exactas: <strong>¿Buscás para vivienda o como inversión para renta?</strong>
                  <span class="block text-right text-[9px] text-slate-300 mt-1">21:40</span>
                </div>

                <div class="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#202c33] p-3 text-white">
                  Para inversión de renta.
                  <span class="block text-right text-[9px] text-slate-400 mt-1">21:41</span>
                </div>

                <div class="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#005c4b] p-3 text-white">
                  Excelente. Unidades desde <strong>$55.000 a $110.000 USD</strong> con entrega accesible y cuotas durante obra.
                  <br><br>
                  ¿En qué rango de inversión estás proyectando ingresar?
                  <span class="block text-right text-[9px] text-slate-300 mt-1">21:41</span>
                </div>

                <div class="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#202c33] p-3 text-white">
                  Tengo para la entrega y busco hasta $85.000 en cuotas.
                  <span class="block text-right text-[9px] text-slate-400 mt-1">21:42</span>
                </div>

                <div class="rounded-xl border border-[#d08b22]/40 bg-[#d08b22]/15 p-2.5 text-center text-[11px] text-[#efc981]">
                  ⚡ <strong>LEAD CALIFICADO:</strong> Derivado inmediatamente a la asesora de guardia con ficha completa.
                </div>
              </div>
            </div>

            <!-- Ficha resultante -->
            <div class="fd-card border-[#d08b22]/30 p-6">
              <span class="text-xs font-bold uppercase tracking-wider text-[#efc981]">
                Notificación Directa a la Asesora
              </span>
              <h3 class="mt-2 font-display text-xl font-bold text-white">
                Ficha que reciben en su WhatsApp:
              </h3>
              <p class="mt-2 text-xs text-slate-300">
                Ustedes no pierden tiempo preguntando si tiene plata. Saben exactamente el perfil antes de llamarlo:
              </p>

              <div class="mt-6 rounded-xl border border-white/10 bg-black/40 p-4 space-y-2 text-xs">
                <div class="flex justify-between border-b border-white/10 pb-2">
                  <span class="text-slate-400">Prospecto:</span>
                  <strong class="text-white">Ing. Carlos Benítez</strong>
                </div>
                <div class="flex justify-between border-b border-white/10 pb-2">
                  <span class="text-slate-400">Objetivo:</span>
                  <strong class="text-[#efc981]">Inversión en Pozo (Renta en USD)</strong>
                </div>
                <div class="flex justify-between border-b border-white/10 pb-2">
                  <span class="text-slate-400">Capacidad declarada:</span>
                  <strong class="text-emerald-400">$75.000 – $85.000 USD</strong>
                </div>
                <div class="flex justify-between pt-1">
                  <span class="text-slate-400">Acción sugerida:</span>
                  <strong class="text-white">Agendar visita showroom antes del viernes</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- SUBSECCIÓN: CHECKLIST OPERATIVO -->
        <!-- ================================================================= -->
        <section class="mt-16">
          <div class="border-b border-white/10 pb-4">
            <p class="text-xs uppercase tracking-wider text-[#d08b22]">Compromiso Mutuo</p>
            <h2 class="font-display text-2xl font-bold text-white">Checklist de Lanzamiento: Próximos 7 Días</h2>
            <p class="mt-1 text-xs text-slate-400">Marquen los pasos a medida que los completen. Se guardan en su navegador.</p>
          </div>

          <div class="fd-card mt-6 p-6 space-y-3">
            <label
              v-for="(task, tIdx) in checklist"
              :key="tIdx"
              class="flex items-center gap-3 rounded-lg border border-white/5 p-3 text-xs text-slate-300 transition hover:bg-white/5 cursor-pointer"
            >
              <input
                v-model="task.done"
                type="checkbox"
                class="h-4 w-4 rounded border-white/20 bg-black text-[#d08b22] focus:ring-[#d08b22]"
                @change="saveChecklist"
              />
              <span :class="{ 'line-through text-slate-500': task.done }">{{ task.label }}</span>
            </label>
          </div>
        </section>

        <!-- Footer del Portal con autoría de Fabricio -->
        <footer class="mt-20 border-t border-white/10 pt-8 text-center text-xs text-slate-400">
          <p class="font-medium text-white">
            Desarrollado y operado por <a href="https://fabricioduarte.tech" class="text-[#efc981] hover:underline" target="_blank">Fabricio Nicolás Duarte</a>
          </p>
          <p class="mt-1">
            Software Engineer & Strategic Partner • WhatsApp: <a href="https://wa.me/543704022201" class="text-white hover:underline">+54 370 402-2201</a>
          </p>
          <p class="mt-3 text-[11px] text-slate-500">
            AXIA Inmobiliaria © {{ new Date().getFullYear() }} • Documento privado y confidencial para el equipo de ventas.
          </p>
        </footer>
      </div>
    </main>
  </PortalShell>
</template>

<script setup>
const { session } = usePortal()
const activeCase = ref('bad')
const activeScript = ref(0)
const copied = ref(false)

usePageMeta(() => 'Portal Comercial AXIA')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

const guiones = [
  {
    tabLabel: 'Guion A: Inversor en Pozo (Rentabilidad)',
    tag: 'Ángulo Financiero',
    title: '¿Por qué dejar tus ahorros en el banco te está costando dinero?',
    steps: [
      { time: '0:00 - 0:03s', name: 'Gancho (Hook)', text: 'Dejar tus ahorros en el banco te está costando dinero. Te muestro cómo cambiarlos por ladrillos en pozo.' },
      { time: '0:03 - 0:15s', name: 'La Oportunidad', text: 'En zonas de alta demanda como Las Mercedes o Villa Morra, podés ingresar a un proyecto en pozo con entrega mínima y cuotas sin intereses.' },
      { time: '0:15 - 0:30s', name: 'El Producto / ROI', text: 'Monoambientes y unidades de 1 dormitorio con un retorno estimado del 10% al 12% anual en dólares al entregarse.' },
      { time: '0:30 - 0:42s', name: 'Llamada a la Acción', text: 'Tocá el botón acá abajo y te mando el dossier con el flujo de fondos y lista de precios directo a tu WhatsApp.' },
    ],
    fullText: 'Dejar tus ahorros en el banco te está costando dinero. Te muestro cómo cambiarlos por ladrillos en pozo. En zonas de altísima demanda como Las Mercedes o Villa Morra en Asunción, podés ingresar a un proyecto premium con una entrega accesible y cuotas en guaraníes o dólares sin intereses durante la obra. Unidades diseñadas para renta temporaria o tradicional con un retorno proyectado del 10% al 12% anual. Tocá el botón acá abajo y te mando el dossier con los números exactos directo a tu WhatsApp.',
  },
  {
    tabLabel: 'Guion B: Tour de Estilo de Vida (Unidades Listas)',
    tag: 'Estilo de Vida & Vivienda',
    title: '¿Vale la pena pagar $95.000 USD por este 2 dormitorios con cochera?',
    steps: [
      { time: '0:00 - 0:03s', name: 'Gancho Visual', text: '¿Vale la pena pagar 95.000 dólares por este 2 dormitorios a estrenar con cochera? Vamos a verlo.' },
      { time: '0:03 - 0:18s', name: 'Beneficio de Vida', text: 'Espacio integrado para recibir amigos, balcón con parrilla y amenities con piscina en la terraza y expensas súper bajas.' },
      { time: '0:18 - 0:28s', name: 'Escasez', text: 'Estamos a 5 minutos del nuevo eje corporativo. En este piso solo nos quedan dos unidades a precio de lista.' },
      { time: '0:28 - 0:38s', name: 'Llamada a la Acción', text: 'Escribime un mensaje ahora mismo para coordinar una visita privada esta misma semana antes de que se señe.' },
    ],
    fullText: '¿Vale la pena pagar 95.000 dólares por este departamento de 2 dormitorios a estrenar con cochera? Vamos a verlo. Living integrado con cocina moderna, balcón con parrilla propia para el fin de semana y una terraza con piscina y vista panorámica a la ciudad, con expensas súper accesibles. Estamos a 5 minutos del nuevo centro corporativo. Solo quedan dos unidades en este piso con precio promocional. Mandame un mensaje privado o tocá el botón de WhatsApp para coordinar tu visita esta misma semana.',
  },
  {
    tabLabel: 'Guion C: Autoridad & Preguntas Clave',
    tag: 'Asesoría de Confianza',
    title: '3 cosas que tenés que revisar antes de comprar en pozo en Paraguay',
    steps: [
      { time: '0:00 - 0:04s', name: 'Gancho de Alerta', text: 'Si estás pensando en invertir en pozo en Paraguay, no pongas un solo guaraní sin antes revisar estos 3 puntos clave.' },
      { time: '0:04 - 0:20s', name: 'Puntos 1 y 2', text: '1: La trayectoria de la constructora y sus obras ya entregadas. 2: El esquema de pagos y si el precio ya incluye cochera o baulera.' },
      { time: '0:20 - 0:32s', name: 'Punto 3 (AXIA)', text: '3: El cálculo realista de expensas y vacancia. En AXIA auditamos legal y financieramente cada edificio antes de recomendártelo.' },
      { time: '0:32 - 0:42s', name: 'Llamada a la Acción', text: 'Mandanos un mensaje con la palabra ASESORÍA y revisamos juntos las mejores opciones del mercado sin costo.' },
    ],
    fullText: 'Si estás pensando en invertir en un departamento en pozo en Paraguay, no pongas un solo dólar sin revisar estos 3 puntos clave. Primero: la trayectoria de la desarrolladora y las obras que ya entregó en tiempo y forma. Segundo: si las cuotas durante la obra tienen ajuste o son fijas, y si el valor incluye cochera. Y tercero: el rendimiento neto real descontando administración y expensas. En AXIA auditamos cada proyecto para que tu inversión esté 100% segura. Escribinos la palabra ASESORÍA al WhatsApp para enviarte nuestro informe comparativo.',
  },
]

const checklist = ref([
  { label: '1. Definir las 2 primeras unidades prioritarias para pautar (Proyecto en pozo + Unidad lista).', done: false },
  { label: '2. Centralizar los renders en alta resolución y la lista de precios de entrada.', done: false },
  { label: '3. Las asesoras graban el primer video siguiendo el Guion A (Inversión en Pozo).', done: false },
  { label: '4. Pasar el video crudo por el Auditor de IA y generar la versión final con subtítulos.', done: false },
  { label: '5. Conectar el flujo automatizado de WhatsApp y encender las primeras campañas en Advantage+.', done: false },
])

onMounted(() => {
  if (import.meta.client) {
    try {
      const saved = localStorage.getItem('axia-checklist')
      if (saved) checklist.value = JSON.parse(saved)
    } catch {
      /* ignore */
    }
  }
})

function saveChecklist() {
  if (import.meta.client) {
    localStorage.setItem('axia-checklist', JSON.stringify(checklist.value))
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch {
    /* ignore */
  }
}
</script>
