import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./Filter.module.scss";
import { metaState } from "../../recoil/homeState";
import { numberTextFormat } from "../../utils/format";

import Align from "./filter/Align";
import Score from "./filter/Score";
import Genres from "./filter/Genres";
import Keywords from "./filter/Keywords";
import Watch from "./filter/Watch";

const cx = classNames.bind(styles);

function Filter() {
  const meta = useRecoilValue(metaState);
  const { total_results } = meta;

  return (
    <div className={cx("filterBox")}>
      <h2 className={cx("total")}>
        {total_results ? numberTextFormat(total_results) : total_results}
        개의 공포영화를 찾았습니다.
      </h2>
      <Align />
      <div className={cx("filter")}>
        <h2>필터 검색</h2>
        <Score />
        <Genres />
        <Keywords />
        <Watch />
      </div>
    </div>
  );
}

export default Filter;
