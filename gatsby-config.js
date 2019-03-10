module.exports = {
  siteMetadata: {
    author: `Anton Niklasson <niklasson.anton@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content.yml`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
    },
  ],
}
