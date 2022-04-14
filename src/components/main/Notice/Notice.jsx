import Inner from "components/common/Layout/Inner/Inner";
import React from "react";
import style from "./Notice.module.scss";
import NoticeList from "./NoticeList/NoticeList";
import NoticeMenu from "./NoticeMenu/NoticeMenu";

export default function Notice() {
  return (
    <section className={style.container}>
      <Inner notice>
        <NoticeList />
        <NoticeMenu />
      </Inner>
    </section>
  );
}
