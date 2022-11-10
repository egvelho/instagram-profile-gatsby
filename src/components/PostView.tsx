import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Avatar } from "./Avatar";

export type PostView = {
  image?: IGatsbyImageData;
  authorAvatar?: IGatsbyImageData;
  authorUsername: string;
  content: string;
  publishDate: Date;
};

export function PostView({
  image,
  authorAvatar,
  authorUsername,
  content,
  publishDate,
}: PostView) {
  return (
    <div className="post-view">
      <div className="image-container row">
        {image && <GatsbyImage image={image} alt="" />}
      </div>
      <div className="content-container row">
        <header className="content-item avatar-container">
          {authorAvatar && (
            <Avatar
              image={authorAvatar}
              alt={`Foto de ${authorUsername}`}
              size="48px"
            />
          )}
          <span>{authorUsername}</span>
        </header>
        <div
          className="content-item"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="content-item">
          <time dateTime={publishDate.toJSON()}>
            {publishDate.toLocaleDateString("pt-br")}
          </time>
        </div>
      </div>
      <style jsx>{`
        .post-view {
          background-color: #fff;
          border-radius: 8px;
          border: 1px solid #ccc;
          display: flex;
          max-height: 800px;
          box-sizing: border-box;
        }

        .image-container {
          background-color: #000;
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content-container {
          flex: 1;
          overflow-x: auto;
          padding: 8px;
        }

        .image-container img {
          width: 100%;
        }

        .avatar-container {
          display: flex;
          align-items: center;
        }

        .avatar-container span {
          margin-left: 8px;
          font-size: 18px;
          font-weight: bold;
        }

        .content-item:not(:first-child) {
          margin-top: 16px;
        }

        @media (max-width: 600px) {
          .post-view {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
