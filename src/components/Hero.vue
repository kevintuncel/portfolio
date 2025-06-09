<template>
  <div ref="hero" class="relative h-screen overflow-hidden flex flex-col text-center lg:text-left lg:flex-row items-center justify-around page-bg">
    <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover z-[-2]"
    >
      <source src="@/assets/12862645_1920_1080_30fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 bg-black/60 z-[-1]"></div>

    <div>
      <h1 class="text">Kevin Tuncel</h1>
      <h3 class="inter text">Front-End Web Developer</h3>
    </div>
    <div>
      <a
          class="text"
          href="@/assets/CV_KevinTuncel.pdf"
          download="CV_Kevin_Tuncel"
      >
        Download CV
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

const hero = ref(null)

onMounted(() => {
  const split = SplitText.create('.text', { type: 'words' })

  gsap.from(split.words, {
    y: 100,
    autoAlpha: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'power2.out',
  })

  ScrollTrigger.create({
    trigger: hero.value,
    start: 'top top',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    scrub: true,
  })
})
</script>


