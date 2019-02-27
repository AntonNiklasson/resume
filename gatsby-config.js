module.exports = {
  siteMetadata: {
    title: `cv.antonniklasson.se`,
    description: ``,
    author: `Anton Niklasson <niklasson.anton@gmail.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content.yml`
      }
    }
  ]
};
