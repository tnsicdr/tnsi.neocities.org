// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tnsi.neocities.org",
  output: "static",
  prefetch: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    fallback: {
      ja: "en",
    },
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "rewrite",
    },
  },
  integrations: [preact({ compat: true })],
});
