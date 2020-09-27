/* eslint-disable no-undef */
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  console.log(node.internal.type, "TYPE");
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });

    console.log(slug, "< SLUG");
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};
