import React from "react";
import { MdSearch } from "react-icons/md";

export function SearchBar() {
  return (
    <div className="search-bar">
      <div className="icon">
        <MdSearch size="22px" />
      </div>
      <input type="search" placeholder="Pesquisar..." />
      <style jsx>{`
        .search-bar {
          background-color: #f0f0f0;
          display: flex;
          padding: 6px 12px;
          border-radius: 6px;
        }

        .icon {
          display: flex;
          align-items: center;
          margin-right: 8px;
        }

        input {
          border: 0;
          outline: none;
          width: 100%;
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
