<template>
  <header id="header__container" class="header__container  fixed top-0 left-0 w-full z-50 bg-white shadow-md px-24">
    <nav>
      <ul class="grid grid-cols-3 items-center">
        <li class="justify-self-start">
          <Contact v-if="isHome" />
          <HomeButton v-if="!isHome" />
        </li>

        <li class="justify-self-center">
          <Logo />
        </li>

        <li class="flex space-x-4 justify-self-end">
          <!-- Solo mostrar el componente Contact si la ruta actual no es la home o /es -->
          <Contact v-if="!isHome" />
          <Lenguage />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup >
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import HomeButton from './HomeButton.vue';
import Logo from './Logo.vue';
import Contact from './Contact.vue';
import Lenguage from './Lenguage.vue';

// Obtener la ruta actual
const route = useRoute();

// Verificar si la ruta actual es la home o /es
const isHome = computed(() => {
  return route.path === '/' || route.path === '/es'; // Considera ambas rutas
});
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>
