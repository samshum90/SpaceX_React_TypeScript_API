import React from "react";

import "./header.scss";
import { Logo } from "../../assets";
import { RefreshIcon } from "../../assets/icon";

const Header: React.FC<{}> = () => {
  return (
    <header className="header">
      <div className="header__title">
        <img className="header__title-logo" src={Logo} alt="Space X logo" />
        <h1 className="header__title-text">Launches</h1>
      </div>
      <button className="header__button" type="button">
        Reload Data
        <img
          className="header__button-icon"
          src={RefreshIcon}
          alt="Refresh Icon"
        />
      </button>
    </header>
  );
};

export default Header;
