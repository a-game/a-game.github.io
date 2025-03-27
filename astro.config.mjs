import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ahmadgame.com",
  integrations: [tailwind(), sitemap(), mdx(), icon()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      wrap: true,
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});