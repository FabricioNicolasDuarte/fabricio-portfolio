<template>
  <section
    v-if="spec"
    :id="spec.sectionId"
    ref="sectionRef"
    data-kpr-theme="dark"
    :data-kpr-section="spec.id"
    class="relative h-[225vh] w-full bg-black text-white select-none"
  >
    <!-- Sticky Full-Viewport 3D Stage -->
    <div
      class="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden kpr-shell-pad"
      style="perspective: 1300px"
    >
      <!-- 3D Flying Tableau Card (`cardsTableau` / `card` in `Home.17c0ce45.js`) -->
      <div
        ref="card3DRef"
        style="transform-style: preserve-3d"
        class="kpr-clip-card relative h-full w-full cursor-none select-none overflow-hidden border border-white/25 bg-[#08070f] shadow-[0_35px_100px_rgba(0,0,0,0.92)] will-change-transform"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @pointerleave="onPointerLeave"
        @pointercancel="onPointerLeave"
        @pointermove="onPointerMove"
      >
        <!-- 2.5D Parallax World Plate (transform controlled strictly by GSAP ticker) -->
        <div
          ref="bgPlateRef"
          class="absolute inset-[-6%] will-change-transform"
        >
          <video
            v-if="spec.bgVideo"
            :src="spec.bgVideo"
            autoplay
            loop
            muted
            playsinline
            class="h-full w-full object-cover opacity-60 transition-[object-position] duration-150 ease-out"
            :style="{
              objectPosition: `center ${tableauVideoY}%`,
              transform: `scale(${1.04 + holdVal * 0.06})`,
            }"
          />
          <img
            v-else
            :src="spec.bgImage"
            :alt="spec.title"
            class="h-full w-full object-cover opacity-55"
            draggable="false"
          />
          <div
            class="absolute inset-0"
            :style="{ background: spec.gradient }"
          />

          <!-- Optional Three.js (only if spec.modelUrl) -->
          <canvas
            v-show="!!spec.modelUrl"
            ref="threeCanvasRef"
            class="pointer-events-none absolute inset-0 z-10 h-full w-full"
            :style="{ opacity: secondLayer ? 0.7 + holdProgress * 0.25 : 0.35 }"
          />

        </div>

        <!-- Soft enter sheen (kept subtle) -->
        <div
          ref="pulseRef"
          class="pointer-events-none absolute inset-y-[-40%] left-0 z-10 w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
        />

        <!-- Hold dim overlay -->
        <div
          class="pointer-events-none absolute inset-0 z-[5] bg-[#05040a] transition-opacity duration-150"
          :style="{ opacity: secondLayer ? 0.45 + holdProgress * 0.25 : 0 }"
        />

        <!-- IDLE STATE: Top Telemetry Pill -->
        <div
          :style="{ opacity: secondLayer ? 0 : 1 }"
          class="pointer-events-none absolute inset-x-8 top-6 z-15 flex items-center justify-between font-mono text-[10px] text-white/65 transition-opacity duration-200"
        >
          <span class="flex items-center gap-2">
            <span class="inline-block h-1.5 w-1.5 bg-[#c0fb50]" />
            <span>TABLEAU // {{ spec.code }}</span>
          </span>
          <span class="text-white/55">MANTENÉ CLIC · ARQUITECTURA</span>
        </div>

        <!-- IDLE STATE: Bottom-Center `tableauStory` (`Home.17c0ce45.js`) -->
        <div
          :style="{ opacity: secondLayer ? 0 : 1 }"
          class="pointer-events-none absolute inset-x-6 bottom-8 z-15 mx-auto flex max-w-3xl flex-col items-center text-center transition-opacity duration-200"
        >
          <span class="mb-2.5 flex items-center gap-2 border border-[#c0fb50]/45 bg-black/85 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#c0fb50]">
            <span class="h-1.5 w-1.5 bg-[#c0fb50] animate-pulse" />
            {{ spec.code }} ■ {{ spec.kicker }}
          </span>
          <h3 class="font-display type-h1 font-bold uppercase tracking-tight text-white drop-shadow-lg" data-hacky-host>
            <KprHackyText :text="spec.title" />
          </h3>
          <p class="mt-2 max-w-2xl text-xs leading-relaxed text-white/85 md:text-sm">
            {{ spec.story }}
          </p>
        </div>

        <!-- HOLD STATE: KPR `sdLayerShell` Giant -90deg Rotated Vertical Hexaframe Stencil Title on Left Edge -->
        <div
          :style="{ opacity: secondLayer ? Math.min(1, holdProgress * 2) : 0 }"
          class="pointer-events-none absolute inset-y-0 left-3 md:left-4 z-20 flex items-center justify-center transition-opacity duration-150"
        >
          <p
            style="writing-mode: vertical-rl; transform: rotate(180deg);"
            class="select-none whitespace-nowrap font-stencil text-[clamp(2.8rem,7.2vh,5.4rem)] uppercase leading-[0.82] tracking-[-0.06em] text-[#c0fb50]/90 drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)]"
          >
            <KprHackyText :text="spec.stencil" />
          </p>
        </div>

        <!-- HOLD STATE: Top Flow Header Bar -->
        <div
          :style="{ opacity: secondLayer ? Math.min(1, holdProgress * 2.2) : 0 }"
          class="pointer-events-none absolute inset-x-10 top-5 z-20 flex items-center justify-between border-b border-[#c0fb50]/45 pb-2.5 font-mono text-[10px]"
        >
          <span class="font-bold text-[#c0fb50]">
            {{ currentFlow.flowName }}
          </span>
          <span class="text-white/80">
            {{ currentFlow.subtitle }}
          </span>
        </div>

        <!-- HOLD STATE: 6 Multi-Keyframe HUD Scanner Layers (`2ndlayer.ae.json`) -->
        <div
          v-for="(layer, idx) in currentFlow.layers"
          :key="layer.code"
          :style="getLayerStyle(idx)"
          class="pointer-events-none absolute z-20 max-w-[290px] transition-transform duration-150"
          :class="POSITION_CLASSES[layer.position] || POSITION_CLASSES['top-left']"
        >
          <div
            class="flex items-center gap-2"
            :class="layer.position.includes('right') ? 'justify-end' : 'justify-start'"
          >
            <span
              v-if="!layer.position.includes('right')"
              class="h-2 w-2 bg-[#c0fb50] shadow-[0_0_8px_#c0fb50]"
            />
            <span class="h-px w-8 bg-[#c0fb50]" />
            <span class="font-mono text-[9px] font-bold uppercase text-[#c0fb50]">
              {{ `${layer.code} // ${layer.title}` }}
            </span>
            <span
              v-if="layer.position.includes('right')"
              class="h-2 w-2 bg-[#c0fb50] shadow-[0_0_8px_#c0fb50]"
            />
          </div>

          <div
            class="mt-1.5 border-[#c0fb50] bg-black/90 p-3 backdrop-blur-md"
            :class="layer.position.includes('right') ? 'border-r-2 text-right' : 'border-l-2 text-left'"
          >
            <p class="font-sans text-[11px] leading-relaxed text-white/90">
              {{ layer.detail }}
            </p>
            <span class="mt-1.5 inline-block bg-[#c0fb50]/20 px-2 py-0.5 font-mono text-[9px] font-bold text-[#c0fb50]">
              {{ layer.metric }}
            </span>
          </div>
        </div>

        <!-- Cursor-Following Dual-Arc `btnHold` Reticle (`ci` in `Home.17c0ce45.js`) -->
        <div
          ref="reticleRef"
          class="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
        >
          <div
            class="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#c0fb50]/70 bg-black/75 shadow-[0_0_40px_rgba(192,251,80,0.28)] backdrop-blur-md transition-transform duration-150"
            :style="{ transform: `scale(${0.94 + holdProgress * 0.3})` }"
          >
            <!-- Side Triangles `aL` and `aR` -->
            <span
              class="absolute -left-3 text-[9px] text-[#c0fb50]"
              :style="{ transform: `translateX(${holdProgress * 6}px)` }"
            >
              ▶
            </span>
            <span
              class="absolute -right-3 text-[9px] text-[#c0fb50]"
              :style="{ transform: `translateX(${-holdProgress * 6}px)` }"
            >
              ◀
            </span>

            <!-- Dual Progress Arcs `c1` and `c2` -->
            <svg
              class="absolute inset-0 h-full w-full -rotate-90"
              viewBox="0 0 112 112"
            >
              <circle
                cx="56"
                cy="56"
                r="48"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                stroke-width="1.5"
                stroke-dasharray="6 4"
              />
              <circle
                cx="56"
                cy="56"
                r="40"
                fill="none"
                stroke="rgba(150,138,223,0.35)"
                stroke-width="1"
                stroke-dasharray="16 10"
              />
              <circle
                cx="56"
                cy="56"
                r="48"
                fill="none"
                stroke="#c0fb50"
                stroke-width="3"
                :stroke-dasharray="301.6"
                :stroke-dashoffset="301.6 * (1 - holdProgress)"
                stroke-linecap="square"
              />
            </svg>

            <div class="flex flex-col items-center text-center font-mono">
              <span class="text-[8px] uppercase text-[#c0fb50]">
                {{ holding ? 'HOLD' : 'MANTENÉ' }}
              </span>
              <span class="mt-0.5 text-[10px] font-bold uppercase text-white">
                {{ holding ? `${Math.round(holdProgress * 100)}%` : 'CLICK & HOLD' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Bottom-Right Direct Action Button (`data-kpr-cta`) -->
        <div
          data-kpr-cta
          class="pointer-events-auto absolute bottom-5 right-6 z-30 flex items-center gap-3"
          @pointerdown.stop
          @pointerup.stop
        >
          <span class="hidden font-mono text-[9px] text-white/60 sm:inline">
            FLUJO 0{{ (flowIdx % spec.flows.length) + 1 }} / 0{{ spec.flows.length }}
          </span>
          <KprBtnMain
            :label="spec.ctaLabel"
            :to="spec.ctaTo"
            variant="green"
            :corners="['tl', 'br']"
            :cut-size="10"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const props = defineProps({
  spec: { type: Object, required: true },
  index: { type: Number, default: 1 },
})

const POSITION_CLASSES = {
  'top-left': 'left-14 top-16 md:left-24 md:top-20',
  'top-right': 'right-6 top-16 md:right-14 md:top-20',
  'mid-left': 'left-14 top-1/2 -translate-y-1/2 md:left-24',
  'mid-right': 'right-6 top-1/2 -translate-y-1/2 md:right-14',
  'bottom-left': 'bottom-20 left-14 md:bottom-24 md:left-24',
  'bottom-right': 'bottom-20 right-6 md:bottom-24 md:right-14',
}

const sectionRef = ref(null)
const card3DRef = ref(null)
const bgPlateRef = ref(null)
const reticleRef = ref(null)
const pulseRef = ref(null)
const threeCanvasRef = ref(null)

const holding = ref(false)
const holdProgress = ref(0)
const flowIdx = ref(0)
const tableauVideoY = ref(20)

const { isHoldingTableau } = useKprState()
const { playHoldStart, playHoldRelease, playTableauTransition } = useKprAudio()

let rafId = null
let startTime = null
let holdVal = 0
let scrollCtx = null
let tickFn = null

// Three.js variables
let threeRenderer = null
let threeScene = null
let threeCamera = null
let threeModelGroup = null
let threeRing1 = null
let threeRing2 = null
let threeOrbitPackets = []
let threeGlbRoot = null
let threeDracoLoader = null
let resizeHandler = null

const cursorState = {
  inside: false,
  nx: 0,
  ny: 0,
  tx: 0,
  ty: 0,
  cx: 0,
  cy: 0,
  initialized: false,
}

const currentFlow = computed(() => {
  const flows = props.spec.flows || []
  return flows[flowIdx.value % flows.length] || flows[0]
})

const secondLayer = computed(() => holding.value || holdProgress.value > 0.04)

function getLayerStyle(idx) {
  const threshold = idx * 0.11
  const alpha = secondLayer.value
    ? Math.max(0, Math.min(1, (holdProgress.value - threshold) * 2.6))
    : 0
  return {
    opacity: alpha,
    transform: `translate3d(0, ${(1 - alpha) * 14}px, 0)`,
  }
}

function stopRaf() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = null
}

function stepHold(now) {
  if (startTime === null) return
  const raw = Math.min(1, (now - startTime) / 880)
  const eased = 1 - Math.pow(1 - raw, 2.2)
  holdVal = eased
  holdProgress.value = eased
  if (raw < 1) {
    rafId = requestAnimationFrame(stepHold)
  }
}

function onPointerDown(e) {
  if (e.button !== 0) return
  if (e.target?.closest?.('[data-kpr-cta]')) return
  const r = e.currentTarget.getBoundingClientRect()
  cursorState.inside = true
  cursorState.tx = e.clientX - r.left
  cursorState.ty = e.clientY - r.top

  stopRaf()
  holding.value = true
  isHoldingTableau.value = true
  playHoldStart(props.index)
  startTime = performance.now()
  rafId = requestAnimationFrame(stepHold)
}

function onPointerUp() {
  if (!holding.value && holdVal <= 0.01) return
  stopRaf()
  startTime = null
  holding.value = false
  isHoldingTableau.value = false
  flowIdx.value = (flowIdx.value + 1) % (props.spec.flows?.length || 1)
  playHoldRelease()

  const from = holdVal
  const t0 = performance.now()
  const releaseStep = (now) => {
    const t = Math.min(1, (now - t0) / 220)
    const v = from * (1 - t)
    holdVal = v
    holdProgress.value = v
    if (t < 1) rafId = requestAnimationFrame(releaseStep)
  }
  rafId = requestAnimationFrame(releaseStep)
}

function onPointerMove(e) {
  const r = e.currentTarget.getBoundingClientRect()
  const localX = e.clientX - r.left
  const localY = e.clientY - r.top
  const nx = (localX / Math.max(1, r.width) - 0.5) * 2
  const ny = (localY / Math.max(1, r.height) - 0.5) * 2

  const padX = Math.min(90, r.width * 0.12)
  const padY = Math.min(80, r.height * 0.12)
  cursorState.inside = true
  cursorState.nx = nx
  cursorState.ny = ny
  cursorState.tx = Math.max(padX, Math.min(r.width - padX, localX))
  cursorState.ty = Math.max(padY, Math.min(r.height - padY, localY))
}

function onPointerLeave() {
  cursorState.inside = false
  onPointerUp()
}

function addPanelEdges(mesh, geo, color) {
  mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color })))
}

function fitObjectToSize(object, targetSize = 2.2) {
  const box = new THREE.Box3().setFromObject(object)
  const size = new THREE.Vector3()
  box.getSize(size)
  const maxDim = Math.max(size.x, size.y, size.z, 0.001)
  object.scale.multiplyScalar(targetSize / maxDim)
  const box2 = new THREE.Box3().setFromObject(object)
  const center = new THREE.Vector3()
  box2.getCenter(center)
  object.position.sub(center)
}

/** Soft hologram: translucent accent fill + edge lines (no toy glow/flicker). */
function applyHoloLook(root, accent = '#c0fb50', secondary = '#968adf') {
  const a = new THREE.Color(accent)
  const b = new THREE.Color(secondary)
  let i = 0
  root.traverse((obj) => {
    if (!obj.isMesh || !obj.geometry) return
    const col = i++ % 2 === 0 ? a : b
    if (obj.material && !Array.isArray(obj.material)) obj.material.dispose?.()
    obj.material = new THREE.MeshBasicMaterial({
      color: col,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(obj.geometry, 28),
      new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.72 })
    )
    obj.add(edges)
  })
}

function loadHoldGlb(url, { accent, secondary, targetSize }, onDone) {
  if (!url) {
    onDone(null)
    return
  }
  if (!threeDracoLoader) {
    threeDracoLoader = new DRACOLoader()
    threeDracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
  }
  const loader = new GLTFLoader()
  loader.setDRACOLoader(threeDracoLoader)
  loader.load(
    url,
    (gltf) => {
      const model = gltf.scene
      applyHoloLook(model, accent, secondary)
      fitObjectToSize(model, targetSize)
      onDone(model)
    },
    undefined,
    (err) => {
      console.warn('[KprHoldTableau] GLB load failed', url, err)
      onDone(null)
    }
  )
}

function addOrbitDecor(lime, purple, ringRadius = 1.55, packetCount = 5) {
  const ring1Geo = new THREE.TorusGeometry(ringRadius, 0.018, 12, 64)
  threeRing1 = new THREE.Mesh(
    ring1Geo,
    new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.55 })
  )
  threeRing1.rotation.x = Math.PI * 0.5
  threeModelGroup.add(threeRing1)

  const ring2Geo = new THREE.TorusGeometry(ringRadius + 0.28, 0.014, 12, 64)
  threeRing2 = new THREE.Mesh(
    ring2Geo,
    new THREE.MeshBasicMaterial({ color: purple, transparent: true, opacity: 0.4 })
  )
  threeRing2.rotation.x = Math.PI * 0.42
  threeModelGroup.add(threeRing2)

  const packetGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08)
  for (let i = 0; i < packetCount; i++) {
    const pMesh = new THREE.Mesh(
      packetGeo,
      new THREE.MeshBasicMaterial({ color: i % 2 ? lime : purple, transparent: true, opacity: 0.7 })
    )
    threeModelGroup.add(pMesh)
    threeOrbitPackets.push({
      mesh: pMesh,
      angle: (i / packetCount) * Math.PI * 2,
      radius: ringRadius + 0.45,
      speed: 0.7 + i * 0.1,
    })
  }
}

function buildProceduralDataCore(lime, purple) {
  const panelMat = new THREE.MeshStandardMaterial({
    color: 0x0c0918,
    metalness: 0.85,
    roughness: 0.28,
  })
  const layers = [
    { y: -0.55, w: 1.55, h: 0.95, d: 0.1, edge: lime },
    { y: 0.0, w: 1.7, h: 1.05, d: 0.12, edge: purple },
    { y: 0.58, w: 1.85, h: 1.15, d: 0.14, edge: lime },
  ]
  layers.forEach((s) => {
    const geo = new THREE.BoxGeometry(s.w, s.h, s.d)
    const mesh = new THREE.Mesh(geo, panelMat)
    mesh.position.set(0, s.y, 0)
    mesh.rotation.x = -0.12
    addPanelEdges(mesh, geo, s.edge)
    const heights = [0.42, 0.68, 0.5, 0.82, 0.58]
    for (let i = 0; i < 5; i++) {
      const barGeo = new THREE.BoxGeometry(0.12, heights[i], 0.04)
      const bar = new THREE.Mesh(
        barGeo,
        new THREE.MeshBasicMaterial({ color: i % 2 ? lime : purple })
      )
      bar.position.set(-0.45 + i * 0.22, -0.35 + heights[i] / 2, s.d / 2 + 0.03)
      mesh.add(bar)
    }
    threeModelGroup.add(mesh)
  })
  const spineGeo = new THREE.BoxGeometry(0.06, 1.55, 0.06)
  const spine = new THREE.Mesh(spineGeo, new THREE.MeshBasicMaterial({ color: lime, wireframe: true }))
  spine.position.x = -1.05
  threeModelGroup.add(spine)
}

/** Institutional BI stack: origen → modelo → tablero + anillo RLS */
function buildDataCore() {
  threeModelGroup = new THREE.Group()
  const lime = 0xc0fb50
  const purple = 0x968adf
  const modelUrl = props.spec.modelUrl
  if (modelUrl) {
    loadHoldGlb(
      modelUrl,
      { accent: '#c0fb50', secondary: '#968adf', targetSize: 2.35 },
      (model) => {
        if (!threeModelGroup) return
        // No procedural fallback — never show the old cube mockups
        if (model) {
          threeGlbRoot = model
          threeModelGroup.add(model)
        }
      }
    )
  }

  threeScene.add(threeModelGroup)
}

function buildProceduralAgTech(lime, purple) {
  const dark = new THREE.MeshStandardMaterial({
    color: 0x120e22,
    metalness: 0.8,
    roughness: 0.35,
  })
  const mapGeo = new THREE.PlaneGeometry(2.6, 1.7, 8, 5)
  const mapMat = new THREE.MeshStandardMaterial({
    color: 0x0a1a12,
    metalness: 0.3,
    roughness: 0.7,
    side: THREE.DoubleSide,
  })
  const map = new THREE.Mesh(mapGeo, mapMat)
  map.rotation.x = -Math.PI * 0.42
  map.position.y = -0.55
  addPanelEdges(map, mapGeo, purple)
  threeModelGroup.add(map)

  const gridHelper = new THREE.GridHelper(2.4, 6, purple, 0x1a4030)
  gridHelper.position.y = -0.52
  threeModelGroup.add(gridHelper)

  const phoneGeo = new THREE.BoxGeometry(0.55, 1.05, 0.08)
  const phone = new THREE.Mesh(phoneGeo, dark)
  phone.position.set(-0.95, 0.15, 0.55)
  phone.rotation.y = 0.35
  phone.rotation.x = -0.15
  addPanelEdges(phone, phoneGeo, lime)
  const screenGeo = new THREE.BoxGeometry(0.42, 0.78, 0.02)
  const screen = new THREE.Mesh(screenGeo, new THREE.MeshBasicMaterial({ color: 0x1a3a22 }))
  screen.position.z = 0.05
  phone.add(screen)
  threeModelGroup.add(phone)

  ;[
    { x: 0.15, y: 0.45, z: 0.4, color: lime, w: 0.7 },
    { x: 0.55, y: 0.05, z: 0.55, color: purple, w: 0.55 },
    { x: 0.95, y: -0.3, z: 0.35, color: lime, w: 0.65 },
  ].forEach((p) => {
    const geo = new THREE.BoxGeometry(p.w, 0.28, 0.06)
    const mesh = new THREE.Mesh(geo, dark)
    mesh.position.set(p.x, p.y, p.z)
    mesh.rotation.y = -0.4
    addPanelEdges(mesh, geo, p.color)
    threeModelGroup.add(mesh)
  })
}

/** Agronys suite: GLB cattle (holo) or procedural phone + map */
function buildAgTechField() {
  threeModelGroup = new THREE.Group()
  const lime = 0xc0fb50
  const purple = 0x968adf
  const modelUrl = props.spec.modelUrl
  if (modelUrl) {
    loadHoldGlb(
      modelUrl,
      { accent: '#968adf', secondary: '#c0fb50', targetSize: 2.1 },
      (model) => {
        if (!threeModelGroup) return
        // No procedural fallback — never show the old cube/phone mockups
        if (model) {
          threeGlbRoot = model
          threeModelGroup.add(model)
        }
      }
    )
  }

  threeScene.add(threeModelGroup)
}

function updateThreeSize() {
  const canvas = threeCanvasRef.value
  if (!canvas || !threeRenderer || !threeCamera) return
  const w = canvas.clientWidth || window.innerWidth
  const h = canvas.clientHeight || window.innerHeight
  threeCamera.aspect = w / Math.max(1, h)
  threeCamera.updateProjectionMatrix()
  threeRenderer.setSize(w, h, false)
}

function initThree() {
  if (!props.spec.modelUrl) return
  const canvas = threeCanvasRef.value
  if (!canvas) return

  threeRenderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  })
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

  threeScene = new THREE.Scene()
  threeCamera = new THREE.PerspectiveCamera(40, 1, 0.1, 50)
  threeCamera.position.set(0, 0, 5.6)

  const amb = new THREE.AmbientLight(0xffffff, 0.95)
  threeScene.add(amb)

  const pLight1 = new THREE.PointLight(0xc0fb50, 3.2, 16)
  pLight1.position.set(2.5, 3, 4)
  threeScene.add(pLight1)

  const pLight2 = new THREE.PointLight(0x968adf, 2.6, 16)
  pLight2.position.set(-2.5, -2, 3)
  threeScene.add(pLight2)

  if (props.spec.id === 'keep') {
    buildDataCore()
  } else {
    buildAgTechField()
  }

  updateThreeSize()
  resizeHandler = () => updateThreeSize()
  window.addEventListener('resize', resizeHandler)
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  initThree()

  // 1. 60fps cursor-following reticle + 2.5D background plate parallax + Three.js render
  tickFn = () => {
    const card = card3DRef.value
    const reticle = reticleRef.value
    const plate = bgPlateRef.value
    if (!card || !reticle || !plate) return

    const r = card.getBoundingClientRect()
    if (!cursorState.initialized && r.width > 0 && r.height > 0) {
      cursorState.tx = r.width * 0.5
      cursorState.ty = r.height * 0.46
      cursorState.cx = cursorState.tx
      cursorState.cy = cursorState.ty
      cursorState.initialized = true
    }

    if (!cursorState.inside && r.width > 0 && r.height > 0) {
      const t = performance.now() * 0.0015
      cursorState.tx = r.width * 0.5 + Math.cos(t) * 22
      cursorState.ty = r.height * 0.46 + Math.sin(t * 1.3) * 14
      cursorState.nx *= 0.92
      cursorState.ny *= 0.92
    }

    cursorState.cx += (cursorState.tx - cursorState.cx) * 0.18
    cursorState.cy += (cursorState.ty - cursorState.cy) * 0.18

    reticle.style.transform = `translate3d(${cursorState.cx.toFixed(1)}px, ${cursorState.cy.toFixed(1)}px, 0) translate(-50%, -50%)`

    const px = -cursorState.nx * (22 + holdVal * 24)
    const py = -cursorState.ny * (16 + holdVal * 18)
    const scale = 1.06 + holdVal * 0.16
    plate.style.transform = `translate3d(${px.toFixed(1)}px, ${py.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`

    // Smooth scroll-driven vertical pan across the 9:16 background video
    const secEl = sectionRef.value
    if (secEl) {
      const rSec = secEl.getBoundingClientRect()
      const totalScrollable = rSec.height - window.innerHeight
      if (totalScrollable > 0) {
        const p = Math.max(0, Math.min(1, -rSec.top / totalScrollable))
        tableauVideoY.value = Math.round(15 + p * 65 + holdVal * 10)
      }
    }

    // Three.js Render & Smooth 3D Rotation Animation
    if (threeRenderer && threeScene && threeCamera && threeModelGroup) {
      const t = performance.now() * 0.001

      // Slow turn — no frantic orbit
      const spin = 0.12 + holdVal * 0.18
      threeModelGroup.rotation.y = t * spin + cursorState.nx * 0.18
      threeModelGroup.rotation.x = -cursorState.ny * 0.12 + Math.sin(t * 0.35) * 0.03
      threeModelGroup.rotation.z = 0

      if (threeRing1) threeRing1.rotation.z += 0.004
      if (threeRing2) threeRing2.rotation.z += 0.003

      threeOrbitPackets.forEach((p) => {
        p.angle += 0.008 * p.speed
        p.mesh.position.x = Math.cos(p.angle) * p.radius
        p.mesh.position.z = Math.sin(p.angle) * p.radius
        p.mesh.position.y = Math.sin(p.angle * 2) * 0.12
      })

      const targetScale = (1 + holdVal * 0.12) * (secondLayer.value ? 0.96 : 1)
      threeModelGroup.scale.setScalar(targetScale)

      threeRenderer.render(threeScene, threeCamera)
    }
  }

  gsap.ticker.add(tickFn)

  // 2. 3-Phase 3D Scroll Choreography (`pIn` -> `ACTIVE` -> `pOut`)
  const sec = sectionRef.value
  const card3D = card3DRef.value
  const pulse = pulseRef.value
  if (sec && card3D) {
    scrollCtx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.35,
          invalidateOnRefresh: true,
          onEnter: () => playTableauTransition(props.index),
        },
      })

      tl.fromTo(
        card3D,
        {
          yPercent: 28,
          scale: 0.82,
          rotateX: 18,
          rotateY: -10,
        },
        {
          yPercent: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out',
        },
        0
      )
        .to(
          card3D,
          {
            yPercent: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 0.42,
            ease: 'none',
          },
          0.3
        )
        .to(
          card3D,
          {
            yPercent: -24,
            scale: 0.86,
            rotateX: -14,
            rotateY: 8,
            duration: 0.28,
            ease: 'power2.in',
          },
          0.72
        )

      if (pulse) {
        tl.fromTo(
          pulse,
          { xPercent: -120, opacity: 0.85 },
          { xPercent: 140, opacity: 0, duration: 0.38, ease: 'power2.out' },
          0.04
        )
      }
    }, sec)
  }
})

onBeforeUnmount(() => {
  stopRaf()
  isHoldingTableau.value = false
  if (tickFn) gsap.ticker.remove(tickFn)
  if (scrollCtx) scrollCtx.revert()
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  if (threeModelGroup && threeScene) {
    threeScene.remove(threeModelGroup)
    threeModelGroup.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose?.()
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.())
        else obj.material.dispose?.()
      }
    })
  }
  threeModelGroup = null
  threeGlbRoot = null
  threeRing1 = null
  threeRing2 = null
  threeOrbitPackets = []
  if (threeDracoLoader) {
    threeDracoLoader.dispose()
    threeDracoLoader = null
  }
  if (threeRenderer) {
    threeRenderer.dispose()
    threeRenderer = null
  }
  threeScene = null
  threeCamera = null
})
</script>

<style scoped>
</style>

