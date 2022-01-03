import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  getMoviesApi,
  metaState,
  moviesState,
  querysState,
} from "../../recoil/state";

import Movies from "../../components/home/Movies";

function Home() {
  const getApiDatas = useRecoilValue(getMoviesApi);
  const setMetaState = useSetRecoilState(metaState);
  const [movies, setMovies] = useRecoilState(moviesState);
  const [querys, setQuery] = useRecoilState(querysState);
  const itemEnd = useRef();

  // init api meta data
  useEffect(() => {
    setMetaState({
      totalPage: getApiDatas.total_pages,
      totalResults: getApiDatas.total_results,
    });
  }, []);

  // re get api after change query
  useEffect(() => {
    setMovies((prev) => [...prev, ...getApiDatas.results]);
  }, [querys]);

  // infinity scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entrise) => {
        if (entrise[0].isIntersecting) {
          setQuery((prev) => ({
            ...prev,
            page: prev.page + 1,
          }));
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(itemEnd.current);
  }, []);

  return (
    <>
      <Movies movies={movies} />
      <div style={{ height: 1 }} ref={itemEnd}></div>
    </>
  );
}

export default Home;
