import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export type MetaHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  children?: React.ReactNode;
};

export function MetaHead({
  title,
  description,
  image,
  keywords,
  url,
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
        }
      }
    }
  `);

  const meta = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    keywords: keywords || defaultKeywords,
    url: `${siteUrl}${url || ``}`,
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
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
}