import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GrFavorite, GrHomeRounded } from "react-icons/gr";
import { Avatar } from "./Avatar";

export function AppBarItems() {
  return (
    <div className="app-bar-items">
      <a className="item" href="/">
        <GrFavorite size="22px" />
      </a>
      <a className="item" href="/">
        <GrHomeRounded size="22px" />
      </a>
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
        .app-bar-items {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .item {
          display: flex;
          align-items: center;
        }

        .item:not(:first-child) {
          margin-left: 22px;
        }
      `}</style>
    </div>
  );
}
