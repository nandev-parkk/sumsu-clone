import React, { useState } from "react";

// scss
import style from "./Header.module.scss";

// image
import logo from "static/images/logo.png";

import Gnb from "./gnb/Gnb";
import Lnb from "./lnb/Lnb";
import HeaderContents from "./HeaderContents/HeaderContents";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <header>
      <a href="#" className={style.logo}>
        <img src={logo} alt="logo" />
      </a>
      <Gnb isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} />
      <HeaderContents handleToggle={handleToggle} />
      <Lnb isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} />
    </header>
  );
}
