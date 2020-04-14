/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Geospatial Tools',
    description: 'Information on geospatial tools and technologies',
    author: 'Kit Macleod',
    menuLinks: [
      {
        name: 'Blog',
        url: '/',
      },
      {
        name: 'Notes',
        url: '/notes',
      },
    ],
    social: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/kitmacleod',
      },
      {
        name: 'Github',
        url: 'https://github.com/kitmacleod',
      },
    ],
  },
  /* Your site config here */
  plugins: [
    '@pauliescanlon/gatsby-mdx-embed',
    {
      resolve: 'gatsby-theme-blog',
      options: {
        // basePath defaults to '/'
        basePath: '/',
      },
    },
    {
      resolve: 'gatsby-theme-notes',
      options: {
        basePath: '/notes'
      },
    },
  ],
}
