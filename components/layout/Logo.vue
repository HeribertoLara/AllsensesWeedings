<template>
  <!-- Usa router-link para que redirija a "/" al hacer clic en el logo -->
  <div to="/" class="inline-block w-36 cursor-pointer transform transition-transform duration-300 hover:scale-110">
    <img src="../../assets/images/AllSenseslogo.png" alt="Logo" class="logo-image">
  </div>
</template>

<script setup lang="ts">
// No se necesitan imports adicionales para este componente
</script>

<style scoped>
/* Estilos específicos para el logo si es necesario */
.logo-image {
  /* Opcional: Puedes ajustar el tamaño o agregar bordes si lo deseas */
  width: 100%;
  height: auto;
}
</style>
