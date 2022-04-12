import React from "react";
import Slider from "react-slick";
import style from "./Banner.module.scss";
import NextArrow from "./nextArrow/NextArrow";
import PrevArrow from "./prevArrow/PrevArrow";

// image
import carousel01 from "static/images/carousel/carousel01.jpeg";
import carousel02 from "static/images/carousel/carousel02.jpeg";
import carousel03 from "static/images/carousel/carousel03.jpeg";
import carousel04 from "static/images/carousel/carousel04.jpeg";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // appendDots: (dot) => (
    //   <div
    //     style={{
    //       bottom: "40px",
    //     }}
    //   >
    //     <ul className={style.dots}>{dot}</ul>
    //   </div>
    // ),
    // customPaging: () => <div className={style.dot}></div>,
  };
  return (
    <Slider {...settings}>
      <a href="#" className={style.item}>
        <img src={carousel01} alt="Bible Engagement School 입문과정" />
      </a>
      <a href="#" className={style.item}>
        <img src={carousel02} alt="부활절 가정예배 레시피" />
      </a>
      <a href="#" className={style.item}>
        <img src={carousel03} alt="QT 탐정 키파 리마스터링" />
      </a>
      <a href="#" className={style.item}>
        <img src={carousel04} alt="에브리데이 스터디 바이블 e-book 출간" />
      </a>
    </Slider>
  );
}
