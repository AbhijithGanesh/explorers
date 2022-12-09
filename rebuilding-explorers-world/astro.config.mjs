import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind(), prefetch(), react(), image(), vue()]
}); // yarn astro add tailwind