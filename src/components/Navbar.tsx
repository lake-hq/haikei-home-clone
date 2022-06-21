import React from "react";

import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div className="navHolder h-20 px-20">
      <nav className="w-screen bottom-line">
        <img src={logo} />
      </nav>
    </div>
  )
}

export default Navbar;