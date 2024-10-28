<!-- layouts/default.vue -->
<template>
  <div>
    <Header /> <!-- Componente de encabezado global -->
    <main>
      <NuxtPage /> <!-- Aquí se renderizará el contenido de cada página -->
    </main>
    <Footer /> <!-- Componente de pie de página global -->
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
</script>

<style scoped>
main {
  min-height: calc(100vh - 200px); /* Ajusta según la altura del header y footer */
  padding: 20px; /* Espaciado para el contenido principal */
}
</style>
