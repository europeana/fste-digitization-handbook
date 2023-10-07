import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://europeana.github.io',
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
        github: 'https://github.com/Europeana/fste-digitization-handbook',
      },
      sidebar: [
        {
          label: 'Before you start',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Read this', link: '/1before/0index/' },
          ],
        },
        {
          label: 'Planning',
          collapsed: true,
          autogenerate: { directory: '2.planning' }
        },
        {
          label: 'Selection',
          collapsed: true,
          autogenerate: { directory: '3.selection' }
        },
        {
          label: 'Digitization',
          collapsed: true,
          items: [
            { label: 'Digitization Process', link: '/4digitization/0index/' },
            { label: 'Preparation', collapsed: true, autogenerate: { directory: '4.digitization/1.preparation' }, },
            { label: 'Capturing', collapsed: true, autogenerate: { directory: '4.digitization/2.capturing' },},
          ],
        },
        {
          label: 'Preparation for publication',
          collapsed: true,
          autogenerate: { directory: '5.preparation'}
        },
        {
          label: 'Publishing online',
          collapsed: true,
          autogenerate: { directory: '6.publishing' }
        },
        {
          label: 'Data management',
          collapsed: true,
          autogenerate: { directory: '7.metadata' }
        }
      ],
      pagination: false
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
