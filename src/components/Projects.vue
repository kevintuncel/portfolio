<template>
  <div class="h-screen projects-bg">
    <div ref="projectsSection" class="container mx-auto p-4 pt-20">
      <div class="flex justify-around mb-5">
      <h2 ref="projectsTitle">Projects</h2>
        <div class="flex gap-6">
          <button @click="showPersonal()">Personal</button>
          <button @click="showSchool()">School</button>
        </div>
      </div>
      <div v-show="personal" class="flex flex-col justify-center perspective-container">
        <div>
          <img
              ref="projectImage"
              class="mx-auto w-full max-w-[70%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[60%] xl:max-w-[60%] rounded-lg drop-shadow-xl"
              src="../assets/thorns.PNG"
              alt="screenshot of site 'petal & thorn'"
          />
          <p class="text-center text-white mt-2 text-xl">Petal & Thorn</p>
        </div>
      </div>
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
const projectImage = ref(null)

const personal = ref(true)
const school = ref(false)

function showPersonal() {
  personal.value = true
  school.value = false
}

function showSchool() {
  personal.value = false
  school.value = true
}

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


<style scoped>
.projects-bg {
  background-color: #E91E63;
}

.perspective-container {
  perspective: 1000px;
}

img {
  height: auto;
  display: block;
  transition: filter 0.5s;
  filter: none
}

img:hover {
  filter: drop-shadow(0 0 0.75rem white);
  cursor: pointer;
}
</style>
