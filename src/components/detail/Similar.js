import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Similar.module.scss";

import TEMP_IMG from "../../assets/images/temp.png";

const cx = classNames.bind(styles);

function Similar() {
  return (
    <div className={cx("similarMovies")}>
      <h3>비슷한 영화 목록</h3>
      <ul>
        <li>
          <Link to="">
            <div className={cx("info")}>
              <h4>title...</h4>
            </div>
            <img src={TEMP_IMG} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Similar;
