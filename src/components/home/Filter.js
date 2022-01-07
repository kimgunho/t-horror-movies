import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./Filter.module.scss";
import { metaState } from "../../recoil/state";

import Search from "./filter/Search";
import Align from "./filter/Align";
import Genres from "./filter/Genres";
import Keywords from "./filter/Keywords";
import Watch from "./filter/Watch";

const cx = classNames.bind(styles);

function Filter() {
  const totalResults = useRecoilValue(metaState);

  return (
    <div className={cx("filterBox")}>
      <h2 className={cx("total")}>
        {totalResults.total_results
          ? String(totalResults.total_results).replace(
              /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
              ","
            )
          : totalResults.total_results}
        개의 영화를 찾았습니다.
      </h2>
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
