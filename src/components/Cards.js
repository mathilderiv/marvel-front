import React from "react";

function Cards({ character }) {
  return (
    <div key={character._id}>
      <p>{character.name}</p>
      <div className="image">
        <img
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={character.name}
        />
      </div>

      <div className="description">
        {character.description ? (
          <p>{character.description}</p>
        ) : (
          <p>En cours...</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
