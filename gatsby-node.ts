import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  actions,
  getNode,
  node,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({
      getNode,
      node,
      trailingSlash: false,
    }).slice(1);
    createNodeField({
      name: "slug",
      value,
      node,
    });
  }
};
