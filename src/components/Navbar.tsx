import React from "react";

import logo from "../logo.png";

const Navbar = () => {
  return (
    <div className="navHolder px-8">
      <nav className="py-2 pt-12 bottom-line row justify-between items-center">
        <img src={logo} className="fill-white hover:cursor-pointer" />
        <div className="row btn-holder">
          <a href="">
            <h5>Generators</h5>
          </a>
          <a href="">
            <h5>Pricing</h5>
          </a>
          <a href="">
            <h5>Blog</h5>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
