import { links } from "./links";
import { FiSearch, FiHeart } from "react-icons/fi";

export const gnb = [
  {
    title: "search",
    link: links.search,
    icon: <FiSearch />,
  },
  {
    title: "myMovies",
    link: links.myMovies,
    icon: <FiHeart />,
  },
];
