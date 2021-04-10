/* eslint-disable no-undef */
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const DEFAULT_ITEMS_PER_PAGE = 6;

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostComponent = path.resolve("src/templates/BlogPost.js");
  const blogListComponent = path.resolve("src/templates/BlogPages.js");

  return graphql(`
    query getAllPosts {
      allMdx(
        sort: { fields: [frontmatter___createdAt], order: DESC }
        filter: { frontmatter: {} }
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
            readingTime {
              text
            }
          }
        }
        pageInfo {
          totalCount
          perPage
          pageCount
          itemCount
          hasPreviousPage
          hasNextPage
          currentPage
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

    const totalCount = nodes.length;
    const perPage = DEFAULT_ITEMS_PER_PAGE;
    const pageCount = Math.ceil(totalCount / perPage);

    // Create Page for Each Mdx File
    nodes.forEach(({ fields, frontmatter: { category } }) => {
      createPage({
        path: fields.slug,
        component: blogPostComponent,
        context: {
          category,
          slug: fields.slug
        }
      });
    });

    Array.from({ length: pageCount }).forEach((_, idx) => {
      createPage({
        path: !idx ? `/` : `/page/${idx + 1}`,
        component: blogListComponent,
        context: {
          limit: perPage,
          skip: idx * perPage,
          pageCount,
          currentPage: idx + 1
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
