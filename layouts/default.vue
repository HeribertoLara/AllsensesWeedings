<!-- layouts/default.vue -->
<template>
  <div>
    <Header /> 
    <main>
      <NuxtPage /> 
    </main>
    <Footer /> 
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
</script>

<style scoped>

</style>
