import React from "react";
import Inner from "../layout/Inner/Inner";
import style from "./NavMenu.module.scss";

export default function NavMenu() {
  return (
    <div className={style.container}>
      <Inner navMenu>
        <ul className={style.items}>
          <li className={style.title}>SNS</li>
          <li>
            <a href="#">사역 페이스북</a>
          </li>
          <li>
            <a href="#">청매 인스타그램</a>
          </li>
          <li>
            <a href="#">출판 페이스북</a>
          </li>
          <li>
            <a href="#">어린이 매일성경 페이스북</a>
          </li>
          <li>
            <a href="#">큐티아이 페이스북</a>
          </li>
          <li>
            <a href="#">매일성경 묵상 페이스북</a>
          </li>
          <li>
            <a href="#">SU 인스타그램</a>
          </li>
        </ul>
        <ul className={style.items}>
          <li className={style.title}>CAFE</li>
          <li>
            <a href="#">성서유니온 Youtube</a>
          </li>
          <li>
            <a href="#">매일성경해설오디오 팟빵</a>
          </li>
          <li>
            <a href="#">수토리 팟빵</a>
          </li>
        </ul>
        <ul className={style.items}>
          <li className={style.title}>국제SU</li>
          <li>
            <a href="#">Scripture Union International</a>
          </li>
          <li>
            <a href="#">말레이시아 SU</a>
          </li>
          <li>
            <a href="#">호주 SU</a>
          </li>
          <li>
            <a href="#">영국 SU</a>
          </li>
          <li>
            <a href="#">미국 SU</a>
          </li>
          <li>
            <a href="#">캐나다 SU</a>
          </li>
        </ul>
      </Inner>
    </div>
  );
}
