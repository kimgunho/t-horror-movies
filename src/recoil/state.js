import { atom, selector } from "recoil";

export const querysState = atom({
  key: "querysState",
  default: {
    page: 1,
    lang: "ko",
  },
});

export const metaState = atom({
  key: "metaState",
  default: {},
});

export const moviesState = atom({
  key: "moviesState",
  default: [],
});

export const getMoviesApi = selector({
  key: "getMoviesApi",
  get: async ({ get }) => {
    try {
      const querys = get(querysState);
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${querys.lang}&sort_by=popularity.desc&with_genres=27&include_adult=false&include_video=false&page=${querys.page}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
});

export const getGenresApi = selector({
  key: "getGenresApi",
  get: async () => {
    try {
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=ko`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
});

export const keywordQueryState = atom({
  key: "keywordQueryState",
  default: {
    page: 1,
    query: "",
  },
});

export const getKeywordsApi = selector({
  key: "getKeywordsApi",
  get: async ({ get }) => {
    try {
      const { page, query } = get(keywordQueryState);
      const url = `https://api.themoviedb.org/3/search/keyword?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
});
