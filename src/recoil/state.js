import { atom, selector } from "recoil";

export const querysState = atom({
  key: "querysState",
  default: {
    sort: "popularity.desc",
    lang: "ko",
    defaultGenres: "27",
    genres: "",
  },
});

export const pageState = atom({
  key: "pageState",
  default: 1,
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
      const page = get(pageState);
      const { defaultGenres, sort, lang, genres } = querys;
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=${lang}&sort_by=${sort}&with_genres=${defaultGenres}${
        genres === "" ? `` : `,${genres}`
      }&include_adult=false&include_video=false&page=${page}`;
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
