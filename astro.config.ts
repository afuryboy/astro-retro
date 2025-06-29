// @ts-check
import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { DEFAULT_LOCALE, SUPPORT_LOCALES, LOCALES_TO_LANG } from "./src/i18n/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.afruyboy.site/",

  i18n: {
    locales: SUPPORT_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    // routing: {
    //     prefixDefaultLocale: true
    // }
  },

  integrations: [
    mdx(), 
    react(), 
    sitemap({
      i18n: {
        locales: LOCALES_TO_LANG,
        defaultLocale: DEFAULT_LOCALE,
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});