import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useRecoilValueLoadable } from "recoil";

import styles from "./Filter.module.scss";
import { getGenresApi } from "../../recoil/state";

const cx = classNames.bind(styles);

function Filter() {
  const [top, setTop] = useState(0);
  const genresApi = useRecoilValueLoadable(getGenresApi);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    switch (genresApi.state) {
      case "hasValue":
        setGenres(genresApi.contents.genres);
        break;
      case "loading":
        console.log("loading");
        break;
      case "hasError":
        console.error("error");
        break;
      default:
        break;
    }
  }, [genresApi]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setTop(window.scrollY - 80) : setTop(0);
    });
  }, []);

  return (
    <div style={{ top }} className={cx("filterBox")}>
      <div className={cx("search")}>
        <input type="text" placeholder="검색" />
      </div>
      <div className={cx("align")}>
        <h2>정렬 기준</h2>
        <select>
          <option>인기차순</option>
        </select>
      </div>
      <div className={cx("filter")}>
        <h2>필터 검색</h2>
        <form>
          <h3>중복 장르별 찾기</h3>
          <ul className={cx("genres")}>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <h3>키워드로 찾기</h3>
          <ul className={cx("keywords")}>
            <li>aaa</li>
            <li className={cx("checked")}>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
          </ul>
          <h3>어디서 볼까요?</h3>
          <ul className={cx("watchList")}>
            <li>netflix</li>
            <li>netflix</li>
            <li>netflix</li>
            <li>netflix</li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Filter;
