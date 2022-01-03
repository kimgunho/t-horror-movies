import { useEffect } from "react";
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
  const querys = useRecoilValue(querysState);
  const setMetaState = useSetRecoilState(metaState);
  const [movies, setMovies] = useRecoilState(moviesState);

  useEffect(() => {
    setMovies(getApiDatas.results);
  }, [querys]);

  useEffect(() => {
    setMetaState({
      totalPage: getApiDatas.total_pages,
      totalResults: getApiDatas.total_results,
    });
  }, []);

  return <Movies items={movies} />;
}

export default Home;
