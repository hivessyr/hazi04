// @ts-check
// ESM formátum

import { readFileSync } from 'fs'
import path from 'path'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TechWriting Házi 4',
  tagline: 'Dokumentáció Docusaurusszal',
  url: 'http://localhost:3000',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'hivessyr', // GitHub org/user
  projectName: 'hazi04', // repo név
 
 plugins: [
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'openapi',
      docsPluginId: 'classic',
      config: {
        petstore: {
          specPath: 'openapi/petstore-api.yaml',
          outputDir: 'docs/petstore',
          sidebarOptions: {
            groupPathsBy: 'tag',
          },
        },
      },
    },
  ],
],

 themes: ['docusaurus-theme-openapi-docs'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  themeConfig: {
    navbar: {
      title: 'TechWriting Házi 4',
      logo: {
        alt: 'TechWriting Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'petstoreSidebar',
          position: 'left',
          label: 'Petstore API',
        },
        {
          href: 'https://github.com/hivessyr/hazi04',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} TechWriting Házi 4`,
    },
  },
};

export default config;
