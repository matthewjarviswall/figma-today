module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-53023206-2",
      },
    }
  ],
  siteMetadata: {
    title: "Figma Today",
    titleTemplate: "Figma Today",
    description:
      "Thousands of Figma projects from around the world.",
    url: "https://figma.today", // No trailing slash allowed!
    twitterUsername: "@matthewjarvisw",
  }
}