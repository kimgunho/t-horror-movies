import classNames from "classnames/bind";
import { useSetRecoilState } from "recoil";

import styles from "./Align.module.scss";
import { querysState } from "../../../recoil/state";

const cx = classNames.bind(styles);

function Align() {
  const setQuerys = useSetRecoilState(querysState);

  const onChange = (event) => {
    const {
      currentTarget: { value },
    } = event;
    setQuerys((prev) => ({
      ...prev,
      sort: value,
    }));
  };

  return (
    <div className={cx("align")}>
      <h2>정렬 기준</h2>
      <select onChange={onChange}>
        <option value="popularity.desc">인기 오름차순</option>
        <option value="popularity.asc">인기 내림차순</option>
        <option value="release_date.desc">출시 오름차순</option>
        <option value="release_date.asc">출시 내림차순</option>
        <option value="revenue.desc">수익 오름차순</option>
        <option value="revenue.asc">수익 내림차순</option>
        <option value="vote_average.desc">점수 오름차순</option>
        <option value="vote_average.asc">점수 내림차순</option>
        <option value="vote_count.desc">투표 오름차순</option>
        <option value="vote_count.asc">투표 내림차순</option>
      </select>
    </div>
  );
}

export default Align;
