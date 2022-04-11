import React from "react";
import style from "./Lnb.module.scss";
import cn from "classnames";

export default function Lnb({ isOpen, handleOpen, handleClose }) {
  return (
    <div
      className={cn(style.lnb, { [style.active]: isOpen })}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className={style.inner}>
        <ul>
          <li className={style.title}>
            <a href="#">성서유니온 소개</a>
          </li>
          <li>
            <a href="#">비전 & 역사</a>
          </li>
          <li>
            <a href="#">섬기는 사람들</a>
          </li>
          <li>
            <a href="#">후원하기</a>
          </li>
          <li>
            <a href="#">찾아오시는 길</a>
          </li>
          <li>
            <a href="#">알려드립니다</a>
          </li>
        </ul>
        <ul>
          <li className={style.title}>
            <a href="#">사역</a>
          </li>
          <li>
            <a href="#">전국지부</a>
          </li>
          <li>
            <a href="#">교육 및 행사</a>
          </li>
          <li>
            <a href="#">SU 이야기</a>
          </li>
          <li>
            <a href="#">E100</a>
          </li>
          <li>
            <a href="#">- E100이란</a>
          </li>
          <li>
            <a href="#">- E100자료</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul>
          <li className={style.title}>
            <a href="#">매일 성경</a>
          </li>
          <li>
            <a href="#">매일성경 소개</a>
          </li>
          <li>
            <a href="#">오늘의 묵상</a>
          </li>
          <li>
            <a href="#">OTHER LANGUAGES</a>
          </li>
          <li>
            <a href="#">묵상 나눔</a>
          </li>
        </ul>
        <ul>
          <li className={style.title}>
            <a href="#">자료실</a>
          </li>
          <li>
            <a href="#">자료실</a>
          </li>
          <li>
            <a href="#">갤러리</a>
          </li>
          <li>
            <a href="#">자원봉사자 훈련</a>
          </li>
        </ul>
        <ul>
          <li className={style.title}>
            <a href="#">도서</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
