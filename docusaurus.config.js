// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UrbanMatrix',
  tagline: 'Companion Computer | GCS | Cloud Platform',
  url: process.env.URL || 'https://docs.urbanmatrix.co.in/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'urbanmatrix', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/urbanmatrix/docs/edit/main/',
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
          width: 48,
          height: 48
        },
        items: [
          {
            href: 'https://github.com/urbanmatrix/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Launchpad',
                to: 'category/launchpad/',
              },
              {
                label: 'MatrixConsole',
                to: '/category/matrix-console',
              },
              {
                label: 'MatrixCC',
                to: '/category/matrixcc',
              },
              {
                label: 'MatrixOS Dashboard',
                to: '/category/matrixos-dashboard',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/urbanmatrix_in',
              },
              {
                label: "Youtube",
                href: 'https://www.youtube.com/@urbanmatrixdrones'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/urbanmatrix/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/urbanmatrix/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UrbanMatrix. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
