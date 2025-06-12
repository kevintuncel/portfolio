<template>
  <div class="flex justify-around bg-transparent nav p-4">
    <button class="monospace text-sm">CONTACT</button>
    <router-link to="/" class="inter font-bold text-xl">KEVIN TUNCEL</router-link>
    <button class="monospace menu-button text-sm" @click="toggleMenu">MENU</button>

    <div
        v-if="isVisible"
        ref="menu"
        class="fixed top-0 left-0 w-full h-full bg-[#FFEB3B] flex flex-col items-center justify-center text-white$ text-2xl z-50"
    >
      <button class="absolute top-5 right-5 text-white text-3xl font-bold" @click="closeMenu">&times;</button>
      <nav class="flex flex-col gap-6">
        <router-link to="/about" @click.native="closeMenu">About Me</router-link>
        <router-link to="/projects" @click.native="closeMenu">Projects</router-link>
        <router-link to="/contact" @click.native="closeMenu">Contact</router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { gsap } from 'gsap'

const menuOpen = ref(false)
const isVisible = ref(false)
const menu = ref(null)

const toggleMenu = () => {
  if (!menuOpen.value) {
    isVisible.value = true
  }
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

watch(menuOpen, async (open) => {
  if (open) {
    await nextTick()
    gsap.fromTo(
        menu.value,
        { y: '-100%' },
        { y: '0%', duration: 1, ease: 'power2.in' }
    )
  } else if (menu.value) {
    gsap.to(menu.value, {
      y: '-100%',
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        isVisible.value = false
      }
    })
  }
})
</script>

<style>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: transparent;

}
</style>
