import React from "react";
import { ContactForm } from "../components/ContactForm";

export function Footer() {
  return (
    <div className="footer">
      <ContactForm />
      <div className="footer-links">
        <div className="item">
          <a href="/">Home</a>
        </div>
        <div className="item">
          <a href="/#contato">Contato</a>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 32px 0;
        }

        .footer-links {
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
