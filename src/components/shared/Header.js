import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FiHome } from "react-icons/fi";

import styles from "./Header.module.scss";
import { links } from "../../assets/data/links";
import { gnb } from "../../assets/data/gnb";

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
        {gnb.map((page, index) => (
          <li key={index}>
            <Link to={page.link}>{page.icon}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
