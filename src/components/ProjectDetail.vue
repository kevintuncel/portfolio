<template>
  <div class="min-h-screen projects-bg text-center flex flex-col items-center">
    <div class="flex flex-col justify-center  md:justify-between gap-6 text-center mt-20 mb-5">
    <h1 class="text-4xl font-bold  text-white" ref="projectTitle">{{ project?.title }}</h1>
    <button
        @click="goToNextProject"
        class=" text-white  hover:bg-white/30 backdrop-blur-md font-semibold transition"
    >
      Next Project →
    </button>
    </div>
    <div class="flex flex-col lg:flex-row lg:text-left text-center gap-5 mb-5">
      <template v-if="project?.video">
        <video
            class="rounded-lg max-w-full max-h-[400px] drop-shadow-xl"
            :src="project.video"
            autoplay
            muted
            playsinline
            loop
            controls
        />
      </template>
      <template v-else-if="project?.photo">
        <img
            class="rounded-lg max-w-full max-h-[400px] drop-shadow-xl"
            :src="project.photo"
            alt="Project image"
        />
      </template>

<div class="flex flex-col justify-between">
      <p class="text-lg max-w-3xl text-white leading-relaxed mb-10 w-full lg:w-80">
        {{ project?.description }}
        <template v-if="project?.linkUrl">
          <a
              :href="project.linkUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="underline text-blue-200 hover:text-white transition"
          >
            {{ project.linkText }}
          </a>
        </template>
      </p>
      <p>{{project.category}}</p>
</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToNextProject = () => {
  const currentIndex = allProjects.findIndex(p => p.id === route.params.id)
  const nextIndex = (currentIndex + 1) % allProjects.length
  const nextProject = allProjects[nextIndex]
  router.push({ name: 'ProjectDetail', params: { id: nextProject.id } })
}


const route = useRoute()
const projectTitle = ref(null)

const allProjects = [
  {
    id: 'petal-thorn',
    title: 'Petal & Thorn',
    photo: new URL('../assets/thorns.PNG', import.meta.url).href,
    description: 'An elegant floral shop website that i created with Wordpress and Elementor. I experimented with videos and video backgrounds, as well as transparent interfaces.',
    video: new URL('../assets/roses.mp4', import.meta.url).href,
    category: 'Personal - Wordpress - Elementor + Animations',

  },
  {
    id: 'indieradar',
    title: 'IndieRadar',
    photo: new URL('../assets/Afbeelding1.png', import.meta.url).href,
    description: 'School project where i made a website to discover indie games using Wordpress and Elementor. Various elements like SEO, contact forms, newsletters, cookies,... are included.',
    video: new URL('../assets/indie.mp4', import.meta.url).href,
    category: 'School - Wordpress - Elementor',

  },
  {
    id: 'pxl-cfs',
    title: 'PXL Cyberphysical Engineering',
    photo: new URL('../assets/cfs.PNG', import.meta.url).href,
    description: "Contributed to this group assignment where we had to design and code a website for an actual client. I was the lead developer for the website, where i transferred my colleague's designs into code.",
    linkText: 'View the website here!',
    linkUrl: 'https://comfy-nougat-caa463.netlify.app/',
    category: 'School - HTML & CSS - Vue - Javascript',

  },
  {
    id: 'finventory',
    category: 'School - React Native',
    title: 'Finventory',
    photo: new URL('../assets/fin.jpg', import.meta.url).href,
    description: 'React Native app I made where you can catch and collect fish from Animal Crossing using the fanmade NookiPediaAPI. ',
    video: new URL('../assets/finventory.mp4', import.meta.url).href
  }

]

const project = computed(() =>
    allProjects.find(p => p.id === route.params.id)
)

onMounted(() => {
  if (projectTitle.value) {
    gsap.fromTo(
        projectTitle.value,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
  }
})
</script>

<style scoped>
.projects-bg {
  background-color: #E91E63;
}

video {
  box-shadow: none;
  transition: box-shadow 0.3s ease;
}

video:hover {
  box-shadow: 0 0 30px rgba(255 255 255 / 0.9);
}

p {
  color: white;
  margin-top: 1rem;
  font-weight: 500;
}

h1 {
  color: white;
}
</style>
