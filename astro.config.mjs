import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: "https://screwfast.uk",
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          fr: "fr",
        },
      },
    }),
    starlight({
      title: "ScrewFast Docs",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        fr: { label: "Français", lang: "fr" },
      },
      sidebar: [
        {
          label: "Quick Start Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
      ],
      social: {
        github: "https://github.com/mearashadowfax/ScrewFast",
      },
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
    }), 
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),
});
