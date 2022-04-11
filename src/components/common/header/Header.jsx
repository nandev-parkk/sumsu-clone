import React from "react";

// 이미지
import logo from "static/images/logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
}
