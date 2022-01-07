import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable, useRecoilValue } from "recoil";

import {
  getMoviesApi,
  moviesState,
  querysState,
  pageState,
  metaState,
} from "../../recoil/state";
import "./index.scss";

import Movies from "../../components/home/Movies";
import Filter from "../../components/home/Filter";
import MoviesCount from "../../components/home/MoviesCount";
import Skeleton from "../../components/shared/Skeleton";

function Home() {
  const { contents, state } = useRecoilValueLoadable(getMoviesApi);
  const [movies, setMovies] = useRecoilState(moviesState);
  const [meta, setMeta] = useRecoilState(metaState);
  const [page, setPage] = useRecoilState(pageState);
  const querys = useRecoilValue(querysState);

  useEffect(() => {
    if (state === "hasValue") {
      const currentMovies = contents.results;

      setMeta({
        total_pages: contents.total_pages,
        total_results: contents.total_results,
      });

      setMovies((prev) => {
        const totalMovies = prev.concat(currentMovies);
        const filterMovies = totalMovies.filter(
          (movie, index) =>
            totalMovies.findIndex((movie2) => {
              return movie.id === movie2.id;
            }) === index
        );
        return filterMovies;
      });
    }
  }, [state]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    window.scrollTo(0, 0);
  }, [querys]);

  const onScroll = (event) => {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      if (meta.total_pages === page) {
        return;
      }
      setPage(page + 1);
    }
  };

  switch (state) {
    case "hasValue": {
      return (
        <>
          <div className="container" onScroll={onScroll}>
            <div className="contents">
              <Movies movies={movies} />
            </div>
            <Filter />
          </div>
          <MoviesCount />
        </>
      );
    }

    case "loading":
      return (
        <>
          <div className="container">
            <div className="contents">
              <Movies movies={movies} />
              <Skeleton />
            </div>
            <Filter />
          </div>
          <MoviesCount />
        </>
      );

    case "hasError":
      console.error(contents);
      break;
    default:
      break;
  }
}

export default Home;
