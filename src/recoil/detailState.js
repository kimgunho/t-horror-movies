import { atom, selector } from "recoil";

export const movieIdState = atom({
  key: "movieIdState",
  default: null,
});

export const selectedDetailState = atom({
  key: "detailState",
  default: {},
});

export const keywordsState = atom({
  key: "keywordsState",
  default: [],
});

export const watchProvidersState = atom({
  key: "watchProvidersState",
  default: [],
});

export const getDetailMainApi = selector({
  key: "getDetailMainApi",
  get: async ({ get }) => {
    try {
      const movieId = get(movieIdState);
      if (movieId !== null) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=ko`;
        const response = await fetch(url);
        return await response.json();
      }
    } catch (error) {
      console.error("getDetailMainApi");
    }
  },
});

export const getDetailKeywordsApi = selector({
  key: "getDetailKeywordsApi",
  get: async ({ get }) => {
    try {
      const movieId = get(movieIdState);
      if (movieId !== null) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        return await response.json();
      }
    } catch (error) {
      console.error("getDetailKeywordsApi");
    }
  },
});

export const getDetailWatchProvidersApi = selector({
  key: "getDetailWatchProvidersApi",
  get: async ({ get }) => {
    try {
      const movieId = get(movieIdState);
      if (movieId !== null) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        return await response.json();
      }
    } catch (error) {
      console.error("getDetailWatchProvidersApi");
    }
  },
});

export const getDetailCastingApi = selector({
  key: "getDetailCastingApi",
  get: async ({ get }) => {
    try {
      const movieId = get(movieIdState);
      if (movieId !== null) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=ko`;
        const response = await fetch(url);
        return await response.json();
      }
    } catch (error) {
      console.error("getDetailWatchProvidersApi");
    }
  },
});
