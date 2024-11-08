<template>
  <div class="text-center">
    <h2 class="font-garamond font-medium text-rose text-7xl tracking-widest uppercase">
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
});
</script>
