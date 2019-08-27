import React from "react";

import style from "./header.module.scss";
import { ListLink } from ".";

const Header = () => (
  <header>
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
