import React from "react";
import "../Styles/Header.css";

function Header() {
  return (
    <div className="header__container--box">
      <div className="header__container--name-box">
        <h1>Willz Frank </h1>
        <span typeof="text">FrontEnd Developer</span>
      </div>
      <div className="header__container--address-box">
        <ul>
          <li>
            <a href="willzfrank.netlify.app" target="_blank">
              willzfrank.netlify.app
            </a>
          </li>
          <li>
            <a href="mailto:willzudoh4@gmail.com" target="_top">
              willzudoh4@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+234-703-752-7868" target="_top">
              +234-703-752-7868
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
