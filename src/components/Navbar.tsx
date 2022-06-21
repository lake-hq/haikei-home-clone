import React from "react";

import logo from "../logo.png";
import twitter from "../twitter.png";
import Button from "./Button";
import ButtonDark from "./Button-dark";

const Navbar = () => {
  return (
    <div className="navHolder px-8">
      <nav className="py-2 pt-8 px-60 row justify-between items-center">
        <img src={logo} className="fill-white hover:cursor-pointer" />
        <div className="row btn-holder items-center">
          <a href="">
            <h6>Generators</h6>
          </a>
          <a href="">
            <h6>Pricing</h6>
          </a>
          <a href="">
            <h6>Blog</h6>
          </a>
          <ButtonDark text="Share" content={<img src={twitter} />} />
          <Button text="Try it for free" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
