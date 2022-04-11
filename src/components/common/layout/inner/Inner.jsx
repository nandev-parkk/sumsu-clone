import React from "react";
import style from "./Inner.module.scss";

export default function Inner({ children }) {
  return <div className={style.inner}>{children}</div>;
}
