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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-163406573-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Defaults to https://www.googletagmanager.com
          origin: "https://aimlessanalysis.com/",
        },
      },
    }
  ],
}
