import React from "react";
import { InstagramLogo } from "../components/InstagramLogo";
import { SearchBar } from "../components/SearchBar";
import { AppBarItems } from "../components/AppBarItems";

const appbarHeight = "64px";

export function AppBar() {
  return (
    <>
      <div className="app-bar">
        <div className="app-bar-content">
          <div className="row">
            <a href="/">
              <InstagramLogo height="32px" />
            </a>
          </div>
          <div className="row">
            <SearchBar />
          </div>
          <div className="row">
            <AppBarItems />
          </div>
        </div>
        <style jsx>{`
          .app-bar {
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
          }

          .app-bar-content {
            margin: auto;
            max-width: 960px;
            display: flex;
            align-items: center;
            height: ${appbarHeight};
          }

          .row {
            flex: 1;
          }

          :global(body) {
            padding-top: ${appbarHeight};
          }
        `}</style>
      </div>
    </>
  );
}
