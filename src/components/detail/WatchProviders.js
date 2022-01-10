import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useRecoilValueLoadable } from "recoil";

import styles from "./WatchProviders.module.scss";
import { getDetailWatchProvidersApi } from "../../recoil/detailState";

const cx = classNames.bind(styles);

function WatchProviders() {
  const { state, contents } = useRecoilValueLoadable(
    getDetailWatchProvidersApi
  );
  const [watchProviders, setWatchProviders] = useState({});

  useEffect(() => {
    if (state === "hasValue") {
      const { KR } = contents.results;
      if (KR) {
        setWatchProviders(() => {
          const { flatrate, buy, rent } = KR;

          return {
            flatrate,
            buy,
            rent,
          };
        });
      }
    }
  }, [state]);

  const drawWatchProviders = (watch, way) => {
    return (
      <div className={cx("inner")}>
        <h2 className={cx("wayTitle")}>{way}</h2>
        <ul className={cx("watchProviders")}>
          {watch !== undefined ? (
            watch.map(({ logo_path, provider_id, provider_name }) => (
              <li key={provider_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
                  alt={provider_name}
                />
              </li>
            ))
          ) : (
            <li className={cx("notWatch")}>{way}서비스는 파악되지 않습니다.</li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div className={cx("contents")}>
      {drawWatchProviders(watchProviders?.flatrate, "구독플랫폼")}
      {drawWatchProviders(watchProviders?.buy, "구매")}
      {drawWatchProviders(watchProviders?.rent, "대여")}
    </div>
  );
}

export default WatchProviders;
