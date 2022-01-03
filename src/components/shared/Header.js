import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { links } from "../../links";
import { gnb } from "../../assets/data/gnb";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <h1 className={cx("logo")}>
        <Link to={links.home}>logo</Link>
      </h1>
      <ul className={cx("gnb")}>
        {gnb.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
