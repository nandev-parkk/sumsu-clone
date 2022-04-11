import React, { useEffect, useRef, useState } from "react";
import sponsorIcon from "static/images/sponsor_icon.png";
import style from "./HeaderContents.module.scss";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import cn from "classnames";
import Swal from "sweetalert2";

export default function HeaderContents({ handleToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [isOpen]);

  function handleSearchBarToggle() {
    setIsOpen(!isOpen);
  }

  function handleSubmit() {
    if (inputRef.current.value === "") {
      Swal.fire({
        icon: "warning",
        text: "검색어를 입력해주세요 :)",
      });
    } else {
    }
  }

  return (
    <div className={style.items}>
      <a className={style.sponsor} href="#">
        <img src={sponsorIcon} alt="후원하기" />
        후원하기
      </a>
      <button
        type="button"
        className={style.search}
        onClick={handleSearchBarToggle}
      >
        <MdSearch />
      </button>
      <button type="button" className={style.menu} onClick={handleToggle}>
        <MdMenu />
      </button>
      <div className={cn(style.searchBar, { [style.active]: isOpen })}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>검색창</legend>
            <input
              ref={inputRef}
              type="text"
              placeholder="검색어를 입력해주세요"
            />
            <button className={style.submit}>
              <MdSearch />
            </button>
          </fieldset>
        </form>
        <button
          type="button"
          className={style.close}
          onClick={handleSearchBarToggle}
        >
          <MdClose />
        </button>
      </div>
    </div>
  );
}
