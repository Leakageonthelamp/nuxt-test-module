import module from "../src/module";

export default defineNuxtConfig({
  modules: [module],
  testModule: {},
  devtools: { enabled: true },
});
