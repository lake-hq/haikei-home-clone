import React from "react";

import logo from "../images/logo.png";
import twitter from "../images/twitter.png";
import Button from "./Button";
import ButtonDark from "./Button-dark";

const Navbar = () => {
  return (
    <div className="navHolder px-8 overflow-x-hidden">
      <nav>
        <img src={logo} className="fill-white hover:cursor-pointer" />
        <div className="row">
          <div className="btn-holder items-center hidden lg:flex flex-row">
            <a href="https://haikei.app/generators/">
              <h6>Generators</h6>
            </a>
            <a href="">
              <h6>Pricing</h6>
            </a>
            <a href="">
              <h6>Blog</h6>
            </a>
            <ButtonDark text="Share" content={<img src={twitter} />} />
          </div>
          <Button classes="" text="Try it for free" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
