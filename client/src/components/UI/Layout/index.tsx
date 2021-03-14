import React from "react";
import { BrowserRouter } from "react-router-dom";
import { links } from "./conts";
import Footer from "./Footer";
import Header from "./Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Header links={links} />
      {children}
      <Footer />
    </BrowserRouter>
  );
};
