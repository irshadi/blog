/* eslint-disable no-undef */
const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve("src/templates/BlogPost.js");

  return graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              createdAt
              category
              img
              author
            }
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
        allMdx: { edges }
      }
    } = result;

    // Create Page for Each Mdx File
    edges.forEach(({ node: { fields, frontmatter } }) => {
      createPage({
        path: fields.slug,
        component: BlogPostTemplate,
        context: {
          slug: fields.slug,
          data: frontmatter
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
      node,
      name: "slug",
      value: slug
    });
  }
};
