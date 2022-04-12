import React from "react";
import { MdChevronRight } from "react-icons/md";
import style from "./NextArrow.module.scss";

export default function NextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={style.arrow}>
      <MdChevronRight />
    </button>
  );
}
