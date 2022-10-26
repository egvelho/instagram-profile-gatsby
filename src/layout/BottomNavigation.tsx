import React from "react";
import { GrFavorite, GrHomeRounded } from "react-icons/gr";
import { Avatar } from "../components/Avatar";

const bottomNavigationHeight = "48px";

export function BottomNavigation() {
  return (
    <div className="bottom-navigation">
      <a className="item" href="/">
        <GrFavorite size="22px" />
      </a>
      <a className="item" href="/">
        <GrHomeRounded size="22px" />
      </a>
      <span className="item">
        <Avatar src="https://eduardovelho.com/images/egvelho.jpg" size="36px" />
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
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
