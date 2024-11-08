<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Video de fondo -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="../../assets/video/weddings.mp4" type="video/mp4" />
      Tu navegador no soporta videos en HTML5.
    </video>

    <!-- Texto sobre el video, centrado en la pantalla -->
    <div class="absolute inset-0 grid place-items-center z-10">
      <div class="text-center">
        <h1 class="font-garamond italic text-white text-8xl leading-none">
          BOUTIQUE <br />
          TAILOR-MADE
        </h1>
        <h2 class="font-garamond italic text-white text-5xl tracking-widest leading-loose">
          EXPERIENCES
        </h2>
        <div class="absolute top-[80%] left-1/2 transform -translate-x-1/2 grid grid-cols-5 gap-4 mt-8 z-10">
          <aside class="font-garamond italic text-white text-3xl">Wedding</aside>
          <aside class="font-garamond italic text-white text-3xl">Creating</aside>
          <aside class="font-garamond italic text-white text-3xl">Dream</aside>
          <aside class="font-garamond italic text-white text-3xl">Unique</aside>
          <aside class="font-garamond italic text-white text-3xl">Tailor Made</aside>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
// No se requiere lógica adicional en el script para este componente
</script>

<style scoped>
/* Tailwind CSS maneja los estilos */
</style>
