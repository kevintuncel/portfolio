<template>
  <div class="min-h-screen contactbg flex items-center justify-center text-white">
    <div class="container mx-auto p-4 text-center flex flex-col gap-6">
      <h1 class="">Get in touch.</h1>
      <h3 class="text-xl">
        You can send me an e-mail
        <a class="underline mail-link" href="mailto:kevintuncel@gmail.com">
          here
        </a>
      </h3>

      <div class="flex flex-col lg:flex-row text-center mx-auto items-center gap-4 text-base">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.684l1.518 4.555a1 1 0 01-.232.991l-1.164 1.165a16.013 16.013 0 006.364 6.364l1.165-1.164a1 1 0 01.99-.232l4.555 1.518a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
          </svg>
          <span>+32 468 17 88 02</span>
        </div>

        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 6h-9A2.5 2.5 0 005 8.5v7A2.5 2.5 0 007.5 18h9a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0016.5 6zM5.75 7.75l6.25 4.25 6.25-4.25" />
          </svg>
          <span>kevintuncel@gmail.com</span>
        </div>

        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.897 2-2s-.896-2-2-2-2 .897-2 2 .896 2 2 2zm0 10s6-4.686 6-10a6 6 0 00-12 0c0 5.314 6 10 6 10z" />
          </svg>
          <span>Oudsbergen - Limburg - Belgium</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contactbg {
  background-color: #F44336;
}

.mail-link:hover {
  color:#FFEB3B		 ;
}
</style>
