import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Marketing Strategy',
          href: getPermalink('/strategy'),
        },
        {
          text: 'Branding',
          href: getPermalink('/branding'),
        },
        {
          text: 'Search Engine Optimisation',
          href: getPermalink('/seo'),
        },
        {
          text: 'Social Media',
          href: getPermalink('/socialmedia'),
        },
      ],
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'About',
      href: '/about',
    },
  ],
  actions: [{ text: 'Contact', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
        Made by <a class="text-orange-400 hover:underline dark:text-gray-200" href="https://www.linkedin.com/in/inigo-jackson-verschaeve/?originalSubdomain=uk"> Inigo Jackson-Verschaeve</a> · All rights reserved.
  `,
};
