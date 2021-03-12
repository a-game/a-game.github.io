import React from "react";

import { ListLink, Link } from ".";
import Logo from "../images/G-logo-round.svg";
import * as style from "./header.module.scss";

const Header = () => (
  <header>
    <Link className={style.logo} to="/">
      <img src={Logo} alt="Game Logo" />
    </Link>
    <nav>
      <input type="checkbox" />
      <span className={`${style.bar} ${style.first}`} />
      <span className={`${style.bar} ${style.second}`} />
      <span className={`${style.bar} ${style.third}`} />
      <ul className={style.navMenu}>
        <ListLink className="dark-bg" to="/">
          Home
        </ListLink>
        <ListLink className="dark-bg" to="/bio/">
          Who I am
        </ListLink>
        <ListLink className="dark-bg" to="/experience/">
          What I do
        </ListLink>
        <ListLink className="dark-bg" to="/blog/">
          What I think
        </ListLink>
      </ul>
    </nav>
  </header>
);

export default Header;
