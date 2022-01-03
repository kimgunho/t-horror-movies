import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Movies.module.scss";

const cx = classNames.bind(styles);

function Movies({ movies }) {
  return (
    <ul className={cx("items")}>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link to={`/${movie.id}`}>
            <div className={cx("image")}>
              {movie.vote_average >= 7 ? (
                <p className={cx("highScore")}>평점높음</p>
              ) : (
                ""
              )}
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                draggable="false"
              />
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
