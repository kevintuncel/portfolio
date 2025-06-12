<template>
  <div>
    <div ref="transitionOverlay" class="transition-overlay"></div>

    <Navbar />

    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const transitionOverlay = ref(null)
const router = useRouter()

onMounted(() => {
  gsap.set(transitionOverlay.value, { y: '100%' })
})

router.beforeEach((to, from, next) => {
  const overlay = transitionOverlay.value

  gsap.to(overlay, {
    y: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete: () => {
      next()

      gsap.to(overlay, {
        y: '-100%',
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(overlay, { y: '100%' })
        }
      })
    }
  })
})
</script>

<style scoped>
.transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #9C27B0;
  z-index: 9999;
  pointer-events: none;
}
</style>
