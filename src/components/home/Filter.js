import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Filter.module.scss";

import Search from "./filter/Search";
import Align from "./filter/Align";
import Genres from "./filter/Genres";
import Keywords from "./filter/Keywords";
import Watch from "./filter/Watch";

const cx = classNames.bind(styles);

function Filter() {
  const [top, setTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setTop(window.scrollY - 80) : setTop(0);
    });
  }, []);

  return (
    <div style={{ top }} className={cx("filterBox")}>
      <Search />
      <Align />
      <div className={cx("filter")}>
        <h2>필터 검색</h2>
        <Genres />
        <Keywords />
        <Watch />
      </div>
    </div>
  );
}

export default Filter;
