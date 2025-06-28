// @ts-check
import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://www.qiankun.com",

  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "en",
    // routing: {
    //     prefixDefaultLocale: true
    // }
  },

  integrations: [mdx(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});