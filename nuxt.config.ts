import en from './locales/en.json';
import es from './locales/es.json';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  
  googleFonts: {
    families: {  
      Lato: [400],  // Peso Regular
    },
  }, // This closing bracket was missing

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'es', file: 'es.json', name: 'Español' }
    ],
    defaultLocale: 'en',
    lazy: true, // Activa la carga perezosa de archivos de idioma
    langDir: 'locales/', // Ruta a la carpeta de archivos de idioma
  },

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
    configPath: '~/tailwind.config',
    exposeConfig: {
      level: 2,
    },
    viewer: true,
  },

  css: [
    /* '@/assets/styles/tailwinds/tailwind.css', */
    '@/assets/styles/main.css',     
  ],
});
