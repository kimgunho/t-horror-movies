import { useEffect } from "react";
import classNames from "classnames/bind";
import { useRecoilValueLoadable, useRecoilState } from "recoil";

import styles from "./Main.module.scss";
import {
  getDetailMainApi,
  selectedDetailState,
} from "../../recoil/detailState";
import { numberTextFormat } from "../../utils/format";

import Keysords from "./Keywords";
import WatchProviders from "./WatchProviders";
import Loading from "../shared/Loading";

const cx = classNames.bind(styles);

function Main() {
  const { state, contents } = useRecoilValueLoadable(getDetailMainApi);
  const [detailState, setDetailState] = useRecoilState(selectedDetailState);

  useEffect(() => {
    if (state === "hasValue") {
      setDetailState(contents);
    } else if (state === "loading") {
      return;
    }
  }, [state]);

  switch (state) {
    case "hasValue":
      return (
        <div
          style={
            detailState?.backdrop_path !== undefined
              ? {
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,1)), url(https://image.tmdb.org/t/p/original/${detailState?.backdrop_path})`,
                }
              : {}
          }
          className={cx("main")}
        >
          <div className={cx("limiter")}>
            <div className={cx("image")}>
              {detailState?.poster_path !== undefined ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${detailState?.poster_path}`}
                  alt={detailState?.title}
                />
              ) : (
                "이미지가 존재하지 않습니다."
              )}
            </div>
            <div className={cx("info")}>
              <p className={cx("originalTitle")}>
                {detailState?.original_title}
              </p>
              <h2 className={cx("title")}>
                {detailState?.title} {detailState?.id}
              </h2>
              <p className={cx("details")}>
                <span>{detailState?.release_date}</span>
                <span>
                  {detailState?.genres !== undefined
                    ? detailState?.genres.map(({ id, name }) => (
                        <i key={id}>{name}</i>
                      ))
                    : ""}
                </span>
                <span>{detailState?.runtime}</span>
                {detailState?.homepage !== "" ? (
                  <a
                    target="_blank"
                    href={detailState?.homepage}
                    rel="noreferrer"
                  >
                    홈페이지
                  </a>
                ) : (
                  ""
                )}
              </p>
              <WatchProviders />
              <Keysords />

              <p className={cx("score")}>
                {numberTextFormat(detailState?.vote_count)}개의 투표에서
                {detailState?.vote_average}
                점을 유지중입니다.
              </p>
              <div className={cx("detailInfo")}>
                <p className={cx("description")}>{detailState?.tagline}</p>
                {detailState?.overview !== "" ? (
                  <>
                    <h3 className={cx("outline")}>개요</h3>
                    <p className={cx("overview")}>{detailState?.overview}</p>
                  </>
                ) : (
                  <p className={cx("notOutline")}>개요가 없습니다.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    case "loading":
      return <Loading />;
    case "hasError":
      console.error("main component detail error");
      return;
    default:
      break;
  }
}

export default Main;
