import React from "react";
import { Link } from "react-router-dom";

const NavOnlyLogo = () => {
  return (
    <nav
      style={{
        paddingTop: "10px",
        position: "sticky",
        top: "0px",
      }}
    >
      <Link to={"/"}>
        <img
          style={{
            display: "block",
          }}
          src={require("../Assets/logo.png")}
          alt="logo"
          className="logo"
        />
      </Link>
    </nav>
  );
};

export default NavOnlyLogo;
