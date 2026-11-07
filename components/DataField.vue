<template>
  <div class="site-atmosphere pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <!-- Subtle top ambient light wash -->
    <div class="absolute -top-[20%] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,255,0,0.04)_0%,rgba(14,165,233,0.025)_40%,transparent_70%)] blur-[120px]" />
    
    <!-- Micro dot-grid matrix (Linear / Vercel style) -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

    <!-- Soft corner vignette -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,5,8,0.7)_100%)]" />
  </div>
</template>
