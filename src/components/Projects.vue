<template>
  <div  class="h-screen projects-bg">
    <div ref="projectsSection" class="container mx-auto p-4 pt-20">
      <h2 ref="projectsTitle">Projects</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectsSection = ref(null)
const projectsTitle = ref(null)

onMounted(() => {
  gsap.set(projectsSection.value, { opacity: 0, y: 50 })
  gsap.set(projectsTitle.value, { opacity: 0, y: 30 })

  gsap.to(projectsSection.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: projectsSection.value,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  })

  gsap.to(projectsTitle.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: projectsSection.value,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  })
})
</script>

<style>
.projects-bg {
  background-color: #E91E63;
}
</style>