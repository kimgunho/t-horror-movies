import classNames from "classnames/bind";

import styles from "./Keywords.module.scss";

const cx = classNames.bind(styles);

function Keywords() {
  return (
    <div className={cx("keywords")}>
      <h3 className={cx("title")}>관련 키워드로 찾기</h3>
      <input className={cx("keywordSearch")} type="text" />
      <ul>
        <li>aaa</li>
        <li className={cx("checked")}>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
      </ul>
      <p className={cx("controls")}>
        <button>이전</button>
        <button>다음</button>
      </p>
    </div>
  );
}

export default Keywords;
