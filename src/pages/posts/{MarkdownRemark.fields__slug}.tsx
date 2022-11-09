import React from "react";
import { getImage } from "gatsby-plugin-image";
import { Layout } from "../../layout/Layout";
import { PostView } from "../../components/PostView";
import { graphql, PageProps } from "gatsby";

export default function Post({ data }: PageProps) {
  const {
    html,
    frontmatter: { author, date, title, image, authorImage },
  } = (data as any).markdownRemark;
  return (
    <Layout>
      <div className="post-page">
        <PostView
          authorAvatar={getImage(authorImage.childImageSharp)}
          authorUsername={author}
          content={html}
          image={getImage(image.childImageSharp)}
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
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              height: 800
              layout: CONSTRAINED
              formats: [WEBP, JPG]
            )
          }
        }
        authorImage {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              height: 64
              width: 64
              layout: CONSTRAINED
              formats: [WEBP, JPG]
            )
          }
        }
      }
    }
  }
`;
