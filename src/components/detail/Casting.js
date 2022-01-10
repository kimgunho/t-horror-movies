import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useRecoilValueLoadable } from "recoil";

import styles from "./Casting.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { getDetailCastingApi } from "../../recoil/detailState";
import SwiperCore, { Navigation } from "swiper";

const cx = classNames.bind(styles);

function Casting() {
  const { state, contents } = useRecoilValueLoadable(getDetailCastingApi);
  const [casting, setCasting] = useState([]);

  useEffect(() => {
    if (state === "hasValue") {
      setCasting(contents.cast);
    } else if (state === "loading") {
      return;
    }
  }, [state]);

  SwiperCore.use([Navigation]);

  return (
    <div className={cx("casting")}>
      <h3 className={cx("title")}>주요 출연진</h3>
      <Swiper
        className={cx("castingSwiper")}
        slidesPerView={7}
        loop={true}
        navigation={true}
      >
        {casting?.map(({ id, profile_path, character, name }) => (
          <SwiperSlide className={cx("slide")} key={id}>
            {profile_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
            ) : (
              <p className={cx("notImg")}>등록된 이미지가 없습니다.</p>
            )}
            <div className={cx("info")}>
              <p className={cx("characterName")}>배역 : {character}</p>
              <p className={cx("originalName")}>이름 : {name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Casting;
