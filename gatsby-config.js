module.exports = {
  siteMetadata: {
    title: `Sean Mahoney | Full-Stack Developer`,
    author: `Sean Mahoney`,
    role: `Full-Stack Developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sean Mahoney | Full-Stack Developer`,
        short_name: `Sean Mahoney`,
        start_url: `/`,
        background_color: `#02D463`,
        theme_color: `#02D463`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
  ],
}
