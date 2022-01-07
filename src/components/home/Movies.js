import classNames from "classnames/bind";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

import styles from "./Movies.module.scss";
import { scoreState } from "../../recoil/state";

const cx = classNames.bind(styles);

function Movies({ movies }) {
  const score = useRecoilValue(scoreState);

  return (
    <ul className={cx("items")}>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link to={`/${movie.id}`}>
            <div className={cx("image")}>
              {movie.vote_average >= score ? (
                <p className={cx("highScore")}>{score}점 이상</p>
              ) : (
                ""
              )}
              {movie.poster_path === null ? (
                <p className={cx("notImg")}>이미지가 없습니다.</p>
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  draggable="false"
                />
              )}
            </div>

            <div className={cx("simpleInfo")}>
              <h3 className={cx("title")}>{movie.title}</h3>
              <p className={cx("score")}>{movie.vote_average}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Movies;
