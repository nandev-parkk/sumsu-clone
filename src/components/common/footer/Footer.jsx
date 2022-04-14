import React from "react";
import Inner from "../layout/Inner/Inner";
import style from "./Footer.module.scss";
import FooterNav from "./FooterNav/FooterNav";
import logo from "static/images/foot_logo.png";

export default function Footer() {
  return (
    <footer>
      <FooterNav />
      <Inner>
        <div className={style.items}>
          <a href="#">
            <img src={logo} alt="로고" />
          </a>

          <div className={style.info}>
            서울특별시 송파구 오금로 22길 13(송파동) (사)한국성서유니온선교회
            사업자등록번호 215-82-10858 송파구 통신판매신고 제 4998호 <br />
            대표 김주련 TEL : 02)2202-0091 FAX : 02)2202-0095
            정기구독/쇼핑몰문의 02-6339-1277 E-mail : webmaster@su.or.kr
            개인정보보호책임자 김종경 kim@su.or.kr <br />
            ALL CONTENTS COPYRIGHT 2018 SCRIPTURE UNION KOREA
          </div>
        </div>
      </Inner>
    </footer>
  );
}
