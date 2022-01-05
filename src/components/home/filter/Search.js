import classNames from "classnames/bind";

import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx("search")}>
      <input type="text" placeholder="영화 검색" />
    </div>
  );
}

export default Search;
