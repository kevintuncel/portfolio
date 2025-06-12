<template>
  <div class="flex justify-between md:justify-around bg-transparent nav p-4">
    <router-link to="/contact" class="monospace text-sm hidden md:inline ">CONTACT</router-link>
    <router-link to="/" class="inter font-bold text-xl">KEVIN TUNCEL</router-link>
    <button class="monospace menu-button text-sm  " @click="toggleMenu">MENU</button>

    <div
        v-if="isVisible"
        ref="menu"
        class="fixed top-0 left-0 w-full h-full bg-[#2979FF] flex flex-col items-center justify-center text-white$ text-2xl z-50"
    >
      <button class="absolute top-5 right-5 text-white text-3xl font-bold" @click="closeMenu">&times;</button>
      <nav class="flex flex-col gap-6">
        <router-link class="menu-item" to="/" @click.native="closeMenu">Home</router-link>
        <router-link class="menu-item" to="/about" @click.native="closeMenu">About Me</router-link>
        <router-link class="menu-item" to="/contact" @click.native="closeMenu">Contact</router-link>
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

.menu-item {
  font-weight: bold;
  font-size: 5rem;
}

.menu-item:hover {
  text-decoration: underline;
}
</style>
