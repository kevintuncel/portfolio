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
    <div class="cv">
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

<style>
.cv {
  animation: breath 2s ease-out infinite;
}

.cv:hover {
  animation: none;
}

@-webkit-keyframes breath {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes breath {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}
</style>


