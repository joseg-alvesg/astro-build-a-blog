import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://classy-kheer-3125e5.netlify.app",
  integrations: [preact()]
});