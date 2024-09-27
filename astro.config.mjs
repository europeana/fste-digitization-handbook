import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export const locales = {
  root: { label: "English", lang: "en" },
  sr: { label: "Српски", lang: "sr" },
};

export default defineConfig({
  site: "https://europeana.github.io",
  base: "/fste-digitization-handbook",
  integrations: [
    starlight({
      title: {
        en: "Digitization Handbook",
        sr: "Приручник за дигитализацију",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en", // lang is required for root locales
        },
        sr: {
          label: "Српски",
          lang: "sr",
        },
      },
      tableOfContents: false,
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      social: {
        github: "https://github.com/Europeana/fste-digitization-handbook",
      },
      sidebar: [
        {
          label: "Before you start",
          translations: {
            sr: "Пре почетка",
          },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Read this",
              link: "/1before/0index/",
              translations: {
                sr: "Прочитајте",
              },
            },
          ],
        },
        {
          label: "Planning",
          translations: {
            sr: "Планирање",
          },
          collapsed: true,
          autogenerate: { directory: "2.planning" },
        },
        {
          label: "Selection",
          translations: {
            sr: "Избор грађе",
          },
          collapsed: true,
          autogenerate: { directory: "3.selection" },
        },
        {
          label: "Digitization",
          translations: {
            sr: "Дигитализација",
          },
          collapsed: true,
          items: [
            {
              label: "Digitization Process",
              translations: {
                sr: "Процес дигитализације",
              },
              link: "/4digitization/0index/",
            },
            {
              label: "Preparation",
              translations: {
                sr: "Припрема",
              },
              collapsed: true,
              autogenerate: { directory: "4.digitization/1.preparation" },
            },
            {
              label: "Capturing",
              translations: {
                sr: "Скенирање/Снимање",
              },
              collapsed: true,
              autogenerate: { directory: "4.digitization/2.capturing" },
            },
          ],
        },
        {
          label: "Preparation for publication",
          translations: {
            sr: "Припрема за објављивање",
          },
          collapsed: true,
          autogenerate: { directory: "5.preparation" },
        },
        {
          label: "Publishing online",
          translations: {
            sr: "Објављивање на вебу",
          },
          collapsed: true,
          autogenerate: { directory: "6.publishing" },
        },
        {
          label: "Data management",
          translations: {
            sr: "Управљање подацима",
          },
          collapsed: true,
          autogenerate: { directory: "7.metadata" },
        },
      ],
      pagination: false,
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
