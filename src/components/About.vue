<template>
  <div class="relative h-screen overflow-hidden flex items-center justify-around page-bg bg-black">
    <div>
      <h1 class="text">Kevin Tuncel</h1>
      <h3 class="inter text">Web Developer</h3>
    </div>
    <div>
      <a
          class="text"
          href="@/assets/CV_KevinTuncel.pdf"
          download="CV_Kevin_Tuncel"
      >Download CV</a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

onMounted(() => {
  const split = SplitText.create('.text', { type: 'words' })

  gsap.from(split.words, {
    y: 100,
    autoAlpha: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'power2.out',
  })
})
</script>