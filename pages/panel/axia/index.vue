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
                  Portal Comercial AXIA • Sistema 2026
                </span>
                <p class="mt-0.5 text-xs text-slate-400">
                  Bienvenida, <strong class="text-white">{{ session?.name || 'Asesora AXIA' }}</strong>
                </p>
              </div>
            </div>

            <!-- Acceso directo a la Subsección de Herramientas -->
            <div class="flex items-center gap-2">
              <NuxtLink
                :to="localePath('/panel/axia/herramientas')"
                class="fd-btn text-xs font-semibold !bg-[#d08b22] !text-black hover:!bg-[#efc981]"
              >
                🛠️ Ir a Herramientas & Auditor IA →
              </NuxtLink>
            </div>
          </div>

          <!-- Barra de Navegación de Subsecciones -->
          <div class="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4">
            <span class="rounded-xl bg-[#d08b22]/20 px-4 py-2 text-xs font-semibold text-[#efc981] border border-[#d08b22]/40">
              📊 1. Flujo Completo & Estrategia
            </span>
            <NuxtLink
              :to="localePath('/panel/axia/herramientas')"
              class="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              🛠️ 2. Banco de Herramientas & Descargas
            </NuxtLink>
            <a
              href="#manual-meta"
              class="rounded-xl px-4 py-2 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              📘 3. Manual Interno de Meta Ads
            </a>
          </div>
        </div>
      </section>

      <div class="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <!-- Hero Header -->
        <div>
          <p class="text-xs uppercase tracking-widest text-[#d08b22]">ESTRATEGIA & ARQUITECTURA COMERCIAL</p>
          <h1 class="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Flujo de Trabajo Operativo: <span class="text-[#efc981]">AXIA Inmobiliaria</span>
          </h1>
          <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
            Diagrama interactivo del sistema comercial de punta a punta. Hacé clic en cualquier etapa del gráfico para ver la explicación detallada, los responsables y los criterios de ejecución.
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>Socio Estratégico: <strong class="text-white">Fabricio Nicolás Duarte</strong></span>
            <span>•</span>
            <span>Comisión de Cierre: <strong class="text-[#efc981]">5% por Operación</strong></span>
            <span>•</span>
            <span>Mercado Objetivo: <strong class="text-white">Asunción & Gran Asunción</strong></span>
          </div>
        </div>

        <!-- ================================================================= -->
        <!-- GRÁFICO INTERACTIVO DEL FLUJO DE TRABAJO COMPLETO -->
        <!-- ================================================================= -->
        <section class="mt-12">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p class="text-xs uppercase tracking-wider text-[#d08b22]">Diagrama de Procesos</p>
              <h2 class="font-display text-2xl font-bold text-white">Gráfico del Flujo de Trabajo Completo</h2>
              <p class="mt-1 text-xs text-slate-400">Tocá cualquier bloque del gráfico para ver la explicación detallada y extensa.</p>
            </div>
            <span class="text-[11px] text-slate-400">Paso activo: <strong class="text-[#efc981]">{{ activeNode.title }}</strong></span>
          </div>

          <!-- Flowchart Gráfico Horizontal/Vertical -->
          <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <div
              v-for="(node, nIdx) in workflowNodes"
              :key="node.id"
              class="group relative cursor-pointer rounded-2xl border p-4 transition-all"
              :class="activeNode.id === node.id ? 'border-[#d08b22] bg-[#d08b22]/15 shadow-[0_0_20px_rgba(208,139,34,0.3)] scale-[1.02]' : 'border-white/10 bg-black/40 hover:border-white/25 hover:bg-white/5'"
              @click="activeNode = node"
            >
              <!-- Número de Etapa -->
              <div class="flex items-center justify-between">
                <span
                  class="flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold"
                  :class="activeNode.id === node.id ? 'bg-[#d08b22] text-black' : 'bg-white/10 text-white'"
                >
                  0{{ nIdx + 1 }}
                </span>
                <span class="text-xs">{{ node.icon }}</span>
              </div>

              <!-- Título & Subtítulo -->
              <h3 class="mt-3 font-display text-sm font-semibold text-white group-hover:text-[#efc981]">
                {{ node.shortTitle }}
              </h3>
              <p class="mt-1 text-[11px] text-slate-400 line-clamp-2">
                {{ node.quickSummary }}
              </p>

              <!-- Indicador de acción -->
              <div class="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-semibold text-[#efc981]">
                <span>{{ activeNode.id === node.id ? 'Viendo detalle' : 'Tocar para ver' }}</span>
                <span>→</span>
              </div>
            </div>
          </div>

          <!-- Detalle Extenso del Nodo Seleccionado (Drawer / Detalle Expansivo) -->
          <div class="mt-6 rounded-2xl border border-[#d08b22]/40 bg-gradient-to-br from-[#182f40]/80 to-black p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            <div class="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span class="rounded-full bg-[#d08b22]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#efc981]">
                  Etapa 0{{ workflowNodes.findIndex(n => n.id === activeNode.id) + 1 }} • {{ activeNode.category }}
                </span>
                <h3 class="mt-2 font-display text-2xl font-bold text-white">
                  {{ activeNode.title }}
                </h3>
                <p class="mt-1 text-xs text-slate-300">{{ activeNode.objective }}</p>
              </div>

              <div class="flex flex-wrap gap-2 text-xs">
                <span class="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-slate-300">
                  Responsable: <strong class="text-white">{{ activeNode.owner }}</strong>
                </span>
                <span class="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-slate-300">
                  Herramienta: <strong class="text-[#efc981]">{{ activeNode.tools }}</strong>
                </span>
              </div>
            </div>

            <!-- Cuerpo Explicativo Extenso -->
            <div class="mt-6 grid gap-6 lg:grid-cols-3">
              <div class="lg:col-span-2 space-y-4 text-xs leading-relaxed text-slate-200">
                <div>
                  <h4 class="font-semibold text-white uppercase tracking-wider text-[11px] text-[#efc981] mb-1">
                    Descripción Operativa & Enfoque Comercial:
                  </h4>
                  <p>{{ activeNode.detailedExplanation }}</p>
                </div>

                <div>
                  <h4 class="font-semibold text-white uppercase tracking-wider text-[11px] text-[#efc981] mb-1">
                    Procedimiento Exacto Paso a Paso:
                  </h4>
                  <ul class="list-disc pl-4 space-y-1.5 text-slate-300">
                    <li v-for="(step, sIdx) in activeNode.actionSteps" :key="sIdx">
                      {{ step }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Tarjeta de Control & Criterio de Éxito -->
              <div class="rounded-xl border border-white/10 bg-black/40 p-5 space-y-4 text-xs">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400">Criterio de Éxito (SLA):</span>
                  <p class="mt-1 font-semibold text-emerald-400">{{ activeNode.successCriteria }}</p>
                </div>

                <div class="border-t border-white/10 pt-3">
                  <span class="text-[10px] uppercase font-bold text-slate-400">Entregable Concreto:</span>
                  <p class="mt-1 text-slate-300">{{ activeNode.deliverable }}</p>
                </div>

                <div class="border-t border-white/10 pt-3">
                  <span class="text-[10px] uppercase font-bold text-slate-400">Impacto en la Comisión (5%):</span>
                  <p class="mt-1 text-[#efc981]">{{ activeNode.commissionImpact }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- MANUAL DE USUARIO INTERNO: HERRAMIENTAS DE META -->
        <!-- ================================================================= -->
        <section id="manual-meta" class="mt-20 scroll-mt-24">
          <div class="border-b border-white/10 pb-4">
            <p class="text-xs uppercase tracking-wider text-[#d08b22]">Manual de Uso Interno</p>
            <h2 class="font-display text-2xl font-bold text-white">Manual Interno de Herramientas de Meta</h2>
            <p class="mt-1 text-xs text-slate-400">
              Guía técnica y visual de cómo configuramos Meta Ads Manager, Advantage+, WhatsApp Cloud y Conversions API para evitar penalizaciones y maximizar el retorno.
            </p>
          </div>

          <div class="mt-8 space-y-8">
            <!-- Herramienta 1: Meta Ads Manager & Housing Category -->
            <div class="fd-card p-6 sm:p-8">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold text-sm">
                    M1
                  </span>
                  <div>
                    <h3 class="font-display text-lg font-bold text-white">1. Meta Ads Manager: Categoría Especial de Anuncios (Housing)</h3>
                    <p class="text-xs text-slate-400">Regla estricta obligatoria para inmobiliarias en Meta</p>
                  </div>
                </div>
                <span class="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-400">
                  Configuración Obligatoria
                </span>
              </div>

              <!-- Mockup UI Meta Ads Manager -->
              <div class="mt-6 rounded-xl border border-white/10 bg-[#0a1017] p-5">
                <div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-slate-400">
                  <span class="font-mono text-slate-300">Meta Ads Manager • Campaña: AXIA_Pozo_LasMercedes_2026</span>
                  <span class="rounded bg-blue-500/20 px-2 py-0.5 text-blue-300">Modo: Subasta</span>
                </div>

                <div class="mt-4 grid gap-4 sm:grid-cols-2 text-xs">
                  <div class="rounded-lg border border-emerald-500/30 bg-emerald-950/10 p-3">
                    <p class="font-semibold text-emerald-300">✓ Special Ad Category: Vivienda (Housing)</p>
                    <p class="mt-1 text-slate-400">
                      <strong>Activado.</strong> Protege la cuenta publicitaria de baneos permanentes. Declara formalmente que se trata de bienes raíces.
                    </p>
                  </div>

                  <div class="rounded-lg border border-amber-500/30 bg-amber-950/10 p-3">
                    <p class="font-semibold text-amber-300">⚠️ Segmentación Demográfica Bloqueada por Meta</p>
                    <p class="mt-1 text-slate-400">
                      En vivienda Meta bloquea el filtro por edad o género. <em>Por eso el contenido del video (el gancho) hace la segmentación de capital.</em>
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-4 text-xs leading-relaxed text-slate-300">
                <strong>¿Por qué es vital para AXIA?</strong> Si intentamos engañar a Meta segmentando manualmente sin tildar "Vivienda", el algoritmo detecta palabras como "departamento", "en pozo" o "renta" y bloquea la cuenta publicitaria comercial. Con nuestra arquitectura, declaramos la categoría y dejamos que el video atraiga al inversor calificado.
              </div>
            </div>

            <!-- Herramienta 2: Meta Advantage+ -->
            <div class="fd-card p-6 sm:p-8">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 font-bold text-sm">
                    M2
                  </span>
                  <div>
                    <h3 class="font-display text-lg font-bold text-white">2. Meta Advantage+: Distribución Algorítmica Inteligente</h3>
                    <p class="text-xs text-slate-400">Entrega de presupuesto autónoma por Inteligencia Artificial</p>
                  </div>
                </div>
                <span class="rounded-full bg-purple-500/15 border border-purple-500/30 px-3 py-1 text-[11px] font-bold text-purple-300">
                  Advantage+ Leads
                </span>
              </div>

              <!-- Mockup UI Advantage+ -->
              <div class="mt-6 rounded-xl border border-white/10 bg-[#0a1017] p-5">
                <div class="grid gap-3 sm:grid-cols-3 text-xs">
                  <div class="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p class="font-semibold text-[#efc981]">Advantage+ Budget (CBO)</p>
                    <p class="mt-1 text-slate-400">El presupuesto diario se asigna automáticamente al video que genera prospectos al menor costo.</p>
                  </div>

                  <div class="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p class="font-semibold text-[#efc981]">Advantage+ Placements</p>
                    <p class="mt-1 text-slate-400">Publicación en Reels de Instagram, Stories y Feed de Facebook sin desperdiciar ubicaciones muertas.</p>
                  </div>

                  <div class="rounded-lg border border-white/10 bg-black/40 p-3">
                    <p class="font-semibold text-[#efc981]">Advantage+ Creative</p>
                    <p class="mt-1 text-slate-400">Ajusta el contraste, brillo y formato de pantalla según el dispositivo de cada usuario.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Herramienta 3: WhatsApp Cloud API & Webhook -->
            <div class="fd-card p-6 sm:p-8">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400 font-bold text-sm">
                    M3
                  </span>
                  <div>
                    <h3 class="font-display text-lg font-bold text-white">3. WhatsApp Cloud API: Interceptación en &lt;60 Segundos</h3>
                    <p class="text-xs text-slate-400">Conexión Click-to-WhatsApp directa desde anuncios</p>
                  </div>
                </div>
                <span class="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-400">
                  Speed to Lead
                </span>
              </div>

              <div class="mt-6 rounded-xl border border-white/10 bg-[#0a1017] p-5 text-xs text-slate-300 leading-relaxed">
                <p>
                  Cuando el usuario toca el anuncio en Instagram, se abre su WhatsApp nativo con un mensaje precargado. En ese mismo instante, nuestro servidor de webhook dispara:
                </p>
                <ol class="mt-3 list-decimal pl-5 space-y-1.5 text-slate-400">
                  <li>Envío inmediato del PDF Brochure del edificio en menos de 15 segundos.</li>
                  <li>Pregunta de calificación 1: ¿Vivienda o inversión?</li>
                  <li>Pregunta de calificación 2: Rango de presupuesto y plazo de entrega.</li>
                  <li>Notificación inmediata a la asesora asignada por WhatsApp con la ficha completa.</li>
                </ol>
              </div>
            </div>

            <!-- Herramienta 4: Meta Conversions API (CAPI) -->
            <div class="fd-card p-6 sm:p-8">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-600/20 text-amber-400 font-bold text-sm">
                    M4
                  </span>
                  <div>
                    <h3 class="font-display text-lg font-bold text-white">4. Meta Conversions API (CAPI): Retroalimentación de Ventas</h3>
                    <p class="text-xs text-slate-400">Entrenamiento del algoritmo con compradores reales</p>
                  </div>
                </div>
                <span class="rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-[11px] font-bold text-amber-300">
                  Optimización de Cierre
                </span>
              </div>

              <div class="mt-6 rounded-xl border border-white/10 bg-[#0a1017] p-5 text-xs text-slate-300 leading-relaxed">
                <p>
                  Cuando una agente cierra una operación y se cobra la seña o se firma el boleto de compraventa, el backend de Fabricio envía una petición POST a la <strong>Graph API de Meta (endpoint /events)</strong> con el evento <code>Purchase / RealEstateDeposit</code>.
                </p>
                <p class="mt-2 text-slate-400">
                  <strong>Efecto comercial:</strong> Meta aprende qué personas en Asunción tienen realmente $70.000 a $120.000 USD y busca perfiles idénticos para las próximas campañas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- GUIONES MAESTROS INTERACTIVOS PARA TELEPROMPTER -->
        <!-- ================================================================= -->
        <section id="guiones" class="mt-20 scroll-mt-24">
          <div class="border-b border-white/10 pb-4">
            <p class="text-xs uppercase tracking-wider text-[#d08b22]">Material de Producción</p>
            <h2 class="font-display text-2xl font-bold text-white">Guiones de Grabación para las Agentes</h2>
            <p class="mt-1 text-xs text-slate-400">Seleccioná el guion correspondiente y usá el botón para copiarlo al teleprompter.</p>
          </div>

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

            <!-- Pasos -->
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

            <!-- Texto continuo -->
            <div class="mt-6 rounded-xl border border-dashed border-[#d08b22]/40 bg-black/50 p-4 text-xs leading-relaxed text-slate-200">
              <p class="font-semibold text-[#efc981] mb-1">Texto continuo para teleprompter:</p>
              {{ guiones[activeScript].fullText }}
            </div>
          </div>
        </section>

        <!-- Footer con autoría estricta de fabricioduarte.tech -->
        <footer class="mt-24 border-t border-white/10 pt-8 text-center text-xs text-slate-400">
          <p class="font-medium text-white">
            © {{ new Date().getFullYear() }} <a href="https://fabricioduarte.tech" class="text-[#efc981] hover:underline" target="_blank">fabricioduarte.tech</a> • Fabricio Nicolás Duarte. Todos los derechos reservados.
          </p>
          <p class="mt-1 text-slate-500">
            Plataforma interna de desarrollo, herramientas y operaciones estratégicas. Software Engineer & Strategic Partner.
          </p>
          <p class="mt-2 text-slate-400">
            WhatsApp: <a href="https://wa.me/543704022201" class="text-[#efc981] hover:underline" target="_blank">+54 370 402-2201</a> • Correo: <a href="mailto:fabricioduarteoficial@gmail.com" class="text-white hover:underline">fabricioduarteoficial@gmail.com</a>
          </p>
        </footer>
      </div>
    </main>
  </PortalShell>
</template>

<script setup>
const { session } = usePortal()
const { localePath } = useLocale()
const activeScript = ref(0)
const copied = ref(false)

usePageMeta(() => 'Estrategia & Flujo AXIA')
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

// Nodos del Flujo de Trabajo Completo
const workflowNodes = [
  {
    id: 'prod',
    icon: '🎬',
    shortTitle: '1. Producción de Video',
    title: 'Grabación de Videos con Gancho de 3 Segundos',
    category: 'Creativos & Contenido',
    quickSummary: 'Las asesoras graban 2 veces por semana siguiendo los guiones estructurados.',
    objective: 'Captar la atención de inversionistas en los primeros 3 segundos y frenar el scroll en Instagram.',
    owner: 'Asesoras AXIA (Josefina, Deborah, Karen)',
    tools: 'Smartphone en vertical 9:16 + Guiones Maestros AXIA',
    detailedExplanation: 'En el mercado inmobiliario actual de Asunción, el contenido no compite con otras inmobiliarias; compite con el entretenimiento. Por ello, el 100% de los videos debe arrancar con una cifra de alto impacto, una pregunta incómoda sobre la inflación o un recorrido visual de entrada inmediata. No se saluda con "hola chicos", se va directo a la propuesta financiera.',
    actionSteps: [
      'Elegir la unidad o pozo prioritario de la semana.',
      'Grabar con buena luz frontal y micrófono de solapa o teléfono cerca.',
      'Enviar el archivo de video en bruto (sin editar) a la carpeta de Google Drive.',
    ],
    successCriteria: '2 videos grabados semanalmente por asesora con dicción clara.',
    deliverable: 'Archivos de video crudo subidos a Google Drive.',
    commissionImpact: 'Alimenta el embudo con prospectos constantes para sostener cierres mensuales.',
  },
  {
    id: 'audit',
    icon: '🤖',
    shortTitle: '2. Auditoría con IA',
    title: 'Validación Multimodal con Gemini Pro',
    category: 'Control de Calidad Pre-Pauta',
    quickSummary: 'El motor de IA audita el video cuadro por cuadro y emite un Pass/Fail.',
    objective: 'Garantizar que ningún video salga a pauta publicitaria si no cumple los estándares matemáticos de retención.',
    owner: 'Fabricio Nicolás Duarte (Backend de IA)',
    tools: 'Gemini 1.5 Pro Multimodal + OpenCV / MoviePy',
    detailedExplanation: 'El video se analiza en 5 dimensiones críticas: gancho de los primeros 3 segundos, claridad de las cuotas y precios, energía y mirada a la cámara de la asesora, calidad sonora sin música invasiva y llamado a la acción hacia WhatsApp. Si obtiene menos de 80 puntos, se le entregan las correcciones exactas a la asesora para recortar o regrabar.',
    actionSteps: [
      'Ingesta automática del video desde Google Drive.',
      'Evaluación multimodal con prompt estricto de marketing inmobiliario.',
      'Generación de subtítulos dinámicos de alta retención para ver sin volumen.',
    ],
    successCriteria: 'Score mínimo de 85/100 para recibir presupuesto publicitario.',
    deliverable: 'Video final aprobado con subtítulos y reporte de auditoría.',
    commissionImpact: 'Evita quemar presupuesto en videos aburridos que solo generan costos sin ventas.',
  },
  {
    id: 'ads',
    icon: '📈',
    shortTitle: '3. Despliegue Meta Ads',
    title: 'Pauta Algorítmica con Meta Advantage+',
    category: 'Distribución Publicitaria',
    quickSummary: 'Lanzamiento con Categoría de Vivienda y optimización de presupuesto autónoma.',
    objective: 'Entregar los anuncios a perfiles con alto interés de inversión en pozo y vivienda en Paraguay.',
    owner: 'Fabricio Nicolás Duarte (Pauta & Ads)',
    tools: 'Meta Ads Manager + Advantage+ Campaign Budget (CBO)',
    detailedExplanation: 'Se configura la campaña bajo la Categoría Especial de Anuncios (Housing), blindando la cuenta de bloqueos. Meta Advantage+ distribuye el presupuesto de forma autónoma entre los videos ganadores, buscando prospectos en Instagram Reels, Stories y Feed de Facebook en Asunción, Gran Asunción y plazas inversoras.',
    actionSteps: [
      'Carga de creativos validados en el AdSet Advantage+.',
      'Configuración de objetivo: Clientes Potenciales hacia WhatsApp.',
      'Monitoreo de fatiga publicitaria y rotación de ángulos cada 10 días.',
    ],
    successCriteria: 'Costo por lead calificado por debajo de $2.50 USD.',
    deliverable: 'Campañas activas generando consultas constantes hacia WhatsApp.',
    commissionImpact: 'Garantiza volumen de interesados reales a costo predecible.',
  },
  {
    id: 'wpp',
    icon: '⚡',
    shortTitle: '4. Filtrado en WhatsApp',
    title: 'Interceptación y Calificación en <60s',
    category: 'Speed to Lead',
    quickSummary: 'Bot inteligente responde de inmediato, entrega brochure y filtra solvencia.',
    objective: 'Eliminar el 90% de los curiosos sin dinero y calificar capacidad de compra en tiempo real.',
    owner: 'Bot Asistente Virtual AXIA (Tecnología Fabricio Duarte)',
    tools: 'WhatsApp Cloud API + Webhook en Node/Python',
    detailedExplanation: 'En Paraguay el lead se enfría a los 15 minutos. Nuestro sistema entrega el brochure oficial en menos de 15 segundos y hace dos preguntas clave: ¿vivienda propia o inversión de renta? y ¿cuál es el rango de inversión disponible? Si el cliente tiene presupuesto, el bot dispara la alerta directa a la asesora.',
    actionSteps: [
      'Recepción del mensaje Click-to-WhatsApp.',
      'Envío inmediato del brochure en PDF de la propiedad.',
      'Extracción de datos de solvencia económica del interesado.',
    ],
    successCriteria: 'Tiempo de primera respuesta menor a 60 segundos las 24 horas.',
    deliverable: 'Ficha comercial estructurada con presupuesto y contacto verificado.',
    commissionImpact: 'Las asesoras no pierden tiempo chateando con personas sin dinero.',
  },
  {
    id: 'sales',
    icon: '🤝',
    shortTitle: '5. Cierre Comercial',
    title: 'Contacto en Caliente y Visita al Showroom',
    category: 'Gestión Humana de Venta',
    quickSummary: 'La asesora toma el contacto precalificado y agenda la visita presencial.',
    objective: 'Convertir la consulta calificada en una visita presencial y firma de boleto o seña.',
    owner: 'Asesoras AXIA (Josefina, Deborah, Karen)',
    tools: 'WhatsApp Business Personal + Showroom del Edificio',
    detailedExplanation: 'Con la ficha lista en la mano (sabiendo que el cliente tiene entre $70.000 y $95.000 USD), la asesora llama o escribe con un enfoque de alto estatus: "Hola Carlos, vi tu interés en el 2 dormitorios en Las Mercedes, tengo reservadas las 2 unidades con mayor rentabilidad en pozo para mostrarte esta semana".',
    actionSteps: [
      'Contactar al prospecto calificado en menos de 15 minutos de recibida la ficha.',
      'Agendar videollamada de asesoramiento o visita presencial al showroom.',
      'Acompañar en el plan de pagos y firma de reserva/seña.',
    ],
    successCriteria: 'Tasa de agendamiento de visitas superior al 25% de los leads calificados.',
    deliverable: 'Reserva firmada, comprobante de seña y boleto de compraventa.',
    commissionImpact: 'Es el momento donde se genera el dinero real: comisión para la asesora y 5% para Fabricio.',
  },
  {
    id: 'capi',
    icon: '🔄',
    shortTitle: '6. Retroalimentación CAPI',
    title: 'Sincronización de Conversiones con Meta',
    category: 'Inteligencia de Datos',
    quickSummary: 'Se envía el evento de venta a Meta para entrenar al algoritmo con compradores reales.',
    objective: 'Educar a la IA de Meta para que busque clones de las personas que efectivamente compraron.',
    owner: 'Fabricio Nicolás Duarte (Data & CAPI)',
    tools: 'Meta Conversions API (CAPI) + Supabase',
    detailedExplanation: 'Cada vez que una asesora reporta una seña concretada, se dispara un evento de conversión de servidor (Purchase) hacia Meta. El algoritmo cruza los datos de ese comprador real y optimiza la subasta para mostrarle los próximos anuncios a perfiles socioeconómicos idénticos en Paraguay.',
    actionSteps: [
      'Registro del valor del inmueble vendido en la base de datos.',
      'Envío del payload cifrado a la Conversions API de Meta.',
      'Ajuste del Lookalike Audience (Públicos Similares) de compradores reales.',
    ],
    successCriteria: '100% de las ventas cerradas sincronizadas con Meta CAPI.',
    deliverable: 'Algoritmo de Meta entrenado para reducir el costo por comprador.',
    commissionImpact: 'Cada cierre hace que el próximo cliente sea más fácil y rápido de conseguir.',
  },
]

const activeNode = ref(workflowNodes[0])

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
