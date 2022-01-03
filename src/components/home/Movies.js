import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import styles from "./Movies.module.scss";
import { moviesState } from "../../recoil/state";

const cx = classNames.bind(styles);

function Movies() {
  const movies = useRecoilValue(moviesState);

  return (
    <ul className={cx("items")}>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link to={`/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Movies;
