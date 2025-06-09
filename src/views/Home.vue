<template>
  <div class="h-screen snap-y snap-mandatory overflow-y-scroll">
    <section class="h-screen snap-start">
      <Hero />
    </section>
    <section class="h-screen snap-start">
      <About />
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import About from "@/components/About.vue";
</script>