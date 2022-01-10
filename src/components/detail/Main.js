import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Main.module.scss";

import TEMP_IMG from "../../assets/images/temp.png";

const cx = classNames.bind(styles);

function Main() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,1)), url(${TEMP_IMG})`,
      }}
      className={cx("main")}
    >
      <div className={cx("limiter")}>
        <div className={cx("image")}>
          <img src={TEMP_IMG} alt="" />
        </div>
        <div className={cx("info")}>
          <p className={cx("originalTitle")}>
            Resident Evil: Welcome to Raccoon City
          </p>
          <h2 className={cx("title")}>movie title</h2>
          <p className={cx("details")}>
            <span>개봉날짜</span>
            <span>장르</span>
            <span>런타임</span>
            <Link to="">홈페이지</Link>
          </p>
          <ul className={cx("keywords")}>
            <li>ssss</li>
            <li>ssss</li>
            <li>ssss</li>
            <li>ssss</li>
          </ul>
          <p className={cx("score")}>180개의 투표에서 6점을 유지중입니다.</p>
          <div className={cx("detailInfo")}>
            <p className={cx("description")}>
              모든 이야기는 이곳에서 시작되었다
            </p>
            <h3 className={cx("outline")}>개요</h3>
            <p className={cx("overview")}>
              거대 제약회사 '엄브렐라'가 철수한 후 폐허가 된 '라쿤시티'. 어릴 적
              끔찍한 사건을 겪고 고향을 떠났던 클레어가 돌아온 그날 밤,
              라쿤시티는 좀비 바이러스에 감염되어 순식간에 지옥으로 돌변한다.
              남은 시간은 7시간, 죽음의 도시를 탈출하라!
            </p>
          </div>

          <ul className={cx("control")}>
            <li>나의 영화 추가</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
