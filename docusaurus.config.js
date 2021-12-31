// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://sanxwang.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sanxwang', // Usually your GitHub org/user name.
  projectName: 'sanxwang.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sanxwang/sanxwang.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          editUrl:
            'https://github.com/sanxwang/sanxwang.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'annan\'s blog ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/aboutme', label: 'About Me', position: 'left' },
          // {
          //   label: "Resources",
          //   position: "left",
          //   items: [
          //     {
          //       label: "Customers",
          //       to: "/customers",
          //     },
          //     {
          //       label: "Enterprise",
          //       to: "/enterprise",
          //     },
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "Tutorials",
          //       to: "/tutorial",
          //     },
          //     {
          //       label: "Careers",
          //       to: "/careers/",
          //     },
          //     {
          //       label: "About us",
          //       to: "/about-us/",
          //     },
          //   ],
          // },
          // { to: '/aboutme/index.html', label: 'About Me', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} annan's blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
