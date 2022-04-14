import React from "react";
import { MdAdd } from "react-icons/md";
import style from "./NoticeList.module.scss";

const noticeLists = [
  { id: 1, title: "매일성경 순 3, 4월호 오타 교정", date: "2022-04-13" },
  {
    id: 2,
    title:
      "한국성서유니온선교회 본부 영상/모션그래픽 제작 간사모집(04월30일 마감)",
    date: "2022-04-11",
  },
  { id: 3, title: "<매일성경> 3월 28일 오기 수정", date: "2022-03-28" },
  { id: 4, title: "<묵상과 설교> 3, 4월호 오기 수정", date: "2022-03-03" },
  {
    id: 5,
    title: "한국성서유니온선교회 대구지부 간사모집(03월05일 마감)",
    date: "2022-02-15",
  },
];

export default function NoticeList() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <a href="#">알려드립니다</a>
        <a href="#">
          <MdAdd className={style.icon} />
        </a>
      </div>
      <ul className={style.items}>
        {noticeLists.map((list) => (
          <>
            <li key={list.id}>
              <a href="#">
                <h4>{list.title}</h4>
                <span>{list.date}</span>
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
