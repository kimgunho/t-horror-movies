import classNames from "classnames/bind";

import styles from "./Watch.module.scss";

const cx = classNames.bind(styles);

function Watch() {
  return (
    <div className={cx("watch")}>
      <h3 className={cx("title")}>어디서 볼까요?</h3>
      <ul>
        <li>netflix</li>
        <li>netflix</li>
        <li>netflix</li>
        <li>netflix</li>
      </ul>
    </div>
  );
}

export default Watch;
