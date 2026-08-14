<template>
  <canvas ref="el" class="pointer-events-none fixed inset-0 -z-10 h-full w-full" aria-hidden="true"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const el = ref(null)
let raf = 0
let onResize = () => {}
let onMove = () => {}

onMounted(() => {
  const canvas = el.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const mouse = { x: -9999, y: -9999 }
  let w = 0
  let h = 0
  let nodes = []

  onResize = () => {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
    const n = Math.min(88, Math.floor((w * h) / 18000))
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
    }))
  }

  onMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  const tick = () => {
    ctx.fillStyle = '#030712'
    ctx.fillRect(0, 0, w, h)

    const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 280)
    g.addColorStop(0, 'rgba(34, 211, 238, 0.07)')
    g.addColorStop(1, 'rgba(3, 7, 18, 0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)

    for (const a of nodes) {
      a.x += a.vx
      a.y += a.vy
      if (a.x < 0 || a.x > w) a.vx *= -1
      if (a.y < 0 || a.y > h) a.vy *= -1
      const dx = a.x - mouse.x
      const dy = a.y - mouse.y
      const d2 = dx * dx + dy * dy
      if (d2 < 22000) {
        a.vx -= dx * 0.00003
        a.vy -= dy * 0.00003
      }
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dist = Math.hypot(dx, dy)
        if (dist < 140) {
          ctx.strokeStyle = `rgba(103, 232, 249, ${0.18 * (1 - dist / 140)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.stroke()
        }
      }
    }
    for (const a of nodes) {
      ctx.fillStyle = '#a5f3fc'
      ctx.beginPath()
      ctx.arc(a.x, a.y, 1.7, 0, Math.PI * 2)
      ctx.fill()
    }
    raf = requestAnimationFrame(tick)
  }

  onResize()
  tick()
  window.addEventListener('resize', onResize)
  window.addEventListener('pointermove', onMove)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('pointermove', onMove)
})
</script>
