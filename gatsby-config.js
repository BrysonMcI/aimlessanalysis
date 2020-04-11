module.exports = {
  siteMetadata: {
    title: `Aimless Analysis`,
    description: `A blog where I talk about whatever is currently on my mind`,
    author: `Bryson McIver`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163406573-1",
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
  ],
}
