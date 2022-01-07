import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { moviesState, querysState } from "../../recoil/state";

const style = {
  height: `5vh`,
  width: `calc(100% - 25rem)`,
  textAlign: `center`,
  color: `#f0f0f0`,
  backgroundColor: `#41495c`,
  lineHeight: `5vh`,
};

function MoviesCount({ total }) {
  const [resultCount, setResultCount] = useState(0);
  const movies = useRecoilValue(moviesState);
  const querys = useRecoilValue(querysState);

  useEffect(() => {
    getMoviesCount();
  });

  useEffect(() => {
    getMoviesCount();
  }, [movies, querys]);

  const getMoviesCount = () => {
    if (total !== undefined) {
      const moviesCount = movies.length;
      setResultCount(total - moviesCount);
    }
  };

  return (
    <div style={style} className="countAlert">
      {String(resultCount).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}개의
      영화가 남아있습니다.
    </div>
  );
}
export default MoviesCount;
