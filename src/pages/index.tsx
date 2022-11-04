import React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from "../layout/Layout";
import { ProfileHeader, ProfileHeaderProps } from "../components/ProfileHeader";
import { Feed } from "../components/Feed";

type Teste = {
  a: string;
  b: string;
};

const teste: Teste = {
  a: "",
  b: "",
};

export default function Home({ data }: PageProps) {
  const profileHeaderProps = (data as any).json as ProfileHeaderProps;
  const items = (data as any).allMarkdownRemark.nodes.map(
    ({ frontmatter, fields }: any) => ({
      ...frontmatter,
      link: `/posts/${fields.slug}`,
      image: "https://loremflickr.com/400/400",
    })
  );
  return (
    <Layout>
      <header>
        <ProfileHeader {...profileHeaderProps} />
      </header>
      <div className="feed-container">
        <Feed items={items} />
      </div>
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
      publishCount
      role
      username
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author
          date
          title
        }
      }
    }
  }
`;
