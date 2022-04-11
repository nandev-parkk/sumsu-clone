import React from "react";
import style from "./Gnb.module.scss";

export default function Gnb({ handleOpen, handleClose }) {
  return (
    <ul
      className={style.gnb}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <li>
        <a href="#">성서유니온 소개</a>
      </li>
      <li>
        <a href="#">사역</a>
      </li>
      <li>
        <a href="#">매일성경</a>
      </li>
      <li>
        <a href="#">자료실</a>
      </li>
      <li>
        <a href="#">도서</a>
      </li>
    </ul>
  );
}
