import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
function Logo() {
  return (
    <div
      style={{
        margin: "20px 20px",
      }}
    >
      <Link to="/landing">
        <nav>
          <img src={logo} alt="jobif" />
        </nav>
      </Link>
    </div>
  );
}

export default Logo;
