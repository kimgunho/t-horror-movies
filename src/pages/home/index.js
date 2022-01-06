import { useEffect, useRef, useState } from "react";
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValueLoadable,
  useRecoilValue,
} from "recoil";

import {
  getMoviesApi,
  moviesState,
  querysState,
  pageState,
} from "../../recoil/state";
import "./index.scss";

import Movies from "../../components/home/Movies";
import Filter from "../../components/home/Filter";
import Skeleton from "../../components/shared/Skeleton";

function Home() {
  const { contents, state } = useRecoilValueLoadable(getMoviesApi);
  const [movies, setMovies] = useRecoilState(moviesState);
  const [loading, setLoading] = useState(true);
  const querys = useRecoilValue(querysState);
  const setPage = useSetRecoilState(pageState);
  const itemEnd = useRef();

  useEffect(() => {
    if (state === "hasValue") {
      const currentMovies = contents.results;
      // console.log(currentMovies.length);
      // if (currentMovies.length < 20) {
      //   setMovies(currentMovies);
      //   return;
      // }

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
      setLoading(false);
    }
  }, [state]);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        (entrise) => {
          if (entrise[0].isIntersecting) {
            setLoading(true);
            setPage((prev) => prev + 1);
          }
        },
        { threshold: 0 }
      );
      observer.observe(itemEnd.current);
    }
  }, [loading]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    setLoading(true);
    window.scrollTo(0, 0);
  }, [querys]);

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
