/* eslint-disable no-undef */
const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve("src/templates/BlogPost.js");

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___createdAt], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            createdAt
            category
            img
            author
          }
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const {
      data: {
        allMdx: { nodes }
      }
    } = result;

    // Create Page for Each Mdx File
    nodes.forEach(({ fields }, index) => {
      const previous = index === nodes.length - 1 ? null : nodes[index + 1];
      const next = !index ? null : nodes[index - 1];

      createPage({
        path: fields.slug,
        component: BlogPostTemplate,
        context: {
          slug: fields.slug,
          previous,
          next
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: slug
    });
  }
};
