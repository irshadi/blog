/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Irshadi Bagasputro",
    description: "This is my coding blog where I write about my coding journey."
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/posts`,
        name: `posts`
      }
    }
  ]
};
