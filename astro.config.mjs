// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tnsi.neocities.org",
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
});
