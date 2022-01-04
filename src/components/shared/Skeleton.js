import classNames from "classnames/bind";

import styles from "./Skeleton.module.scss";

const cx = classNames.bind(styles);

function Skeleton() {
  return (
    <ul className={cx("items")}>
      {Array.from(Array(20)).map((_, index) => (
        <li key={index}>
          <div className={cx("image")}></div>

          <div className={cx("simpleInfo")}></div>
        </li>
      ))}
    </ul>
  );
}

export default Skeleton;
