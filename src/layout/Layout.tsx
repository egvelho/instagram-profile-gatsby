import React from "react";
import "./styles.css";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import { BottomNavigation } from "./BottomNavigation";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <div className="layout">
      <nav>
        <AppBar />
      </nav>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
      <nav>
        <BottomNavigation />
      </nav>
    </div>
  );
}
