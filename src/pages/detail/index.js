import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import classNames from "classnames/bind";

import styles from "./index.module.scss";
import { movieIdState } from "../../recoil/detailState";

import Main from "../../components/detail/Main";
import Casting from "../../components/detail/Casting";
import Media from "../../components/detail/Media";
import Similar from "../../components/detail/Similar";
import Loading from "../../components/shared/Loading";

const cx = classNames.bind(styles);

function Detail() {
  const [movieId, setMovieId] = useRecoilState(movieIdState);
  const { id } = useParams();

  useEffect(() => {
    setMovieId(id);
  });

  return (
    <div className={cx("container")}>
      {id === movieId ? (
        <>
          <Main />
          <div className={cx("subContainer")}>
            <div className={cx("limiter")}>
              {/* <Casting />
          <Media />
          <Similar /> */}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Detail;
