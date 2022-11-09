import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GrFavorite, GrHomeRounded } from "react-icons/gr";
import { Avatar } from "../components/Avatar";

const bottomNavigationHeight = "48px";

export function BottomNavigation() {
  return (
    <div className="bottom-navigation">
      <Link className="item" to="/">
        <GrFavorite size="22px" />
      </Link>
      <Link className="item" to="/">
        <GrHomeRounded size="22px" />
      </Link>
      <span className="item">
        <StaticImage
          src="https://eduardovelho.com/images/egvelho.jpg"
          alt=""
          width={36}
          height={36}
          style={{
            borderRadius: "calc(36px / 2)",
          }}
        />
      </span>
      <style jsx>{`
        .bottom-navigation {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: #fff;
          border-top: 1px solid #ccc;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: ${bottomNavigationHeight};
        }

        .item {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(body) {
          padding-bottom: ${bottomNavigationHeight};
        }

        @media (min-width: 600px) {
          .bottom-navigation {
            display: none !important; // Má prática, evitar !important
          }
        }
      `}</style>
    </div>
  );
}
