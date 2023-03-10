// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'guchimon99\'s docusaurus',
  tagline: 'today\'s doragon',
  url: 'https://guchimon99.github.io',
  baseUrl: '/my-docusaurus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'guchimon99', // Usually your GitHub org/user name.
  projectName: 'my-docusaurus', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },

  // GA
  scripts: [
    {
      src: '/my-docusaurus/js/google-tag.js'
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'GTM-KP8DF7W',
          anonymizeIP: true
        }
      }),
    ]
  ],
  themes: [
    'docusaurus-theme-search-typesense'
  ],
  themeConfig:
    /** @type {import("docusaurus-theme-search-typesense").ThemeConfig} */
    ({
      navbar: {
        title: 'My Docusaurus',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/guchimon99/my-docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} guchimon99. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      typesense: {
        typesenseCollectionName: 'docusaurus-2',

        typesenseServerConfig: {
          nodes: [
            {
              host: 'dv4hpnl21mf8xec3p-1.a1.typesense.net',
              port: 443,
              protocol: 'https',
            }
          ],
          apiKey: 'Owworl70yTmGhfdPyDrlNelXW1HeYGzc',
          sendApiKeyAsQueryParam: false
        },

        typesenseSearchParameters: {},

        searchPagePath: '/search',

        // Optional
        contextualSearch: true
      }
    }),

};

module.exports = config;
