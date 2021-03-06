import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValueLoadable, useRecoilValue } from "recoil";

import {
  getMoviesApi,
  moviesState,
  querysState,
  pageState,
  metaState,
  scoreState,
} from "../../recoil/homeState";
import styles from "./index.module.scss";

import Movies from "../../components/shared/Movies";
import Filter from "../../components/home/Filter";

const cx = classNames.bind(styles);

function Home() {
  const { contents, state } = useRecoilValueLoadable(getMoviesApi);
  const [movies, setMovies] = useRecoilState(moviesState);
  const [meta, setMeta] = useRecoilState(metaState);
  const [page, setPage] = useRecoilState(pageState);
  const querys = useRecoilValue(querysState);
  const score = useRecoilValue(scoreState);
  const scrollModel = useRef();

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
    scrollModel.current.scrollTop = 0;
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

  return (
    <>
      <div ref={scrollModel} className={cx("container")} onScroll={onScroll}>
        <div className={cx("contents")}>
          <Movies
            movies={movies}
            score={score}
            loading={state === "loading" ? true : false}
          />
        </div>
        <Filter />
        {state === "hasError" ? <div>????????? ???????????????.</div> : ""}
      </div>
    </>
  );
}

export default Home;
