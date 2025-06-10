<template>
  <div ref="about" class="relative h-screen overflow-hidden flex flex-col justify-center items-center about-bg">
    <h2 class="text-white text-5xl font-bold mb-10 z-10">Skills</h2>

    <div class="w-full overflow-hidden marquee">
      <div class="marquee-content">
        <div class="marquee-track">
          <div class="skill-group" v-for="n in 2" :key="n">
            <div class="flex items-center gap-20">
              <div class="flex items-center gap-4">
                <i class="devicon-vuejs-plain text-5xl"></i><span class="text-2xl font-bold text-white">Vue</span>
              </div>
              <div class="flex items-center gap-4">
                <i class="devicon-html5-plain text-5xl"></i><span class="text-2xl font-bold text-white">HTML</span>
              </div>
              <div class="flex items-center gap-4">
                <i class="devicon-css3-plain text-5xl"></i><span class="text-2xl font-bold text-white">CSS</span>
              </div>
              <div class="flex items-center gap-4">
                <i class="devicon-javascript-plain text-5xl"></i>
                <span class="text-2xl font-bold text-white">JavaScript</span>
              </div>

              <div class="flex items-center gap-4">
                <i class="devicon-tailwindcss-plain text-5xl"></i><span class="text-2xl font-bold text-white">Tailwind</span>
              </div>
              <div class="flex items-center gap-4">
                <i class="devicon-react-original text-5xl"></i><span class="text-2xl font-bold text-white">React Native</span>
              </div>
              <div class="flex items-center gap-4">
                <i class="devicon-figma-plain text-5xl"></i><span class="text-2xl font-bold text-white">Figma</span>
              </div>
              <div class="flex items-center gap-4">
                <i class="devicon-photoshop-plain text-5xl"></i><span class="text-2xl font-bold text-white">Photoshop</span>
              </div>
              <div class="flex items-center gap-4">
                <i class="devicon-aftereffects-plain text-5xl"></i><span class="text-2xl font-bold text-white">After Effects</span>
              </div>
              <div class="flex items-center gap-4">
                <i class="devicon-wordpress-plain text-5xl"></i><span class="text-2xl font-bold text-white">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.about-bg {
  background-color: #01010A;
}

.marquee {
  background-color: #0A0A1A;
  border-top: 5px solid #FF1493;
  border-bottom: 5px solid #FF1493;
  padding: 100px 0;
  position: relative;
}

.marquee-content {
  width: 100%;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: fit-content;
  animation: scroll-left 20s linear infinite;
}

.skill-group {
  display: flex;
  gap: 16px;
  padding-right: 64px;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
