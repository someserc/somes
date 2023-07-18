import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  const { children, description, keywords, author, title } = props;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
