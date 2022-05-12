import logo from "../img/Marvel_Logo.svg.png";

import ironman from "../img/iron-man.png";
import shield from "../img/shield.png";
import spiderman from "../img/spiderman.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/characters">
        <img className="logo-marvel" src={logo} alt="logo-marvel" />
      </Link>
      <div className="logo">
        <div className="character">
          <Link to="/characters">
            <p>PERSONNAGES</p>
            <img src={ironman} alt="logo-ironman" />
          </Link>
        </div>
        <div className="comics">
          <Link to="/comics">
            <p>COMICS</p>
            <img className="comics-logo" src={spiderman} alt="logo-spiderman" />
          </Link>
        </div>
        <div className="favorite">
          <Link to="/favorite">
            <p>FAVORIS</p>
            <img className="favorite-logo" src={shield} alt="logo-favorite" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
