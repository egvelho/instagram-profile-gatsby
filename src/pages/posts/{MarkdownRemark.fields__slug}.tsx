import React from "react";
import { Layout } from "../../layout/Layout";
import { PostView } from "../../components/PostView";
import { graphql, PageProps } from "gatsby";

export default function Post({ data }: PageProps) {
  const {
    html,
    frontmatter: { author, date, title },
  } = (data as any).markdownRemark;
  return (
    <Layout>
      <div className="post-page">
        <PostView
          authorAvatar="https://eduardovelho.com/images/egvelho.jpg"
          authorUsername={author}
          content={html}
          image="https://loremflickr.com/1000/1000"
          publishDate={new Date(date)}
        />
      </div>
      <style jsx>{`
        .post-page {
          padding: 36px 0;
        }
      `}</style>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`;
