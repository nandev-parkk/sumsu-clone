import React from "react";
import { MdChevronLeft } from "react-icons/md";
import style from "./PrevArrow.module.scss";

export default function PrevArrow(props) {
  const { onClick } = props;

  return (
    <button onClick={onClick} className={style.arrow}>
      <MdChevronLeft />
    </button>
  );
}
