import module from "../src/module";

export default defineNuxtConfig({
  modules: [module, "@pinia/nuxt"],
  testModule: {},
  devtools: { enabled: true },
});
