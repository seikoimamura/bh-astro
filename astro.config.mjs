// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: "https://seikoimamura.github.io",
  base: "/bh-astro",
  integrations: [preact()],
  vite: {
     plugins: [tailwindcss()],
  },
  experimental: {
     svg: true,
  },
});
