import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://egvelho.github.io/instagram-profile`,
  },
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
      resolve: "gatsby-source-pg",
      options: {
        connectionString: process.env.DATABASE_URL,
        schema: "public",
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};

export default config;
