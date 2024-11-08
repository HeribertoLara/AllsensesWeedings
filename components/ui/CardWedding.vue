<template>
  <!-- agregue mx aqui -->
  <div class="grid grid-cols-4 gap-1 justify-items-center mt-12 mx-24">
    <!-- Tarjeta 1 -->
    <figure class="image-container">
      <img
        src="../../assets/images/rooftop-desk.png"
        alt="Rooftop Weddings"
        class="image"
      />
      <figcaption class="figcaption-hidden flex items-center justify-center absolute bottom-16 left-0 right-0">
        <NuxtLink
          to="/newpage"
          class="text-white uppercase font-garamond responsive-text text-2xl"
        >
          view more
        </NuxtLink>
      </figcaption>
    </figure>

    <!-- Tarjeta 2 -->
    <figure class="image-container">
      <img
        src="../../assets/images/playa.png"
        alt="Beach Wedding"
        class="image"
      />
      <figcaption class="figcaption-hidden flex items-center justify-center absolute bottom-16 left-0 right-0">
        <NuxtLink
          to="/newpage"
          class="text-white uppercase font-garamond responsive-text text-2xl"
        >
          view more
        </NuxtLink>
      </figcaption>
    </figure>

    <!-- Tarjeta 3 -->
    <figure class="image-container">
      <img
        src="../../assets/images/penthouse-desk.png"
        alt="penthouse wedding"
        class="image"
      />
      <figcaption class="figcaption-hidden flex items-center justify-center absolute bottom-16 left-0 right-0">
        <NuxtLink
          to="/newpage"
          class="text-white uppercase font-garamond responsive-text text-2xl"
        >
          view more
        </NuxtLink>
      </figcaption>
    </figure>

    <!-- Tarjeta 4 -->
    <figure class="image-container">
      <img
        src="../../assets/images/lobby-desk.png"
        alt="Lobby wedding"
        class="image"
      />
      <figcaption class="figcaption-hidden flex items-center justify-center absolute bottom-16 left-0 right-0">
        <NuxtLink
          to="/newpage"
          class="text-white uppercase font-garamond responsive-text text-2xl"
        >
          view more
        </NuxtLink>
      </figcaption>
    </figure>
  </div>
</template>


<script setup>
</script>

<style scoped>
.image-container {
  position: relative;
  width: calc(90% - 1rem); 
  height: auto; 
  overflow: hidden;
  border-radius: 0.5rem;
  

  /* Media Query para pantallas más pequeñas */
  @media (max-width: 1024px) { 
    width: calc(50% - 1rem); 
  }

  /* Media Query para pantallas aún más pequeñas */
  @media (max-width: 640px) { 
    width: calc(100% - 1rem); 
  }
}

.image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.image-container:hover .image {
  filter: blur(2px) brightness(0.9);
  transform: scale(1.07);
  cursor: pointer;
}

.figcaption-hidden {
  opacity: 0;
  transition: opacity 0.3s ease;
}



.image-container:hover .figcaption-hidden {
  opacity: 1;
}
</style>
