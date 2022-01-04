import { useEffect, useRef, useState } from "react";
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";

import { getMoviesApi, moviesState, querysState } from "../../recoil/state";
import "./index.scss";

import Movies from "../../components/home/Movies";
import Filter from "../../components/home/Filter";
import Skeleton from "../../components/shared/Skeleton";

function Home() {
  const { contents, state } = useRecoilValueLoadable(getMoviesApi);
  const [movies, setMovies] = useRecoilState(moviesState);
  const [isInfinityState, setIsInfinityState] = useState(false);
  const setQuerys = useSetRecoilState(querysState);
  const itemEnd = useRef();

  useEffect(() => {
    if (state === "hasValue") {
      const currentMovies = contents.results;

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

      setIsInfinityState(true);
    }
  }, [state]);

  useEffect(() => {
    if (itemEnd.current !== undefined) {
      const observer = new IntersectionObserver(
        (entrise) => {
          if (entrise[0].isIntersecting) {
            setIsInfinityState(false);
            setQuerys((prev) => ({
              ...prev,
              page: prev.page + 1,
            }));
          }
        },
        { threshold: 0 }
      );
      observer.observe(itemEnd.current);
    }
  }, [isInfinityState]);

  switch (state) {
    case "hasValue": {
      return (
        <div className="container">
          <div className="contents">
            <Movies movies={movies} />
            <div style={{ height: 1 }} ref={itemEnd}></div>
          </div>
          <Filter />
        </div>
      );
    }

    case "loading":
      return (
        <div className="container">
          <div className="contents">
            <Movies movies={movies} />
            <Skeleton />
          </div>
          <Filter />
        </div>
      );
    case "hasError":
      console.error(contents);
      break;
    default:
      break;
  }
}

export default Home;
