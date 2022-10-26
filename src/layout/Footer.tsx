import React from "react";

export function Footer() {
  return (
    <div className="footer">
      <div className="item">
        <a href="/">Home</a>
      </div>
      <div className="item">
        <a href="/#contato">Contato</a>
      </div>
      <style jsx>{`
        .footer {
          padding: 32px 0;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .item a {
          color: #000;
          font-size: 12px;
        }

        .item:not(first-child) {
          margin-left: 16px;
        }
      `}</style>
    </div>
  );
}
