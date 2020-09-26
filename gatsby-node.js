/* eslint-disable no-undef */
const { createFilePath } = require(`gatsby-source-filesystem`);
// const { FILE_TYPE_MAP } = require("./src/constants/fileType");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  console.log({ node, actions, getNode });
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
