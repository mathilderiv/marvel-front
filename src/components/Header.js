import logo from "../img/Marvel_Logo.svg.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/characters">
        {" "}
        <img className="logo" src={logo} alt="logo-marvel" />
      </Link>

      <Link to="/characters">
        <p>Personnages</p>
      </Link>

      <Link to="/comics">
        <p>Comics</p>
      </Link>

      <p>Favoris</p>
    </div>
  );
};

export default Header;
