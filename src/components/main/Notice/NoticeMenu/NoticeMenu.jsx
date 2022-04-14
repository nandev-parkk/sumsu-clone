import React from "react";
import style from "./NoticeMenu.module.scss";
import shortcutImg01 from "static/images/notice/shortcut_01.png";
import shortcutImg02 from "static/images/notice/shortcut_02.png";
import shortcutImg03 from "static/images/notice/shortcut_03.png";
import shortcutImg04 from "static/images/notice/shortcut_04.png";

export default function NoticeMenu() {
  return (
    <ul className={style.container}>
      <li>
        <a href="#">
          <img src={shortcutImg01} alt="정기 구독" />
          <span>정기 구독</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={shortcutImg02} alt="" />
          <span>교육 및 행사</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={shortcutImg03} alt="" />
          <span>FAQ</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={shortcutImg04} alt="" />
          <span>묵상 나눔</span>
        </a>
      </li>
    </ul>
  );
}
