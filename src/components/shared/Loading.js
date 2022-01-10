import classNames from "classnames/bind";

import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className={cx("dimmed")}>
      <div className={cx("circlea")} />
      <div className={cx("circleb")} />
    </div>
  );
}

export default Loading;
