<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <!-- Mensaje traducido -->
    <h1 class="text-4xl font-bold text-grayMedium">
      {{ t('helloMessage') }}
    </h1>

    <!-- Botón de cambio de idioma -->
    <div class="mt-4 space-x-4">
      <button 
        v-for="locale in availableLocales" 
        :key="locale" 
        @click="changeLocale(locale)"
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {{ locale.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

// Configuración del hook i18n
const { t, locale, availableLocales } = useI18n()

// Función para cambiar de idioma
const changeLocale = (newLocale: string) => {
  locale.value = newLocale
}
</script>

<style>
/* Puedes agregar estilos adicionales aquí si los necesitas */
</style>
