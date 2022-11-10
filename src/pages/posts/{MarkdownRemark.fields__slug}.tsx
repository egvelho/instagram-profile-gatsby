import React from "react";
import { graphql, PageProps, HeadProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Layout } from "../../layout/Layout";
import { PostView } from "../../components/PostView";
import { MetaHead } from "../../components/MetaHead";

export default function Post({ data }: PageProps) {
  const {
    html,
    frontmatter: { author, date, title, image, authorImage },
  } = (data as any).markdownRemark;
  return (
    <Layout>
      <article className="post-page">
        <PostView
          authorAvatar={getImage(authorImage.childImageSharp)}
          authorUsername={author}
          content={html}
          image={getImage(image.childImageSharp)}
          publishDate={new Date(date)}
        />
      </article>
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

export const Head = ({ data }: HeadProps) => {
  const {
    frontmatter: { author, date, title, image },
    fields: { slug },
  } = (data as any).markdownRemark;
  return (
    <MetaHead
      title={title}
      description={`Publicação de ${author}`}
      image={image.childImageSharp.gatsbyImageData.images.fallback.src}
      path={`/posts/${slug}`}
    />
  );
};
