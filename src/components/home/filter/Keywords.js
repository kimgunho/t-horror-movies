import { useEffect, useState } from "react";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import classNames from "classnames/bind";

import styles from "./Keywords.module.scss";
import {
  keywordQuerysState,
  getKeywordSearchApi,
  querysState,
  keywordsTotalState,
} from "../../../recoil/homeState";

const cx = classNames.bind(styles);

function Keywords() {
  const { state, contents } = useRecoilValueLoadable(getKeywordSearchApi);
  const [keywordQuery, setKeywordQuery] = useRecoilState(keywordQuerysState);
  const [keywordMeta, setKeywordMeta] = useRecoilState(keywordsTotalState);
  const setQureys = useSetRecoilState(querysState);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    switch (state) {
      case "hasValue":
        setKeywords(contents.results);
        setKeywordMeta({
          totalPage: contents.total_pages,
          totalResults: contents.total_results,
        });
        break;
      case "loading":
        break;
      case "hasError":
        console.error("keywords api 오작동");
        break;
      default:
        break;
    }
  }, [state]);

  const onChange = (event) => {
    const { value } = event.target;
    setKeywordQuery((prev) => ({
      ...prev,
      page: 1,
      query: value.replace(/[^A-Za-z]/gi, ""),
    }));
    if (value === "") {
      setQureys((prev) => ({
        ...prev,
        with_keywords: "",
      }));
    }
  };

  const handlePageIncrease = () => {
    if (keywordQuery.page === keywordMeta.totalPage) {
      return;
    }
    setKeywordQuery((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  const handlePageDecrease = () => {
    if (keywordQuery.page <= 1) {
      return;
    }
    setKeywordQuery((prev) => ({
      ...prev,
      page: prev.page - 1,
    }));
  };

  const handleUpdateWithKeywords = (event) => {
    const { id } = event.target.dataset;
    if (id !== undefined) {
      setQureys((prev) => ({
        ...prev,
        with_keywords: id,
      }));
    }
  };

  return (
    <div className={cx("keywords")}>
      <h3 className={cx("title")}>관련 키워드(영문)로 찾기</h3>
      <input
        onChange={onChange}
        className={cx("keywordSearch")}
        type="text"
        placeholder="영문 입력"
      />
      <p className={cx("currentKeyword")}>
        {keywordQuery.query !== ""
          ? `${keywordQuery.query}관련 키워드 / ${keywordMeta.totalResults}개의 결과`
          : ""}
      </p>

      <ul onClick={handleUpdateWithKeywords}>
        {keywords?.map(({ name, id }) => (
          <li data-id={id} key={id}>
            {name}
          </li>
        ))}
      </ul>

      {keywordQuery.query !== "" ? (
        <p className={cx("controls")}>
          {keywordQuery.page > 1 ? (
            <button onClick={handlePageDecrease}>이전</button>
          ) : (
            ""
          )}

          {keywordQuery.page >= keywordMeta.totalPage ? (
            ""
          ) : (
            <button onClick={handlePageIncrease}>다음</button>
          )}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Keywords;
