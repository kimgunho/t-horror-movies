import classNames from "classnames/bind";

import styles from "./Align.module.scss";

const cx = classNames.bind(styles);

function Align() {
  return (
    <div className={cx("align")}>
      <h2>정렬 기준</h2>
      <select>
        <option>인기차순</option>
      </select>
    </div>
  );
}

export default Align;
