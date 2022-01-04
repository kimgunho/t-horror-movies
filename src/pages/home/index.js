import { useEffect, useRef, useState } from "react";
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";

import { getMoviesApi, moviesState, querysState } from "../../recoil/state";

import Movies from "../../components/home/Movies";

function Home() {
  const { contents, state } = useRecoilValueLoadable(getMoviesApi);
  const [movies, setMovies] = useRecoilState(moviesState);
  const [isInfinityState, setIsInfinityState] = useState(false);
  const setQuerys = useSetRecoilState(querysState);
  const itemEnd = useRef();

  useEffect(() => {
    if (state === "hasValue") {
      setMovies((prev) => {
        return [...prev, ...contents.results];
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
        <>
          <Movies movies={movies} />
          <div style={{ height: 1 }} ref={itemEnd}></div>
        </>
      );
    }

    case "loading":
      return <Movies movies={movies} />;
    case "hasError":
      console.error(contents);
      break;
    default:
      console.log("??");
      break;
  }
}

export default Home;
