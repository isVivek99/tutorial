import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://delightful-puffpuff-36ee5a.netlify.app/",
  integrations: [preact()]
});