// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    "@/assets/main.scss",
    "animate.css/animate.min.css",
    "vue-page-transition/dist/vue-page-transition.css",
  ],
  plugins: [
    {
      src: "@/plugins/autoanimate.js",
      mode: "client",
    },
    // '@/plugins/page-transition.js',
    // {
    //   src: "@/plugins/page-transition.js",
    //   mode: "client",
    // },
  ],
  modules: ["@vueuse/nuxt"],
  // app: {
  //   pageTransition: { name: "page", mode: "out-in" },
  // },
});
