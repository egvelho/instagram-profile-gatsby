import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotenv.config();

const title = "Instagram clone";
const pathPrefix = "/instagram-profile";

const config: GatsbyConfig = {
  siteMetadata: {
    title,
    description: "Um site baseado na interface do Instagram",
    image: `${pathPrefix}/icon.png`,
    keywords: ["Instagram", "Clone", "Projeto", "Infnet"],
    siteUrl: `https://egvelho.github.io`,
    pathPrefix,
  },
  pathPrefix,
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-jsx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: "#eee",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
  ],
};

export default config;
