module.exports = {
  siteMetadata: {
    title: 'Gatsby material ui starter',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby Material-ui",
        short_name: "Gatsby-MUI",
        start_url: "/",
        background_color: "#f5f5f5",
        theme_color: "#66bb6a",
        display: "standalone",
        icons: [
          {
            src: `/icons/logo-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/logo-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}