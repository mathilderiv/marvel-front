import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="login">
      <h2>
        Pour vivre l'expérience Marvel merci de vous authentifier ou de créer un
        compte
      </h2>

      <Link to="/signin">
        <button className="S'inscrire" type="button">
          S'inscrire
        </button>
      </Link>

      <Link to="/login">
        <button className="Se connecter" type="button">
          Se connecter
        </button>
      </Link>
    </div>
  );
}
