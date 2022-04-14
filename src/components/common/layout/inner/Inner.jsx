import React from "react";
import style from "./Inner.module.scss";
import cn from "classnames";

export default function Inner(props) {
  return (
    <div
      className={cn(style.inner, {
        [style.navMenu]: props.navMenu,
        [style.notice]: props.notice,
      })}
    >
      {props.children}
    </div>
  );
}
