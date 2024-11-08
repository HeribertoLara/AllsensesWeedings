<template>
  <a @click="changeLanguage" class="header__lenguage inline-block w-12 mt-4 h-10  transition-transform duration-300 hover:scale-110 cursor-pointer">
    <!-- Cambia la imagen según el idioma -->
    <img :src="languageImage" alt="Language button" class="header__lenguage-img w-12 h-6">
  </a>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

// Importar las imágenes al principio
import langEng from '../../assets/images/lang-eng.svg'; // Imagen para el idioma inglés
import langEsp from '../../assets/images/lenguage.png'; // Imagen para el idioma español

// Usamos la función useI18n para acceder a la instancia de i18n
const { locale } = useI18n();

const changeLanguage = () => {
  // Cambia el idioma, por ejemplo, de 'en' a 'es'
  locale.value = locale.value === 'en' ? 'es' : 'en';
};

// Computed property para cambiar la imagen según el idioma
const languageImage = computed(() => {
  // Muestra la imagen en español cuando el idioma es inglés y viceversa
  return locale.value === 'en' ? langEsp : langEng;
});
</script>

<style scoped>
.header__lenguage {
  display: inline-block; /* Asegúrate de que el contenedor tenga ancho y alto */
}
</style>
