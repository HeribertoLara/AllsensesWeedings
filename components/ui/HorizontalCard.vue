<template>
  <div class="flex flex-col">
    <!-- Primera Card: imagen a la izquierda, texto a la derecha -->
    <figure class="grid grid-cols-7 gap-5 px-32 mt-24 items-center">
      <img src="@/assets/images/horizontal-card.png" alt="married" class="rounded-md w-full col-span-4">
      <figcaption class="col-span-3 py-32 pl-12">
        <TitleThree title="lorem ipsum" />
        <div class="mt-12">
          <CardDescription text="Tu perfecta historia de amor quedará enmarcada por el espectacular paisaje de las olas del mar como testigos atemporales de tu unión." />
          <div class="mt-10">
            <ButtonRose />
          </div>
        </div>
      </figcaption>
    </figure>

    <!-- Segunda Card: imagen a la derecha, texto a la izquierda -->
    <figure class="grid grid-cols-7 gap-5 px-32 items-center mt-12">
      <figcaption class="col-span-3 py-32 pr-12 text-left">
        <TitleThree title="lorem ipsum" />
        <div class="mt-12">
          <CardDescription text="Celebra tu historia de amor en un escenario único, rodeado de naturaleza y la inmensidad del mar como testigo de tu unión." />
          <div class="mt-10">
            <ButtonRose />
          </div>
        </div>
      </figcaption>
      <img src="@/assets/images/horizontal-card.png" alt="married" class="rounded-md w-full col-span-4">
    </figure>
  </div>
</template>

<script lang="ts" setup>
import TitleThree from './TitleThree.vue';
import CardDescription from './CardDescription.vue';
import ButtonRose from './ButtonRose.vue';
</script>
