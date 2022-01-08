import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FiHome, FiFilm, FiSearch, FiHeart } from "react-icons/fi";

import styles from "./Header.module.scss";
import { links } from "../../links";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <h1>
        <Link to={links.home}>
          <FiHome />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={links.home}>
            <FiFilm />
          </Link>
        </li>
        <li>
          <Link to={links.search}>
            <FiSearch />
          </Link>
        </li>
        <li>
          <Link to={links.search}>
            <FiHeart />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
