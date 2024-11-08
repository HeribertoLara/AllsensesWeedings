<template> 
  <div class=" mt-24">
    <h4 class="font-sfpro semibold italic font-medium text-grayMedium text-4xl tracking-wide">
      {{ title }}
    </h4>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
});
</script>
<style scoped>

</style>
