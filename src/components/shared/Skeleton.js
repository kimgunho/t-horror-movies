import classNames from "classnames/bind";

import styles from "./Skeleton.module.scss";

const cx = classNames.bind(styles);

function Skeleton() {
  return (
    <>
      {Array.from(Array(20)).map((_, index) => (
        <li className={cx("skeleton")} key={index}>
          <div className={cx("image")}></div>
          <div className={cx("simpleInfo")}></div>
        </li>
      ))}
    </>
  );
}

export default Skeleton;
