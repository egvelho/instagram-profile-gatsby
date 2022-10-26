import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://egvelho.github.io/instagram-profile`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-jsx"],
};

export default config;
