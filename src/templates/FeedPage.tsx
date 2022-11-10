import React from "react";
import { PageProps, HeadProps, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Feed } from "../components/Feed";
import { Layout } from "../layout/Layout";
import { MetaHead } from "../components/MetaHead";

export default function FeedPage({ data }: PageProps) {
  const pagination = (data as any).allMarkdownRemark.pageInfo;
  const items = (data as any).allMarkdownRemark.nodes.map(
    ({ frontmatter, fields }: any) => ({
      ...frontmatter,
      link: `/posts/${fields.slug}`,
      image: getImage(frontmatter.image.childImageSharp),
    })
  );

  return (
    <Layout>
      <article className="page">
        <h2 className="title">
          Página {pagination.currentPage} de {pagination.pageCount}
        </h2>
        <Feed items={items} pagination={pagination} />
        <style jsx>{`
          .page {
            margin-top: 1em;
          }
          @media (min-width: 960px) {
            .page {
              margin-top: 22px !important;
            }
          }
        `}</style>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetPagePosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      pageInfo {
        currentPage
        pageCount
        hasNextPage
        hasPreviousPage
      }
      nodes {
        fields {
          slug
        }
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 200
                height: 200
                layout: CONSTRAINED
                formats: [JPG, WEBP]
              )
            }
          }
          slug
          title
          date
        }
        id
      }
    }
  }
`;

export const Head = ({ data }: HeadProps) => {
  const { currentPage, pageCount } = (data as any).allMarkdownRemark.pageInfo;
  return (
    <MetaHead
      title={`Instagram | Página ${currentPage} de ${pageCount}`}
      description=""
      path={`/pages/${currentPage}`}
    />
  );
};
