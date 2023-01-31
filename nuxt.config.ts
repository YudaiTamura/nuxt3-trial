export default defineNuxtConfig({
  ssr: true,
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  postcss: {
    plugins: { tailwindcss: {} },
  },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt3 Trial",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
