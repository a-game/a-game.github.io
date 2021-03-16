module.exports = {
  siteMetadata: {
    title: `Ahmad Game`,
    description: `Ahmad Game's personal website`,
    author: "@ahmadgame",
    siteUrl: "https://ahmadgame.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ahmad Game`,
        short_name: `Game`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#3d3d3d`,
        display: `minimal-ui`,
        icon: `src/images/G-logo-round.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // needs to be after manifest.
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-44097000-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        anonymize: true,
        respectDNT: true,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
  ],
};
