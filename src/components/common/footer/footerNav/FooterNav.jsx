import React from "react";
import Inner from "components/common/layout/Inner/Inner";
import style from "./FooterNav.module.scss";

export default function FooterNav() {
  return (
    <div className={style.container}>
      <Inner>
        <ul>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#" className={style.privacy}>
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="#">이메일무단수집거부</a>
          </li>
          <li>
            <a href="#">원격지원</a>
          </li>
        </ul>
      </Inner>
    </div>
  );
}
