import React from "react";

import { useState, useEffect } from "react";

function Input({ handleSearch }) {
  const [inputsearch, setInputSearch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("handleSubmit");
    handleSearch(inputsearch);
  };
  return (
    <form className="research" onSubmit={handleSubmit}>
      <label htmlFor="search" className="input-label">
        Votre personnage
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
    </form>
  );
}
export default Input;
