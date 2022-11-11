import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export type MetaHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  keywords?: string[];
  children?: React.ReactNode;
};

export function MetaHead({
  title,
  description,
  image,
  keywords,
  path,
  children,
}: MetaHeadProps) {
  const {
    site: {
      siteMetadata: {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        keywords: defaultKeywords,
        siteUrl,
        pathPrefix,
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          keywords
          siteUrl
          pathPrefix
        }
      }
    }
  `);

  const meta = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    keywords: keywords || defaultKeywords,
    url: `${siteUrl}${pathPrefix}${path || ``}`,
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="image" content={meta.image} />
      <meta key="keywords" name="keywords" content={meta.keywords.join(",")} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {children}
    </>
  );
}
