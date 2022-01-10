import { useEffect } from "react";
import classNames from "classnames/bind";
import { useRecoilValueLoadable, useRecoilState } from "recoil";

import styles from "./Keywords.module.scss";
import { getDetailKeywordsApi, keywordsState } from "../../recoil/detailState";

const cx = classNames.bind(styles);

function Keysords() {
  const { state, contents } = useRecoilValueLoadable(getDetailKeywordsApi);
  const [keywords, setKeywords] = useRecoilState(keywordsState);

  useEffect(() => {
    if (state === "hasValue") {
      setKeywords(contents.keywords);
    } else if (state === "loading") {
      return;
    }
  }, [state]);

  return (
    <ul className={cx("keywords")}>
      {keywords !== undefined
        ? keywords?.map(({ id, name }) => <li key={id}>{name}</li>)
        : "loading"}
    </ul>
  );
}

export default Keysords;
