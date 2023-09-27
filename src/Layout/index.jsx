import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Layout = ({ children, gradientButton = false, footer = true }) => {
  return (
    <div className="">
      <Navbar gradientButton={gradientButton} />
      <main>{children}</main>
      {footer ? <Footer /> : null}
    </div>
  );
};

export default Layout;
