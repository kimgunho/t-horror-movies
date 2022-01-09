import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";

import styles from "./Genres.module.scss";
import { getGenresApi, querysState } from "../../../recoil/homeState";

const cx = classNames.bind(styles);

function Genres() {
  const { state, contents } = useRecoilValueLoadable(getGenresApi);
  const setQuerys = useSetRecoilState(querysState);
  const [genres, setGenres] = useState([]);
  const [selectGenres, setSelectGenres] = useState([]);
  const [genresString, setGenresString] = useState("");
  const [classToggle, setClassToggle] = useState({});

  useEffect(() => {
    switch (state) {
      case "hasValue":
        setGenres(contents.genres);
        break;
      case "loading":
        break;
      case "hasError":
        console.error("error");
        break;
      default:
        break;
    }
  }, [state]);

  useEffect(() => {
    setGenresString(selectGenres.toString(","));
  }, [selectGenres]);

  useEffect(() => {
    setQuerys((prev) => ({
      ...prev,
      genres: genresString,
    }));
  }, [genresString]);

  const handleGenresId = (event) => {
    const {
      target: {
        dataset: { id },
      },
    } = event;

    if (id !== undefined) {
      if (!selectGenres.includes(id)) {
        setSelectGenres((prev) => [...prev, id]);
      } else {
        setSelectGenres((prev) => {
          return [...prev, id].filter((genre) => genre !== id);
        });
      }
    }

    handleClassToggle(id);
  };

  const handleClassToggle = (id) => {
    setClassToggle((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={cx("genres")}>
      <h3 className={cx("title")}>중복 장르별 찾기</h3>
      <ul className={cx("items")} onClick={handleGenresId}>
        {genres.map((genre) => {
          // 27 === genres horror id
          if (genre.id === 27) {
            return;
          }
          return (
            <li
              key={genre.id}
              data-id={genre.id}
              className={cx({ checked: classToggle[genre.id] })}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Genres;
