<template>
  <div class="min-h-screen projects-bg">
    <div ref="projectsSection" class="container mx-auto p-4 pt-20">
      <div class="flex flex-col lg:flex-row justify-around mb-5 text-center lg:text-left">
        <h2 ref="projectsTitle">Projects</h2>
        <div class="flex gap-6 projectFilter mx-auto lg:mx-0">
          <button
              @click="showPersonal"
              :class="{ 'active-filter': personal }"
          >
            Personal
          </button>
          <button
              @click="showSchool"
              :class="{ 'active-filter': school }"
          >
            School
          </button>
        </div>

      </div>

      <div v-if="personal" class="flex flex-col justify-center perspective-container">
        <div
            v-for="project in personalProjects"
            :key="project.id"
            @click="goToProject(project.id)"
            class="cursor-pointer"
        >
          <img
              class="mx-auto w-full max-w-[70%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[60%] xl:max-w-[60%] rounded-lg drop-shadow-xl"
              :src="project.photo"
              :alt="`Screenshot of ${project.title}`"
          />
          <p class="text-center text-white mt-2 text-xl">{{ project.title }}</p>
        </div>
        <h3 class="text-center opacity-60 my-10">More coming soon...</h3>
      </div>

      <div v-if="school" class="flex flex-col gap-12 justify-center perspective-container">
        <div
            v-for="project in schoolProjects"
            :key="project.id"
            @click="goToProject(project.id)"
            class="cursor-pointer"
        >
          <img
              class="mx-auto w-full max-w-[70%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[60%] xl:max-w-[60%] rounded-lg drop-shadow-xl"
              :src="project.photo"
              :alt="`Screenshot of ${project.title}`"
          />
          <p class="text-center text-white mt-2 text-xl">{{ project.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const projectsSection = ref(null)
const projectsTitle = ref(null)

const personal = ref(true)
const school = ref(false)

const showPersonal = () => {
  personal.value = true
  school.value = false
}

const showSchool = () => {
  personal.value = false
  school.value = true
}

const projects = [
  {
    id: 'petal-thorn',
    category: 'personal',
    title: 'Petal & Thorn',
    photo: new URL('../assets/thorns.PNG', import.meta.url).href,
    description: 'An elegant floral shop website...',
    video: new URL('../assets/roses.mp4', import.meta.url).href
  },
  {
    id: 'indieradar',
    category: 'school',
    title: 'IndieRadar',
    photo: new URL('../assets/Afbeelding1.png', import.meta.url).href,
    description: 'A platform to discover indie games...',
    video: new URL('../assets/indie.mp4', import.meta.url).href
  },
  {
    id: 'pxl-cfs',
    category: 'school',
    title: 'PXL Cyberphysical Engineering',
    photo: new URL('../assets/cfs.PNG', import.meta.url).href,
    description: 'Educational platform for cyber-physical systems...',
  },
  {
    id: 'finventory',
    category: 'school',
    title: 'Finventory',
    photo: new URL('../assets/fin.jpg', import.meta.url).href,
    description: 'Educational platform for cyber-physical systems...',
    video: new URL('../assets/finventory.mp4', import.meta.url).href
  }
]

const personalProjects = projects.filter(p => p.category === 'personal')
const schoolProjects = projects.filter(p => p.category === 'school')

const goToProject = (id) => {
  router.push({ name: 'ProjectDetail', params: { id } })
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
  filter: none;
}

img:hover {
  filter: drop-shadow(0 0 0.75rem white);
  cursor: pointer;
}

.active-filter, .projectFilter button:hover {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

</style>