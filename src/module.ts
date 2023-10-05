import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  addImports,
} from "@nuxt/kit";
import { name, version } from "../package.json";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "testModule",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Transpile the runtime
    const runtimeDir = resolve("./runtime");
    nuxt.options.build.transpile.push(runtimeDir);

    // Inject the runtime plugins
    addPlugin({
      src: resolve(runtimeDir, "plugin"),
    });

    // Inject components
    // addComponentsDir({})

    // Inject composables
    addImports({
      name: "useUtils",
      as: "useUtils",
      from: resolve(runtimeDir, "composables", "useUtils"),
    });

    addImports({
      name: "useLibs",
      as: "useLibs",
      from: resolve(runtimeDir, "composables", "useLibs"),
    });
  },
});
