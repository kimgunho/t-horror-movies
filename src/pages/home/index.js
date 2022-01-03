import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { getMoviesApi, metaState, moviesState } from "../../recoil/state";

import Movies from "../../components/home/Movies";

function Home() {
  const data = useRecoilValue(getMoviesApi);
  const setMetaState = useSetRecoilState(metaState);
  const setMovies = useSetRecoilState(moviesState);

  useEffect(() => {
    setMovies(data.results);
    setMetaState({
      totalPage: data.total_pages,
      totalResults: data.total_results,
    });
  }, [data]);

  return <Movies />;
}

export default Home;
