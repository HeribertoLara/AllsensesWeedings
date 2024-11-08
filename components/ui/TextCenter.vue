<template>
  <!-- AGREGA UN PADDING   PARA DARLE ESPACIO  -->
    <p class="font-sfpro
     text-3xl italic  text-lightGray text-card ">
      {{ text }}
    </p>
    

</template>

<script setup>
const props = defineProps({
  text: String
});

</script>

<style>
.text-card{
  font-weight: 100;

}

</style>