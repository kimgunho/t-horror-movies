import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useRecoilValueLoadable } from "recoil";

import styles from "./Genres.module.scss";
import { getGenresApi } from "../../../recoil/state";

const cx = classNames.bind(styles);

function Genres() {
  const { state, contents } = useRecoilValueLoadable(getGenresApi);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    switch (state) {
      case "hasValue":
        setGenres(contents.genres);
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
  }, [state]);

  return (
    <div className={cx("genres")}>
      <h3 className={cx("title")}>중복 장르별 찾기</h3>
      <ul className={cx("items")}>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
