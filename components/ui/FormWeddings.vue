<template>
  <section class="text-center mt-24">
    <TitleSecondaryRose title="¡Tu amor es único, tu boda también!" />

    <div class="mt-12 px-24">
      <TextCenter
        text="Una boda de ensueño, hecha a medida para reflejar la belleza de su historia de amor. Nuestros diseñadores, expertos en convertir tus deseos en realidad, están listos para crear tu día perfecto."
      />

      <TitleFour title="¡Contáctanos y comencemos juntos esta travesía!" />

      <!-- Contenedor del formulario de HubSpot con clases de Tailwind CSS -->
      <div id="hubspotForm" class="bg-gray-300 p-6 rounded-lg"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import TitleSecondaryRose from './TitleSecondaryRose.vue';
import TextCenter from './TextCenter.vue';
import TitleFour from './TitleFour.vue';

const { locale } = useI18n();

const loadHubspotForm = (formId) => {
  const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');
  
  const hubspotFormContainer = document.getElementById('hubspotForm');
  if (hubspotFormContainer) hubspotFormContainer.innerHTML = '';

  const createForm = () => {
    window.hbspt.forms.create({
      portalId: '5943261',
      formId,
      target: '#hubspotForm',
      onFormReady: () => {
        const fieldsets = document.querySelectorAll('#hubspotForm .form-columns-1');
        fieldsets.forEach((fieldset) => {
          fieldset.classList.add('bg-gray-300', 'border-b-2', 'border-gray-500', 'p-4');
        });
      },
    });
  };

  if (existingScript) {
    if (window.hbspt) createForm();
  } else {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.onload = () => {
      if (window.hbspt) createForm();
    };
    document.body.appendChild(script);
  }
};

// Llama a loadHubspotForm con el formId correspondiente al montar
onMounted(() => {
  loadHubspotForm(locale.value === 'es' ? '2fb049a6-a74f-49bc-b39f-431f2c0f455e' : 'b8852722-2233-47be-be0c-4ad0a04eb941');
});

// Observa los cambios de idioma y actualiza el formulario
watch(locale, (newLocale) => {
  const formId = newLocale === 'es' ? '2fb049a6-a74f-49bc-b39f-431f2c0f455e' : 'b8852722-2233-47be-be0c-4ad0a04eb941';
  loadHubspotForm(formId);
});
</script>

<style scoped>

.hs-input{
  background-color: black !important;
}
</style>