// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tnsi.neocities.org",
  output: "static",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  integrations: [preact({ compat: true })],
});
