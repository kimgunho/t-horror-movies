import { useState, useEffect } from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import classNames from "classnames/bind";

import styles from "./Watch.module.scss";
import { watchState, querysState } from "../../../recoil/state";

const cx = classNames.bind(styles);

function Watch() {
  const watchs = useRecoilValueLoadable(watchState);
  const { state, contents } = watchs;
  const setQuerys = useSetRecoilState(querysState);
  const [watch, setWatch] = useState([]);
  const [arr, setArr] = useState([]);
  const [watchString, setWatchString] = useState("");
  const [classToggle, setClassToggle] = useState({});

  useEffect(() => {
    switch (state) {
      case "hasValue":
        setWatch(contents.results);
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
    setWatchString(arr.toString(","));
  }, [arr]);

  useEffect(() => {
    setQuerys((prev) => ({
      ...prev,
      watch: watchString,
    }));
  }, [watchString]);

  const handleGetWatchQuery = (event) => {
    const { id } = event.target.dataset;
    if (id !== undefined) {
      if (!arr.includes(id)) {
        setArr((prev) => [...prev, id]);
      } else {
        setArr((prev) => {
          return [...prev, id].filter((watch) => watch !== id);
        });
      }

      handleClassToggle(id);
    }
  };

  const handleClassToggle = (id) => {
    setClassToggle((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={cx("watch")}>
      <h3 className={cx("title")}>어디서 볼까요?</h3>
      <ul onClick={handleGetWatchQuery}>
        {watch.map(({ provider_id, logo_path, provider_name }) => (
          <li key={provider_id}>
            <img
              className={cx({ checked: classToggle[provider_id] })}
              data-id={provider_id}
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={provider_name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watch;
