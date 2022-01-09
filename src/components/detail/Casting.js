import classNames from "classnames/bind";

import styles from "./Casting.module.scss";

import TEMP_IMG from "../../assets/images/temp.png";

const cx = classNames.bind(styles);

function Casting() {
  return (
    <div className={cx("casting")}>
      <h3>주요 출연진</h3>
      <ul>
        <li>
          <img src={TEMP_IMG} alt="" />
          <p>name</p>
          <p>originName..</p>
        </li>
      </ul>
    </div>
  );
}

export default Casting;
