import React from "react";

function Cards({ character }) {
  return (
    <div className="card text-white bg-dark col-4 col-md-4 mt-4 mx-auto">
      <img
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        className="card-img-top"
        alt="{character.name}"
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          {character.description ? (
            <p>{character.description}</p>
          ) : (
            <p>En cours...</p>
          )}
        </p>
      </div>
    </div>
  );
}

export default Cards;
