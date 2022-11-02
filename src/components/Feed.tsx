import React from "react";

export type FeedProps = {
  items: FeedItemProps[];
};

export type FeedItemProps = {
  image: string;
  link: string;
  title: string;
};

export function Feed({ items }: FeedProps) {
  return (
    <div className="feed">
      <div className="feed-grid">
        {items.map((item, index) => (
          <FeedItem {...item} key={index} />
        ))}
      </div>
      <style jsx>{`
        .feed {
          padding: 8px 0;
        }

        .feed-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 600px) {
          .feed-grid {
            gap: 1px !important; // Má prática, não utilize !important
          }
        }
      `}</style>
    </div>
  );
}

function FeedItem({ image, link, title }: FeedItemProps) {
  return (
    <a href={link}>
      <img src={image} alt={title} />
      <style jsx>{`
        img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </a>
  );
}
