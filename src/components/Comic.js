import React from "react";
import shield from "../img/shield.png";

const Comic = ({ comics }) => {
  return (
    <div className="card text-white bg-black  mt-4 mx-auto">
      <div className="card-body" key={comics._id}>
        <h3>{comics.title}</h3>
        <img
          src={comics.thumbnail.path + "." + comics.thumbnail.extension}
          className="card-img-top"
          alt={comics.title}
        />

        <div className="card-text">
          {comics.description ? (
            <p>{comics.description}</p>
          ) : (
            <p>En cours...</p>
          )}

          <img
            className="shields-comics"
            style={{ width: 40, height: 40 }}
            src={shield}
            alt="favorite-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Comic;
