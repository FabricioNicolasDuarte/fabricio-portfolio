<template>
  <main id="contenido" tabindex="-1" class="homePage relative w-full overflow-x-clip bg-black select-none text-white">
    <!-- Ambient Three.js Particle Engine (`KprWebGLCanvas` — Clean, no face meshes or wireframe rombos) -->
    <KprWebGLCanvas />

    <!-- =======================================================================
         CONTINUOUS MULTI-SECTION BACKDROP 1: databackground.mp4
         (Continuous top-to-bottom scroll descent across Hero -> Project)
         ======================================================================= -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-[205vh] overflow-hidden z-0"
    >
      <div class="sticky top-0 h-screen w-full overflow-hidden">
        <video
          class="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen scale-105 transition-[object-position] duration-150 ease-out will-change-transform"
          :style="{
            objectPosition: `center ${heroScrollProgress}%`,
            transform: `translate3d(${heroParallax.x * -16}px, ${heroParallax.y * -16}px, 0) scale(1.06)`,
          }"
          src="/videos/databackground.mp4"
          autoplay
          loop
          muted
          playsinline
        />
        <!-- Deep cybernetic atmospheric overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,7,20,0.1)_0%,rgba(5,4,10,0.75)_65%,rgba(0,0,0,0.96)_100%)]" />
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30" />
      </div>
    </div>

    <!-- =======================================================================
         1. HERO SECTION — monumental KPR type + una promesa + un CTA
         ======================================================================= -->
    <section
      id="sec-hero"
      data-kpr-section="hero"
      class="homeLanding relative min-h-screen w-full overflow-hidden bg-transparent text-white flex flex-col justify-between z-10"
      @mousemove="onHeroMouseMove"
    >

      <!-- Top: brand + single promise -->
      <div class="relative z-20 w-full kpr-shell-first kpr-shell">
        <div class="max-w-2xl">
          <p class="font-mono text-[10px] text-[#c0fb50] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span class="inline-block h-1.5 w-1.5 bg-[#c0fb50] animate-pulse" />
            <span>{{ heroBadge }}</span>
          </p>
          <p class="type-body1 text-white/90 text-sm sm:text-base leading-relaxed max-w-xl">
            {{ t.home.metodo }}
          </p>
        </div>
      </div>

      <!-- CENTER: DATOS / PIPELINE / RESULTADOS (brand signal) -->
      <div class="relative z-20 my-auto w-full kpr-shell flex flex-col justify-center py-6 sm:py-10">
        <div class="w-full flex flex-col select-none min-w-0">
          <div
            v-for="(line, i) in heroLines"
            :key="line.code"
            data-hacky-host
            class="group flex items-baseline gap-3 sm:gap-5 transition-transform duration-300 hover:translate-x-2 hero-line min-w-0"
            :style="{ animationDelay: `${i * 90}ms` }"
          >
            <span class="font-mono text-[7px] sm:text-[8px] lg:text-[9px] text-[#c0fb50]/55 font-normal shrink-0 tracking-wider translate-y-[-0.15em]">{{ line.code }}</span>
            <h1 class="font-display font-black tracking-tighter uppercase text-white leading-[0.84] text-[clamp(2.1rem,11vw,12.5vw)] drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)] min-w-0">
              <KprHackyText :text="line.word" :autoplay="true" :delay="180 + i * 110" :play-sfx="i === 0" /><span class="text-[#c0fb50]">.</span>
            </h1>
          </div>
        </div>
      </div>

      <!-- Bottom: proof + single CTA -->
      <div class="relative z-20 w-full pb-8 sm:pb-12 kpr-shell flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div class="flex flex-col gap-2 font-mono text-[10px] text-white/55 uppercase tracking-widest">
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span class="text-[#c0fb50] font-bold">25+</span>
            <span>{{ t.home.proofs }}</span>
            <span class="text-[#c0fb50]">■</span>
            <span>UTN 9.40</span>
            <span class="text-[#c0fb50]">■</span>
            <span>ECOM</span>
          </div>
          <p class="normal-case tracking-normal text-white/45 text-[11px] max-w-md">
            {{ t.place }} · {{ hp.placeRemote }}.
            <NuxtLink :to="localePath('/trabajo')" data-hacky-host data-sfx="text" class="text-white/70 underline-offset-2 hover:text-[#c0fb50] hover:underline">
              <KprHackyText :text="t.nav.work" />
            </NuxtLink>
          </p>
        </div>

        <div class="pointer-events-auto flex flex-wrap items-center gap-3 sm:gap-4">
          <NuxtLink
            :to="localePath('/agendar')"
            data-hacky-host
            class="kpr-clip-btn bg-[#c0fb50] text-black font-mono text-[11px] font-bold uppercase px-6 py-3 tracking-wider transition-all hover:bg-white hover:shadow-[0_0_28px_rgba(192,251,80,0.55)]"
            @click="playClick"
          >
            <KprHackyText :text="t.hero.book" />
          </NuxtLink>
          <a
            :href="waHref"
            target="_blank"
            rel="noopener noreferrer"
            data-hacky-host
            class="kpr-clip-btn border border-[#c0fb50]/60 bg-black/70 text-[#c0fb50] font-mono text-[11px] font-bold uppercase px-5 py-3 tracking-wider transition-all hover:bg-[#c0fb50] hover:text-black hover:border-[#c0fb50]"
            :aria-label="t.nav.whatsappAria"
            @click="playClick"
          >
            <KprHackyText :text="t.nav.whatsapp" />
          </a>
          <a
            href="#project"
            data-hacky-host
            data-sfx="text"
            class="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            <KprHackyText :text="exploreLabel" />
            <svg class="w-3.5 h-3.5 text-[#c0fb50] group-hover:translate-y-1 transition-transform" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1V13M7 13L1 7M7 13L13 7" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- =======================================================================
         2. SECTION: PROJECT INTRO (`HomeStoryIntro` — Dark Theme)
         ======================================================================= -->
    <section
      id="project"
      data-kpr-section="project-intro"
      class="relative min-h-screen w-full bg-black/85 backdrop-blur-[2px] text-white border-t border-white/15"
      style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <!-- Left Container (7 cols) - Narrative & Interactive Data Engine Telemetry Console -->
        <div
          class="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/15 min-w-0"
          style="padding-top: var(--shell-pad-top); padding-left: var(--shell-pad-left); padding-right: var(--frame-gutter); padding-bottom: var(--shell-pad-bottom);"
        >
          <div>
            <span class="font-mono text-[10px] uppercase text-[#c0fb50] tracking-wider mb-3 flex items-center gap-2">
              <span class="inline-block h-1.5 w-1.5 bg-[#c0fb50]" />
              <span>{{ t.home.projectKicker }}</span>
            </span>
            <h2 class="font-display type-h0 font-bold max-w-xl text-white" data-hacky-host>
              <KprHackyText :text="t.home.projectTitle" />
            </h2>
            <p class="type-body1 text-white/80 max-w-xl text-sm sm:text-base leading-relaxed mt-6">
              {{ t.home.projectBody }}
            </p>
          </div>

          <!-- Method stages (capa A) — sin métricas inventadas -->
          <div class="mt-8 pt-8 border-t border-white/15">
            <div class="flex items-center justify-between font-mono text-[10px] text-[#c0fb50] mb-4">
              <span class="flex items-center gap-2">
                <span class="inline-block h-1.5 w-1.5 bg-[#c0fb50] animate-pulse" />
                <span>{{ t.home.methodKicker }}</span>
              </span>
              <NuxtLink
                :to="localePath('/metodo')"
                data-hacky-host
                data-sfx="text"
                class="text-white/50 hover:text-[#c0fb50] transition-colors"
              >
                <KprHackyText :text="t.home.methodCta" />
              </NuxtLink>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div
                v-for="stage in methodStages"
                :key="stage.code"
                data-hacky-host
                class="p-4 border border-white/15 bg-neutral-950/80 kpr-clip-card hover:border-[#c0fb50] transition-colors group"
              >
                <div class="flex items-center justify-between font-mono text-[9px] mb-1.5">
                  <span class="text-[#c0fb50] font-bold">{{ stage.code }}</span>
                  <span class="text-white/40">{{ stage.tag }}</span>
                </div>
                <h4 class="font-display text-sm font-bold text-white group-hover:text-[#c0fb50] transition-colors">
                  <KprHackyText :text="stage.title" />
                </h4>
                <p class="font-sans text-[11px] text-white/60 mt-1 leading-snug">
                  {{ stage.detail }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: profile reel + CTA overlay at chest height → /sobre -->
        <div
          class="lg:col-span-5 relative flex items-center justify-center bg-neutral-950 min-w-0"
          style="padding: var(--frame-gutter); padding-right: var(--shell-pad-right);"
        >
          <div
            ref="reelHostEl"
            class="relative w-full aspect-[4/5] max-w-md kpr-clip-card overflow-hidden border border-white/20 bg-black shadow-[0_0_40px_rgba(0,0,0,0.9)]"
          >
            <video
              ref="reelVideoEl"
              class="absolute inset-0 h-full w-full object-cover"
              src="/images/hero.mp4"
              poster="/images/hero-poster.jpg"
              muted
              loop
              playsinline
              webkit-playsinline
              preload="auto"
              @loadeddata="onReelReady"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div class="absolute inset-x-0 top-[78%] z-10 flex justify-center px-4">
              <NuxtLink
                :to="localePath('/sobre')"
                data-hacky-host
                class="kpr-clip-btn border border-[#c0fb50]/70 bg-black/75 px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#c0fb50] backdrop-blur-sm transition-all hover:bg-[#c0fb50] hover:text-black"
                @click="playClick"
              >
                <KprHackyText :text="`${t.nav.about} →`" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =======================================================================
         3. SECTION: PROJECT STORY (`HomeStoryProject` — Light Theme)
         ======================================================================= -->
    <section
      id="story"
      data-kpr-section="project-story"
      class="scroll-mt-28 md:scroll-mt-36 relative min-h-screen w-full bg-white text-black border-t border-black/15 flex flex-col justify-between"
    >
      <div class="flex-1 flex flex-col justify-between kpr-shell-pad">
        <!-- Row 1: Title & Headline -->
        <div class="border-b border-black/15 p-6 sm:p-10 md:p-14 pt-8 md:pt-12">
          <span class="font-mono text-[10px] text-black/60 uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
            <span class="inline-block h-1.5 w-1.5 bg-black" />
            <span>{{ t.home.storyKicker }}</span>
          </span>
          <h2 class="font-display type-h0 font-bold uppercase tracking-tight max-w-4xl text-black leading-[0.9]" data-hacky-host>
            <KprHackyText :text="t.home.storyTitle" />
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 border-b border-black/15 p-6 sm:p-10 md:p-14 gap-8">
          <div class="border-2 border-red-500/30 bg-red-500/[0.03] p-6 sm:p-8 kpr-clip-card flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between font-mono text-[10px] text-red-600 mb-3">
                <span class="font-bold">{{ hp.storyRiskKicker }}</span>
                <span>{{ hp.storyRiskTag }}</span>
              </div>
              <h3 class="font-display text-xl sm:text-2xl font-bold uppercase text-black mb-4" data-hacky-host>
                <KprHackyText :text="t.home.storyRiskTitle" />
              </h3>
              <ul class="space-y-3 font-sans text-xs sm:text-sm text-black/80">
                <li
                  v-for="(item, i) in hp.storyRiskItems"
                  :key="'risk-' + i"
                  class="flex items-start gap-2"
                >
                  <span class="text-red-500 font-mono font-bold">✕</span>
                  <span><strong>{{ item.lead }}</strong> {{ item.body }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-red-500/20 font-mono text-[10px] text-red-600 uppercase font-bold">
              {{ hp.storyRiskFooter }}
            </div>
          </div>

          <div class="border-2 border-black bg-black/[0.03] p-6 sm:p-8 kpr-clip-card flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between font-mono text-[10px] text-black mb-3">
                <span class="font-bold">{{ hp.storyOkKicker }}</span>
                <span class="font-bold">{{ hp.storyOkTag }}</span>
              </div>
              <h3 class="font-display text-xl sm:text-2xl font-bold uppercase text-black mb-4" data-hacky-host>
                <KprHackyText :text="t.home.storyOkTitle" />
              </h3>
              <ul class="space-y-3 font-sans text-xs sm:text-sm text-black/80">
                <li
                  v-for="(item, i) in hp.storyOkItems"
                  :key="'ok-' + i"
                  class="flex items-start gap-2"
                >
                  <span class="text-black font-mono font-bold">✓</span>
                  <span><strong>{{ item.lead }}</strong> {{ item.body }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-6 pt-4 border-t border-black/20 font-mono text-[10px] text-black uppercase font-bold">
              {{ hp.storyOkFooter }}
            </div>
          </div>
        </div>

        <div class="p-6 sm:p-10 md:p-14 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div class="max-w-2xl">
            <h3 class="font-display type-h1 font-bold text-black uppercase leading-tight" data-hacky-host>
              <KprHackyText :text="t.home.storyCloseTitle" />
            </h3>
          </div>
          <div class="flex flex-col sm:flex-row gap-6 font-mono text-[11px] text-black/80 uppercase">
            <div class="border-l-2 border-black pl-3">
              <span class="block text-black font-bold">25+</span>
              <span>{{ hp.storyStatProd }}</span>
            </div>
            <div class="border-l-2 border-black pl-3">
              <span class="block text-black font-bold">DATA ENG · AGTECH</span>
              <span>{{ hp.storyStatDomains }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =======================================================================
         4. SECTION: COLLECTION INTRO (`HomeCollectionIntro` — Stencil CountUp + Matrix)
         ======================================================================= -->
    <section
      id="collection"
      data-kpr-section="collection-intro"
      class="scroll-mt-28 md:scroll-mt-36 relative min-h-screen w-full max-w-[100vw] bg-black text-white border-t border-white/15 overflow-x-clip"
    >
      <!-- Continuous Ambient Satellite Video Backdrop (Continuity into Section Factions) -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <video
          class="h-full w-full object-cover opacity-35 mix-blend-screen scale-105"
          style="object-position: center 8%;"
          src="/videos/vacas-satelite.mp4"
          autoplay
          loop
          muted
          playsinline
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.85)_80%)]" />
      </div>

      <div
        class="relative z-10 grid w-full grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[calc(100vh-var(--shell-pad-top)-var(--shell-pad-bottom))] kpr-shell-pad"
      >
        <!-- Left: CountUp (+25) -->
        <div class="min-w-0 lg:col-span-4 flex flex-col justify-between gap-4 sm:gap-6 border-b border-white/15 pb-6 sm:pb-8 lg:border-b-0 lg:border-r lg:pr-6 xl:pr-8 lg:pb-0">
          <span class="font-mono text-[10px] text-[#c0fb50] uppercase tracking-wider block font-bold">
            {{ t.home.matrixKicker }}
          </span>
          <div class="py-2 sm:py-4 lg:my-auto lg:py-6">
            <div
              ref="count25El"
              data-count25
              class="font-stencil leading-none text-white tracking-tight drop-shadow-[0_0_35px_rgba(192,251,80,0.18)] transition-opacity duration-700 tabular-nums"
              style="font-size: clamp(3.25rem, 12vw, 11rem);"
              :class="proofVisible ? 'opacity-100' : 'opacity-40'"
            >
              +{{ count25 }}
            </div>
            <div class="font-mono text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-wider text-[#c0fb50] mt-3 font-bold max-w-[18rem] sm:max-w-none">
              {{ t.home.matrixLabel }}
            </div>
          </div>
          <span class="font-mono text-[10px] text-white/50 leading-relaxed">
            {{ hp.matrixCreds }}
          </span>
        </div>

        <!-- Middle: Dominios -->
        <div class="min-w-0 lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-6 border-b border-white/15 py-6 sm:py-8 lg:border-b-0 lg:border-r lg:px-6 xl:px-8 lg:py-0">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#c0fb50] mb-4 sm:mb-5">
              <span class="font-bold">{{ hp.deliverablesKicker }}</span>
              <span class="text-white/40">{{ hp.deliverablesTag }}</span>
            </div>

            <div class="space-y-3 sm:space-y-4">
              <div
                v-for="dom in hp.domains"
                :key="dom.code"
                class="p-3.5 sm:p-4 border border-white/15 bg-neutral-950/80 kpr-clip-card hover:border-[#c0fb50] transition-colors min-w-0"
              >
                <div class="flex items-center justify-between gap-2 font-mono text-[9px] text-[#c0fb50] mb-1">
                  <span>{{ dom.code }}</span>
                  <span class="shrink-0">{{ dom.tag }}</span>
                </div>
                <h4 class="font-display font-bold text-sm sm:text-base text-white break-words">
                  {{ dom.title }}
                </h4>
                <p class="font-sans text-xs text-white/70 mt-1 leading-relaxed">
                  {{ dom.body }}
                </p>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-white/60">
            <span>{{ hp.matrixFootLeft }}</span>
            <span class="text-[#c0fb50]">{{ hp.matrixFootRight }}</span>
          </div>
        </div>

        <!-- Right: Stack -->
        <div class="min-w-0 lg:col-span-3 flex flex-col justify-between gap-4 sm:gap-6 py-6 sm:py-8 lg:bg-neutral-950/80 lg:py-0 lg:pl-6 xl:pl-8">
          <div class="min-w-0">
            <div class="pb-4 border-b border-white/15 mb-4 sm:mb-5">
              <span class="font-mono block text-[9px] text-[#c0fb50] font-bold uppercase tracking-wider">
                {{ hp.stackKicker }}
              </span>
              <h4 class="font-display font-bold text-sm sm:text-base text-white mt-1">
                {{ hp.stackTitle }}
              </h4>
            </div>

            <div class="space-y-2 font-mono text-[10px]">
              <div
                v-for="row in hp.stackItems"
                :key="row.name"
                class="flex min-w-0 items-center justify-between gap-2 border border-white/10 bg-black/60 p-2.5"
              >
                <span class="min-w-0 break-words text-white pr-2">{{ row.name }}</span>
                <span class="shrink-0 text-[#c0fb50]">{{ row.tag }}</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-white/15">
            <div class="kpr-clip-card border border-[#c0fb50]/30 bg-black/90 p-4">
              <div class="flex items-center gap-2 font-mono text-[9px] text-[#c0fb50]">
                <span class="inline-block h-1.5 w-1.5 bg-[#c0fb50]" />
                <span>SYS.SPEC // READY</span>
              </div>
              <p class="font-sans text-[11px] text-white/70 mt-2 leading-relaxed">
                {{ hp.stackNote }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =======================================================================
         5. SECTION: COLLECTION GALLERY (`HomeCollectionGallery` — 3D Abanico de Proyectos)
         ======================================================================= -->
    <section
      id="portafolio"
      data-kpr-section="collection-gallery"
      class="scroll-mt-28 md:scroll-mt-36 relative min-h-screen w-full bg-[#08070d] text-white border-t border-white/15 kpr-shell-pad overflow-x-clip"
    >
      <!-- Top Row: Title + Category Filters -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-white/15 pb-8 mb-10">
        <div>
          <span class="font-mono text-[10px] text-[#c0fb50] uppercase tracking-widest block mb-1">
            {{ t.home.portfolioKicker }}
          </span>
          <h2 class="font-display type-h0 font-bold text-white" data-hacky-host>
            <KprHackyText :text="t.home.portfolioTitle" />
          </h2>
        </div>

        <!-- Category Filter Buttons -->
        <div class="flex flex-wrap gap-1.5" role="group">
          <button
            v-for="f in categoryFilters"
            :key="f.id"
            type="button"
            data-sfx="filter"
            class="px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer"
            :class="
              activeCategory === f.id
                ? 'bg-[#c0fb50] text-black font-bold shadow-[0_0_15px_rgba(192,251,80,0.35)]'
                : 'border border-white/20 text-white/70 hover:border-[#c0fb50] hover:text-[#c0fb50]'
            "
            @mouseenter="playHover"
            @click="setCategoryFilter(f.id)"
          >
            {{ f.label }}
          </button>
        </div>
      </div>

      <!-- 3D ABANICO INTERACTIVO (Split-Fan Card Deck) -->
      <div class="relative flex flex-col items-center justify-center py-6 sm:py-10 px-2 min-h-[560px] overflow-hidden">
        <!-- Center Axis Track Line & Triangle Markers -->
        <div class="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/15" />

        <!-- Cards Deck Container -->
        <div class="relative flex w-full max-w-[1280px] items-center justify-center min-h-[460px]">
          <div
            v-for="(item, idx) in filteredWork"
            :key="item.title"
            role="button"
            tabindex="0"
            data-sfx="card"
            class="fan-card absolute transition-all duration-500 ease-out cursor-pointer will-change-transform"
            :style="getFanCardStyle(idx)"
            @mouseenter="playHover"
            @click="selectFanCard(idx)"
            @keydown.enter.prevent="selectFanCard(idx)"
          >
            <div
              class="kpr-clip-card w-[310px] sm:w-[370px] md:w-[410px] overflow-hidden border transition-all duration-300"
              :class="
                idx === activeFanIdx
                  ? 'bg-black text-white border-[#c0fb50] shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(192,251,80,0.22)]'
                  : 'bg-[#0d0a14]/90 text-white/80 border-white/20 hover:border-white/50 backdrop-blur-md'
              "
            >
              <!-- Card Top Header -->
              <div class="flex items-center justify-between border-b border-white/15 px-4 py-3 font-mono text-[10px]">
                <span class="flex items-center gap-2 text-[#c0fb50]">
                  <span class="inline-block h-1.5 w-1.5 bg-[#c0fb50]" />
                  <span>SYS // 0{{ idx + 1 }}</span>
                </span>
                <span class="text-white/60">{{ tx(item, 'role') || 'Data & Dev' }}</span>
              </div>

              <!-- Card Visual Tech Blueprint Canvas (NO mockups/screenshots of past projects) -->
              <div class="relative h-[200px] w-full overflow-hidden bg-[#07050d] p-5 flex flex-col justify-between border-b border-white/10 group-hover:border-[#c0fb50]/40 transition-colors">
                <!-- Background Subtle Tech Grid -->
                <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-60" />
                <div class="absolute top-0 right-0 w-32 h-32 bg-[#c0fb50]/5 rounded-full blur-2xl" />

                <!-- Top Telemetry Row -->
                <div class="relative z-10 flex items-center justify-between font-mono text-[10px]">
                  <span class="text-[#c0fb50] font-bold flex items-center gap-1.5">
                    <span class="inline-block h-1.5 w-1.5 rounded-full bg-[#c0fb50] animate-pulse" />
                    <span>PROD // ARCHITECTURE</span>
                  </span>
                  <span class="px-2 py-0.5 bg-white/10 text-white/80 text-[9px] uppercase tracking-wider">
                    {{ (tx(item, 'kind') || item.kind || hp.systemFallback).split('·')[0].trim() }}
                  </span>
                </div>

                <!-- Center Monumental Code & Crosshairs -->
                <div class="relative z-10 my-auto py-2">
                  <div class="font-stencil text-4xl sm:text-5xl text-white/90 tracking-tight flex items-baseline justify-between">
                    <span>0{{ idx + 1 }}</span>
                    <span class="font-mono text-[10px] text-white/30 tracking-widest uppercase">SYS.SPEC</span>
                  </div>
                  <div class="h-0.5 w-full bg-gradient-to-r from-[#c0fb50]/80 via-white/20 to-transparent mt-1" />
                </div>

                <!-- Bottom Tech Tag Pills -->
                <div class="relative z-10 flex flex-wrap gap-1">
                  <span
                    v-for="tag in (tx(item, 'tags') || item.tags || []).slice(0, 4)"
                    :key="tag"
                    class="bg-black/85 border border-white/20 px-2 py-0.5 font-mono text-[9px] text-[#c0fb50]"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Card Body -->
              <div class="p-5">
                <h3 class="font-display type-h2 font-bold uppercase tracking-tight text-white line-clamp-2" data-hacky-host>
                  <KprHackyText :text="tx(item, 'title')" />
                </h3>
                <p class="mt-2 text-xs leading-relaxed text-white/75 line-clamp-3">
                  {{ tx(item, 'summary') }}
                </p>

                <!-- Card Actions -->
                <div class="mt-5 pt-3 border-t border-white/15 flex items-center justify-between font-mono text-[10px] uppercase">
                  <NuxtLink
                    v-if="item.href && !item.href.startsWith('http')"
                    :to="localePath(item.href)"
                    data-hacky-host
                    data-sfx="text"
                    class="font-bold text-[#c0fb50] hover:underline flex items-center gap-1"
                    @click.stop="playClick"
                  >
                    <KprHackyText :text="t.home.seeCase" />
                  </NuxtLink>
                  <a
                    v-else-if="item.href && item.href.startsWith('http')"
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hacky-host
                    data-sfx="text"
                    class="font-bold text-[#c0fb50] hover:underline flex items-center gap-1"
                    @click.stop="playClick"
                  >
                    <KprHackyText :text="t.home.seeDemo" />
                  </a>
                  <a
                    v-if="item.hrefRepo"
                    :href="item.hrefRepo"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hacky-host
                    data-sfx="text"
                    class="text-white/50 hover:text-white"
                    @click.stop="playClick"
                  >
                    <KprHackyText :text="hp.repositoryLabel" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Fan Controls Bar: Prev / Step / Next -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4 z-20">
          <button
            type="button"
            class="kpr-clip-btn bg-black border border-white/30 text-white hover:bg-[#c0fb50] hover:text-black hover:border-[#c0fb50] px-5 py-2.5 font-mono text-[11px] font-bold uppercase transition-all cursor-pointer shadow-lg"
            @mouseenter="playHover"
            @click="stepFan(-1)"
          >
            {{ hp.fanPrev }}
          </button>
          <div class="px-4 py-2 border border-white/20 bg-black/80 font-mono text-xs font-bold text-[#c0fb50]">
            {{ String(activeFanIdx + 1).padStart(2, '0') }} / {{ String(filteredWork.length).padStart(2, '0') }}
          </div>
          <button
            type="button"
            class="kpr-clip-btn bg-black border border-white/30 text-white hover:bg-[#c0fb50] hover:text-black hover:border-[#c0fb50] px-5 py-2.5 font-mono text-[11px] font-bold uppercase transition-all cursor-pointer shadow-lg"
            @mouseenter="playHover"
            @click="stepFan(1)"
          >
            {{ hp.fanNext }}
          </button>
        </div>

        <!-- Botón del Resto de los Proyectos -->
        <div class="mt-8 flex flex-col sm:flex-row items-center gap-4 z-20">
          <button
            type="button"
            class="kpr-clip-btn bg-[#c0fb50] text-black font-mono text-xs font-bold uppercase px-6 py-3 transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(192,251,80,0.5)] cursor-pointer"
            @click="toggleFullGrid"
          >
            {{ showFullGrid ? hp.hideGrid : hp.showAllProjects }}
          </button>
          <NuxtLink
            :to="localePath('/trabajo')"
            class="kpr-clip-btn border border-white/30 bg-black/60 text-white hover:border-[#c0fb50] hover:text-[#c0fb50] font-mono text-xs uppercase px-5 py-3 transition-colors"
          >
            {{ hp.detailedPortfolio }}
          </NuxtLink>
        </div>
      </div>

      <!-- Expandable Full Grid of all 13 Projects (when button is toggled) -->
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="showFullGrid" class="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(item, idx) in filteredWork"
            :key="'grid-' + item.title"
            class="group relative kpr-clip-card border border-white/15 bg-black/70 p-6 transition hover:border-[#c0fb50] flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-[10px]">
                <span class="text-[#c0fb50] flex items-center gap-2">
                  <span class="inline-block h-1.5 w-1.5 bg-[#c0fb50]" />
                  <span>0{{ idx + 1 }} // {{ tx(item, 'kind') || item.kind || hp.systemFallback }}</span>
                </span>
                <span class="text-white/50">{{ tx(item, 'role') || 'Data & Dev' }}</span>
              </div>

              <h3 class="font-display type-h2 font-bold text-white group-hover:text-[#c0fb50] transition-colors">
                {{ tx(item, 'title') }}
              </h3>

              <!-- Procedural Tech Canvas for Grid Card (NO mockups/screenshots of past projects) -->
              <div class="mt-4 w-full h-32 bg-[#07050d] border border-white/10 p-3.5 flex flex-col justify-between kpr-clip-card relative overflow-hidden">
                <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50" />
                <div class="relative z-10 flex items-center justify-between font-mono text-[9px]">
                  <span class="text-[#c0fb50] font-bold">SYS.ID // 0{{ idx + 1 }}</span>
                  <span class="text-white/40 font-mono">SPEC.ACTIVE</span>
                </div>
                <div class="relative z-10 font-stencil text-2xl text-white/80 tracking-tight">
                  PROD // SYSTEM
                </div>
                <div class="relative z-10 h-0.5 w-full bg-gradient-to-r from-[#c0fb50]/70 to-transparent" />
              </div>

              <p class="mt-4 type-body1 text-white/75 text-xs sm:text-sm leading-relaxed">
                {{ tx(item, 'summary') }}
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-white/10">
              <div class="flex flex-wrap gap-1 mb-4">
                <span
                  v-for="tag in (tx(item, 'tags') || item.tags || []).slice(0, 4)"
                  :key="tag"
                  class="bg-white/10 px-2 py-0.5 font-mono text-[9px] text-white/80"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center justify-between font-mono text-[10px] uppercase">
                <NuxtLink
                  v-if="item.href && !item.href.startsWith('http')"
                  :to="localePath(item.href)"
                  class="font-bold text-[#c0fb50] hover:underline flex items-center gap-1"
                >
                  <span>{{ t.home.seeCase.replace(' →', '') }}</span>
                  <span>→</span>
                </NuxtLink>
                <a
                  v-else-if="item.href && item.href.startsWith('http')"
                  :href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-bold text-[#c0fb50] hover:underline flex items-center gap-1"
                >
                  <span>{{ t.home.seeDemo.replace(' ↗', '') }}</span>
                  <span>↗</span>
                </a>
                <a
                  v-if="item.hrefRepo"
                  :href="item.hrefRepo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white/50 hover:text-white"
                >
                  {{ hp.repositoryLabel }}
                </a>
              </div>
            </div>
          </article>
        </div>
      </transition>
    </section>

    <!-- =======================================================================
         6. TWO WORLDS TABLEAUX (Exact replica of KPR's Scroll & Hold)
         ======================================================================= -->
    <KprHoldTableau
      id="keep"
      :spec="tableauKeep"
      class="border-t border-white/15"
    />

    <KprHoldTableau
      id="factions"
      :spec="tableauFactions"
      class="border-t border-white/15"
    />

    <!-- =======================================================================
         7. SECCIÓN MUNDO: TRAYECTORIA Y ANTECEDENTES LABORALES
         (Izquierda: Números Grandes Stencil y Detalle | Derecha: Línea de Tiempo Interactiva)
         ======================================================================= -->
    <section
      id="universe"
      data-kpr-section="universe"
      class="scroll-mt-28 md:scroll-mt-36 homeWorld relative min-h-screen w-full bg-[#05040a] text-white border-t border-white/15 kpr-shell-pad overflow-x-clip"
    >
      <!-- Background Atmospheric Grid -->
      <div class="pointer-events-none absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(192,251,80,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(192,251,80,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div class="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#968adf]/15 blur-[120px]" />
      </div>

      <!-- Header Row -->
      <div class="relative z-10 flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-8 mb-12">
        <div>
          <span class="font-mono text-[10px] text-[#c0fb50] uppercase tracking-widest block mb-2 font-bold flex items-center gap-2">
            <span class="inline-block h-1.5 w-1.5 bg-[#c0fb50] animate-pulse" />
            <span>{{ t.home.trajectoryKicker }}</span>
          </span>
          <h2 class="font-display type-h0 font-bold text-white uppercase tracking-tight" data-hacky-host>
            <KprHackyText :text="t.home.trajectoryTitle" />
          </h2>
        </div>
        <p class="hidden lg:block font-mono text-xs text-white/50 mt-3 md:mt-0 uppercase">
          {{ t.home.trajectoryHint }}
        </p>
      </div>

      <!-- Mobile: all milestones expanded (no tap-to-reveal) -->
      <div class="relative z-10 space-y-5 lg:hidden">
        <article
          v-for="m in careerMilestones"
          :key="`m-${m.num}`"
          class="kpr-clip-card border border-white/15 bg-black/70 p-5"
        >
          <div class="flex items-start justify-between gap-3 mb-3">
            <span class="font-stencil text-4xl leading-none text-[#c0fb50]">{{ m.num }}</span>
            <div class="flex flex-wrap justify-end gap-1.5">
              <span class="border border-[#c0fb50]/40 bg-[#c0fb50]/10 px-2 py-0.5 font-mono text-[9px] font-bold text-[#c0fb50] uppercase">
                {{ m.period }}
              </span>
              <span class="border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[9px] text-white/70 uppercase">
                {{ m.status }}
              </span>
            </div>
          </div>
          <h3 class="font-display text-xl font-bold uppercase tracking-tight text-white">
            {{ m.org }}
          </h3>
          <p class="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#c0fb50]">
            // {{ m.role }}
          </p>
          <p class="mt-4 text-sm leading-relaxed text-white/85">
            {{ m.lead }}
          </p>
          <ul class="mt-4 space-y-2 text-xs leading-relaxed text-white/75">
            <li v-for="(point, pIdx) in m.points" :key="pIdx" class="flex items-start gap-2">
              <span class="mt-0.5 shrink-0 font-mono text-[#c0fb50]">■</span>
              <span>{{ point }}</span>
            </li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="tech in m.tech"
              :key="tech"
              class="border border-white/20 bg-black/60 px-2 py-1 font-mono text-[9px] text-white/90"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>

      <!-- Desktop: interactive split (detail + timeline picker) -->
      <div class="relative z-10 hidden lg:grid grid-cols-12 gap-14 items-start min-h-[580px]">
        <div class="col-span-7 flex flex-col justify-between h-full">
          <div>
            <div class="flex items-baseline gap-4">
              <span class="font-stencil text-[11rem] leading-none text-[#c0fb50] tracking-tight drop-shadow-[0_0_40px_rgba(192,251,80,0.25)]">
                {{ currentMilestone.num }}
              </span>
              <span class="font-mono text-xs text-white/40 uppercase tracking-widest">
                {{ hp.antecedentsLabel }}
              </span>
            </div>

            <div class="mt-4">
              <div class="mb-2 flex flex-wrap items-center gap-3">
                <span class="border border-[#c0fb50]/50 bg-[#c0fb50]/20 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#c0fb50]">
                  {{ currentMilestone.period }}
                </span>
                <span class="bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80">
                  {{ currentMilestone.status }}
                </span>
              </div>
              <h3 class="font-display type-h1 font-bold uppercase tracking-tight text-white" data-hacky-host>
                <KprHackyText :text="currentMilestone.org" />
              </h3>
              <p class="mt-1 font-mono text-xs uppercase tracking-wider text-[#c0fb50]">
                // {{ currentMilestone.role }}
              </p>
            </div>

            <p class="mt-6 max-w-2xl type-body1 text-base leading-relaxed text-white/85">
              {{ currentMilestone.lead }}
            </p>

            <ul class="mt-6 max-w-2xl space-y-2.5 font-sans text-sm text-white/75">
              <li
                v-for="(point, pIdx) in currentMilestone.points"
                :key="pIdx"
                class="flex items-start gap-2.5"
              >
                <span class="mt-1 shrink-0 font-mono text-[#c0fb50]">■</span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="mt-8 flex flex-wrap gap-1.5">
              <span
                v-for="tech in currentMilestone.tech"
                :key="tech"
                class="border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white/90"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="relative col-span-5 space-y-6 border-l-2 border-[#c0fb50]/40 pl-6">
          <div
            v-for="(m, mIdx) in careerMilestones"
            :key="m.num"
            role="button"
            tabindex="0"
            data-sfx="card"
            class="group relative cursor-pointer border p-5 transition-all duration-300 kpr-clip-card"
            :class="
              activeTimelineIdx === mIdx
                ? 'translate-x-2 border-[#c0fb50] bg-[#c0fb50]/10 shadow-[0_0_25px_rgba(192,251,80,0.18)]'
                : 'border-white/15 bg-black/60 hover:border-white/40 hover:bg-white/5'
            "
            @mouseenter="playHover"
            @click="selectTimeline(mIdx)"
            @keydown.enter.prevent="selectTimeline(mIdx)"
          >
            <div
              class="absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300"
              :class="
                activeTimelineIdx === mIdx
                  ? 'scale-125 border-[#c0fb50] bg-[#c0fb50] shadow-[0_0_12px_#c0fb50]'
                  : 'border-white/40 bg-black group-hover:border-[#c0fb50]'
              "
            />
            <div class="mb-2 flex items-center justify-between font-mono text-[10px]">
              <span class="font-bold text-[#c0fb50]">{{ m.period }}</span>
              <span class="text-white/40">{{ m.num }} // SYS</span>
            </div>
            <h4
              class="font-display text-lg font-bold uppercase transition-colors"
              :class="activeTimelineIdx === mIdx ? 'text-[#c0fb50]' : 'text-white'"
            >
              {{ m.org }}
            </h4>
            <p class="mt-0.5 font-mono text-[10px] uppercase text-white/60">
              {{ m.role }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =======================================================================
         8. SECTION: HOME LAUNCH (`HomeLaunch` — Exact replica of kprverse.com)
         ======================================================================= -->
    <section
      id="launch"
      data-kpr-section="launch"
      class="relative min-h-[70vh] w-full bg-black text-white border-t border-white/15 flex flex-col justify-between kpr-shell-pad"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-white/15 pb-12 items-center">
        <div class="lg:col-span-8">
          <span class="font-mono text-[10px] uppercase text-[#c0fb50] tracking-widest mb-2 block font-bold">
            {{ t.home.launchKicker }}
          </span>
          <h2 class="font-display type-h0 text-white uppercase tracking-tight" data-hacky-host>
            <KprHackyText text="FABRICIO DUARTE" :autoplay="false" />
          </h2>
          <p class="type-body1 text-white/80 mt-4 max-w-xl text-sm sm:text-base">
            {{ t.home.launchBody }}
          </p>
        </div>

        <div class="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
          <NuxtLink
            :to="localePath('/agendar')"
            data-hacky-host
            class="kpr-clip-btn bg-[#c0fb50] text-black font-mono text-xs font-bold uppercase px-8 py-4 transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(192,251,80,0.6)] cursor-pointer tracking-wider"
            @click="playClick"
          >
            <KprHackyText :text="t.home.launchCta" />
          </NuxtLink>
          <a
            :href="waHref"
            target="_blank"
            rel="noopener noreferrer"
            data-hacky-host
            class="kpr-clip-btn border border-[#c0fb50]/60 bg-black text-[#c0fb50] font-mono text-xs font-bold uppercase px-6 py-4 transition-all hover:bg-[#c0fb50] hover:text-black cursor-pointer tracking-wider"
            :aria-label="t.nav.whatsappAria"
            @click="playClick"
          >
            <KprHackyText :text="t.nav.whatsapp" />
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        <a
          href="#keep"
          data-hacky-host
          class="group p-6 border border-white/15 bg-neutral-950/80 kpr-clip-card hover:border-[#c0fb50] transition-colors"
        >
          <span class="font-mono text-[10px] text-[#c0fb50] block mb-2">{{ t.home.launchCard1Code }}</span>
          <h4 class="font-display font-bold text-lg text-white group-hover:text-[#c0fb50]">
            <KprHackyText :text="t.home.launchCard1Title" />
          </h4>
          <p class="text-xs text-white/60 mt-1">{{ t.home.launchCard1Body }}</p>
        </a>

        <a
          href="#factions"
          data-hacky-host
          class="group p-6 border border-white/15 bg-neutral-950/80 kpr-clip-card hover:border-[#c0fb50] transition-colors"
        >
          <span class="font-mono text-[10px] text-[#c0fb50] block mb-2">{{ t.home.launchCard2Code }}</span>
          <h4 class="font-display font-bold text-lg text-white group-hover:text-[#c0fb50]">
            <KprHackyText :text="t.home.launchCard2Title" />
          </h4>
          <p class="text-xs text-white/60 mt-1">{{ t.home.launchCard2Body }}</p>
        </a>

        <a
          href="#universe"
          data-hacky-host
          class="group p-6 border border-white/15 bg-neutral-950/80 kpr-clip-card hover:border-[#c0fb50] transition-colors"
        >
          <span class="font-mono text-[10px] text-[#c0fb50] block mb-2">{{ t.home.launchCard3Code }}</span>
          <h4 class="font-display font-bold text-lg text-white group-hover:text-[#c0fb50]">
            <KprHackyText :text="t.home.launchCard3Title" />
          </h4>
          <p class="text-xs text-white/60 mt-1">{{ t.home.launchCard3Body }}</p>
        </a>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { work } from '~/content/work'
import { kprHome } from '~/locales/kprHome'
import { whatsappHref } from '~/utils/contact'

const { t, locale, localePath, tx } = useLocale()
const { playHover, playClick, playTextHover, playCarousel, playFilter, playTextDecode } = useKprAudio()
const hp = computed(() => kprHome[locale.value] || kprHome.es)
const waHref = computed(() => whatsappHref(locale.value))

usePageMeta(() => null)

const heroBadge = computed(() => {
  const map = {
    es: 'FABRICIO DUARTE // SOFTWARE DEVELOPER & DATA ENGINEER',
    en: 'FABRICIO DUARTE // SOFTWARE DEVELOPER & DATA ENGINEER',
    pt: 'FABRICIO DUARTE // SOFTWARE DEVELOPER & DATA ENGINEER',
    zh: 'FABRICIO DUARTE // 软件开发与数据工程',
  }
  return map[locale.value] || map.es
})

const exploreLabel = computed(() => {
  const map = { es: 'Explorar', en: 'Explore', pt: 'Explorar', zh: '浏览' }
  return map[locale.value] || map.es
})

const heroLines = computed(() => {
  const map = {
    es: [
      { code: '01/D', word: 'DATOS' },
      { code: '02/P', word: 'PIPELINE' },
      { code: '03/R', word: 'RESULTADOS' },
    ],
    en: [
      { code: '01/D', word: 'DATA' },
      { code: '02/P', word: 'PIPELINE' },
      { code: '03/R', word: 'RESULTS' },
    ],
    pt: [
      { code: '01/D', word: 'DADOS' },
      { code: '02/P', word: 'PIPELINE' },
      { code: '03/R', word: 'RESULTADOS' },
    ],
    zh: [
      { code: '01/D', word: '数据' },
      { code: '02/P', word: '流水线' },
      { code: '03/R', word: '结果' },
    ],
  }
  return map[locale.value] || map.es
})

const methodStages = computed(() => t.value.home.methodStages || [])

// Continuous Multi-Section Parallax Pan for databackground.mp4
const heroScrollProgress = ref(15)
const proofVisible = ref(false)
const count25 = ref(0)
const count25El = ref(null)
let count25Raf = null
let count25Running = false
let collectionObserver = null

function updateHeroScroll() {
  if (typeof window === 'undefined') return
  const y = window.scrollY
  const h = window.innerHeight
  const p = Math.max(0, Math.min(1, y / (h * 1.6)))
  heroScrollProgress.value = Math.round(12 + p * 68)
}

function resetCount25() {
  if (count25Raf) {
    cancelAnimationFrame(count25Raf)
    count25Raf = null
  }
  count25Running = false
  count25.value = 0
  proofVisible.value = false
}

function animateCount25() {
  if (!import.meta.client || count25Running) return
  count25Running = true
  proofVisible.value = true
  count25.value = 0

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    count25.value = 25
    count25Running = false
    return
  }

  const duration = 1800
  const end = 25
  const startTime = performance.now()
  let lastShown = -1
  let sfxTicks = 0
  try {
    playTextDecode(Math.min(duration, 720))
  } catch {
    /* audio optional */
  }

  const step = (now) => {
    const progress = Math.min(1, (now - startTime) / duration)
    const ease = 1 - Math.pow(1 - progress, 3)
    const val = Math.round(end * ease)
    if (val !== lastShown) {
      lastShown = val
      count25.value = val
      if (val > 0 && val < end && sfxTicks < 6 && val % 4 === 0) {
        sfxTicks++
        try {
          playCarousel()
        } catch {
          /* ignore */
        }
      }
    }
    if (progress < 1) {
      count25Raf = requestAnimationFrame(step)
    } else {
      count25.value = end
      count25Raf = null
      count25Running = false
      try {
        playCarousel()
      } catch {
        /* ignore */
      }
    }
  }
  count25Raf = requestAnimationFrame(step)
}

function bindCount25Observer() {
  const countEl = count25El.value || document.querySelector('[data-count25]')
  if (!countEl || !import.meta.client) return

  collectionObserver?.disconnect()
  collectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // Every time +25 enters the viewport → count from 0
          animateCount25()
        } else {
          // Left view → next visit starts at 0 again
          resetCount25()
        }
      }
    },
    { threshold: [0, 0.2, 0.45], rootMargin: '0px 0px -8% 0px' }
  )
  collectionObserver.observe(countEl)
}

const reelVideoEl = ref(null)
const reelHostEl = ref(null)
const reelInView = ref(false)
let reelObserver = null

function playReelFromStart() {
  const el = reelVideoEl.value
  if (!el) return
  try {
    el.muted = true
    el.defaultMuted = true
    el.playsInline = true
    if (Number.isFinite(el.duration) && el.duration > 0) {
      el.currentTime = 0
    }
    const p = el.play()
    if (p && typeof p.catch === 'function') {
      p.catch(() => {
        // retry once after a tick (browser autoplay / load race)
        requestAnimationFrame(() => {
          try {
            el.muted = true
            el.play()?.catch?.(() => {})
          } catch {
            /* ignore */
          }
        })
      })
    }
  } catch {
    /* autoplay optional */
  }
}

function pauseReel() {
  const el = reelVideoEl.value
  if (!el) return
  try {
    el.pause()
  } catch {
    /* ignore */
  }
}

function onReelReady() {
  if (reelInView.value) playReelFromStart()
}

function bindReelObserver() {
  const host = reelHostEl.value
  if (!host || !import.meta.client) return
  reelObserver?.disconnect()
  reelObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        reelInView.value = entry.isIntersecting
        if (entry.isIntersecting) playReelFromStart()
        else pauseReel()
      }
    },
    { threshold: [0, 0.15, 0.35], rootMargin: '40px 0px 40px 0px' }
  )
  reelObserver.observe(host)
  // first paint: if already visible, kick play
  const rect = host.getBoundingClientRect()
  const visible = rect.top < window.innerHeight && rect.bottom > 0
  if (visible) {
    reelInView.value = true
    playReelFromStart()
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateHeroScroll, { passive: true })
  updateHeroScroll()
  resetCount25()
  nextTick(() => {
    bindCount25Observer()
    bindReelObserver()
  })
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateHeroScroll)
  }
  resetCount25()
  collectionObserver?.disconnect()
  collectionObserver = null
  reelObserver?.disconnect()
  reelObserver = null
})

// Specs for 2 Tableaux Keep and Factions (copy reacts to locale)
const tableauKeepBase = {
  id: 'keep',
  sectionId: 'keep',
  code: '001',
  stencil: 'DATA ENG',
  ctaTo: '/casos/ecom',
  bgVideo: '/videos/tableau-data-bg.mp4',
  bgImage: '/images/tableau-data-engineering.jpg',
  fgImage: null,
  scanVideo: null,
  // Exacto: Desktop\futuristic data hub 3d model.glb (bytes idénticos; ?v bustea cache)
  modelUrl: '/models/hold/futuristic-data-hub.glb?v=desktop-20261107',
  gradient: 'radial-gradient(circle at 50% 45%, rgba(192, 251, 80, 0.12) 0%, rgba(5, 4, 10, 0.92) 75%)',
  holdHudAccent: '#c0fb50',
}

const tableauFactionsBase = {
  id: 'factions',
  sectionId: 'factions',
  code: '002',
  stencil: 'AGTECH',
  ctaTo: '/agronys',
  bgVideo: '/videos/tableau-agtech-bg.mp4',
  bgImage: '/images/tableau-agtech.jpg',
  fgImage: null,
  scanVideo: null,
  // Exacto: Desktop\cattle herd 3d model.glb (bytes idénticos; ?v bustea cache)
  modelUrl: '/models/hold/cattle-herd.glb?v=desktop-20261107',
  gradient: 'radial-gradient(circle at 50% 45%, rgba(150, 138, 223, 0.18) 0%, rgba(5, 4, 10, 0.92) 75%)',
  holdHudAccent: '#968adf',
}

const tableauKeep = computed(() => {
  const copy = hp.value.keep
  return {
    ...tableauKeepBase,
    kicker: copy.kicker,
    title: copy.title,
    story: copy.story,
    ctaLabel: copy.ctaLabel,
    holdHud: { accent: tableauKeepBase.holdHudAccent, ...copy.holdHud },
    flows: copy.flows,
  }
})

const tableauFactions = computed(() => {
  const copy = hp.value.factions
  return {
    ...tableauFactionsBase,
    kicker: copy.kicker,
    title: copy.title,
    story: copy.story,
    ctaLabel: copy.ctaLabel,
    holdHud: { accent: tableauFactionsBase.holdHudAccent, ...copy.holdHud },
    flows: copy.flows,
  }
})

// Category filters for portfolio
const activeCategory = ref('all')
const categoryFilters = computed(() => {
  const labels = {
    es: { all: 'Todo', de: 'Datos', da: 'Analítica', auto: 'Automatización', ecom: 'Institucional', agtech: 'AgTech', product: 'Producto' },
    en: { all: 'All', de: 'Data', da: 'Analytics', auto: 'Automation', ecom: 'Institutional', agtech: 'AgTech', product: 'Product' },
    pt: { all: 'Tudo', de: 'Dados', da: 'Analytics', auto: 'Automação', ecom: 'Institucional', agtech: 'AgTech', product: 'Produto' },
    zh: { all: '全部', de: '数据', da: '分析', auto: '自动化', ecom: '机构', agtech: 'AgTech', product: '产品' },
  }
  const L = labels[locale.value] || labels.es
  return [
    { id: 'all', label: L.all },
    { id: 'de', label: L.de },
    { id: 'da', label: L.da },
    { id: 'auto', label: L.auto },
    { id: 'ecom', label: L.ecom },
    { id: 'agtech', label: L.agtech },
    { id: 'product', label: L.product },
  ]
})

const filteredWork = computed(() => {
  if (activeCategory.value === 'all') return work
  return work.filter((w) => w.cats && w.cats.includes(activeCategory.value))
})

// Section 004: 3D Abanico interactivo
const activeFanIdx = ref(0)
const showFullGrid = ref(false)

function setCategoryFilter(id) {
  playFilter()
  activeCategory.value = id
  activeFanIdx.value = 0
}

function stepFan(dir) {
  playCarousel()
  const len = filteredWork.value.length
  if (!len) return
  activeFanIdx.value = (activeFanIdx.value + dir + len) % len
}

function selectFanCard(idx) {
  if (idx === activeFanIdx.value) return
  playCarousel()
  activeFanIdx.value = idx
}

function toggleFullGrid() {
  playClick()
  showFullGrid.value = !showFullGrid.value
}

function getFanCardStyle(idx) {
  const diff = idx - activeFanIdx.value
  const abs = Math.abs(diff)
  if (abs > 3) {
    return {
      opacity: 0,
      pointerEvents: 'none',
      transform: `translate3d(${diff * 180}px, 40px, -200px) scale(0.75)`,
      zIndex: 0,
    }
  }
  const translateX = diff * 220
  const translateY = abs * 16
  const rotateZ = diff * 4.8
  const scale = idx === activeFanIdx.value ? 1 : Math.max(0.78, 1 - abs * 0.09)
  const zIndex = 20 - abs
  const opacity = idx === activeFanIdx.value ? 1 : Math.max(0.35, 1 - abs * 0.25)

  return {
    transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotateZ}deg) scale(${scale})`,
    zIndex,
    opacity,
  }
}

// Section 003: Sección Mundo — Trayectoria & Antecedentes Laborales
const activeTimelineIdx = ref(0)
const careerTech = [
  ['Apache Superset', 'Power BI', 'Django', 'PostgreSQL', 'MSSQL', 'Celery', 'Redis', 'Docker'],
  ['Vue / Quasar', 'Expo', 'WatermelonDB', 'Supabase', 'n8n', 'Leaflet'],
  ['Tec. Univ. en Programación (UTN)', 'Lic. Ciencia de Datos (UGR)', 'Bases de Datos', 'Algoritmos y Estructuras', 'Sistemas Distribuidos'],
  ['Vue.js / Nuxt', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Supabase', 'Python'],
]
const careerHrefs = [
  'https://www.ecom.com.ar/',
  'https://agronys.com',
  'https://www.frre.utn.edu.ar/',
  null,
]
const careerMilestones = computed(() =>
  (hp.value.career || []).map((m, i) => ({
    ...m,
    orgHref: careerHrefs[i],
    tech: careerTech[i] || [],
  })),
)

const currentMilestone = computed(() => careerMilestones.value[activeTimelineIdx.value] || careerMilestones.value[0])

function selectTimeline(idx) {
  playClick()
  playCarousel()
  activeTimelineIdx.value = idx
}

const heroParallax = reactive({ x: 0, y: 0 })

function onHeroMouseMove(e) {
  const nx = (e.clientX / window.innerWidth - 0.5) * 2
  const ny = (e.clientY / window.innerHeight - 0.5) * 2
  heroParallax.x = nx
  heroParallax.y = ny
}
</script>
