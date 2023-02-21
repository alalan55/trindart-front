import VuePageTransition from "vue-page-transition";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VuePageTransition);
});
