import en from './locales/en.json';
import es from './locales/es.json';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  
  googleFonts: {
    download: false,
    families: {
      'Open+Sans': [100, 300, 400, 600, 700, 800],
      Lato: [100, 300, 400, 600, 700, 800],
    }
  },

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
    cssPath: '~/assets/styles/tailwinds/tailwind.css',
    configPath: '~/tailwind.config',
    exposeConfig: {
      level: 2,
    },
    viewer: true,
  },

  css: [
    './assets/styles/tailwinds/tailwind.css', 
    './assets/styles/main.css',     
  ],
});
