// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/main.scss", "animate.css/animate.min.css"],
  plugins: [
    {
      src: "@/plugins/autoanimate.js",
      mode: "client",
    },
  ],
  modules: ["@vueuse/nuxt"],
  // app: {
  //   pageTransition: { name: "page", mode: "out-in" },
  // },
});
