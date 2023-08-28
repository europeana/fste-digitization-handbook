import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://digitlib.github.io',
  base: '/fste-digitization-handbook',
  integrations: [
    starlight({
      title: 'Digitization Handbook',
      tableOfContents: false,
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/DigitLib/fste-digitization-handbook',
      },
      sidebar: [
        {
          label: 'Before you start',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Read this', link: '/fste-digitization-handbook/1before/0index/' },
          ],
        },
        {
          label: 'Planning',
          autogenerate: { directory: '2.planning' }
        },
        {
          label: 'Selection',
          autogenerate: { directory: '3.selection' }
        },
        {
          label: 'Digitization',
          autogenerate: { directory: '4.digitization' }
        }
      ],
      pagination: false
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
