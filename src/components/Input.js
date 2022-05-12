import React from "react";
import axios from "axios";

import Cards from "./Cards";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Input({ character }) {
  const [inputsearch, setInputSearch] = useState("");
  const [characters, setCharacters] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseInput = await axios.get(
        `https://marvel-backend-p.herokuapp.com/characters/${inputsearch}`
      );
      console.log("handleSubmit", responseInput.character.name);
      setCharacters(responseInput.character.name);
    } catch (error) {
      toast.error("Ce personnage n'existe pas");
    }
  };
  return (
    <div className="research" onSubmit={handleSubmit}>
      <label htmlFor="search" className="input-label">
        Chercher votre personnage
      </label>
      <input
        type="text"
        name="search"
        placeholder="A-Bomb, 3-D Man..."
        value={inputsearch}
        onChange={(event) => {
          setInputSearch(event.target.value);
        }}
      ></input>
      <button type="submit" className="input-button">
        Chercher
      </button>
      <div className="reset">
        {characters ? (
          <>
            <Cards character={character} />
            <button
              onClick={() => {
                setCharacters(null);
              }}
              className="reset-button"
            >
              Reset
            </button>
          </>
        ) : (
          <p>Test</p>
          //   data.results.map((character) => (
          //     <Cards key={character._id} character={character} />
          //   ))
          // )
        )}
      </div>
    </div>
  );
}
export default Input;
