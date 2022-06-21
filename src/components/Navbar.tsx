import React from "react";

import logo from "../logo.png";

const Navbar = () => {
  return (
    <div className="navHolder px-80">
      <nav className="py-4 pt-12 bottom-line row justify-between items-center">
        <img src={logo} className="fill-white hover:cursor-pointer" />
        <div className="row"></div>
      </nav>
    </div>
  );
};

export default Navbar;
