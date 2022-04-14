import React, { useState } from "react";

// scss
import style from "./Header.module.scss";

// image
import logo from "static/images/logo.png";

import Gnb from "./Gnb/Gnb";
import Lnb from "./Lnb/Lnb";
import HeaderContents from "./HeaderMenu/HeaderMenu";

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
