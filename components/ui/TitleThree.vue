<template> 
  <div class="custom-border pt-6">
    <h3 class="font-garamond italic font-semibold text-rose text-7xl tracking-wider">
      {{ title }}
    </h3>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
});
</script>
<style scoped>
.custom-border {
  position: relative;
  padding-top: 1.5rem;
}

.custom-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 12%; 
  height: 4px; 
  background-color: #B7656E; 
}

.custom-border::after {
  content: '';
  position: absolute;
  top: 0;
  left: 20%; 
  width: 80%; 
  height: 4px;
  background-color: #ffffff; 
}
</style>
