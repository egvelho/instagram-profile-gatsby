import React from "react";
import { graphql, PageProps, HeadProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Layout } from "../layout/Layout";
import { ProfileHeader, ProfileHeaderProps } from "../components/ProfileHeader";
import { Feed } from "../components/Feed";
import { MetaHead } from "../components/MetaHead";

export default function Home({ data }: PageProps) {
  const profileHeaderProps = (data as any).json as ProfileHeaderProps;
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
      <article>
        <header>
          <ProfileHeader
            {...profileHeaderProps}
            publishCount={(data as any).allMarkdownRemark.pageInfo.totalCount}
          />
        </header>
        <section className="feed-container">
          <Feed items={items} pagination={pagination} />
        </section>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  {
    json {
      avatar
      bio
      link
      name
      role
      username
    }
    allMarkdownRemark(
      limit: 15
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      pageInfo {
        totalCount
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
          author
          date
          title
          image {
            childImageSharp {
              gatsbyImageData(
                formats: [WEBP, JPG]
                width: 200
                height: 200
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: HeadProps) => {
  const { name, bio } = (data as any).json;
  return <MetaHead title={`Instagram | ${name}`} description={bio} />;
};
