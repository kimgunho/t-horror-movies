import { links } from "./links";
import { FiFilm, FiSearch, FiHeart } from "react-icons/fi";

export const gnb = [
  {
    title: "movies",
    link: links.home,
    icon: <FiFilm />,
  },
  {
    title: "search",
    link: links.search,
    icon: <FiSearch />,
  },
  {
    title: "myMovies",
    link: links.home,
    icon: <FiHeart />,
  },
];
