import React from "react";
import { Link } from "gatsby";
import { ContactForm } from "../components/ContactForm";

export function Footer() {
  return (
    <div className="footer">
      <ContactForm />
      <div className="footer-links">
        <div className="item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <Link to="/#contato">Contato</Link>
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
