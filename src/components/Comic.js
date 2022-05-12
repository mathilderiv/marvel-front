import React from "react";
import shield from "../img/shield.png";

const Comic = ({ comics }) => {
  return (
    <div className="comics-description">
      <div className="display" key={comics._id}>
        <h3>{comics.title}</h3>
        <div className="comics-image">
          <img
            src={comics.thumbnail.path + "." + comics.thumbnail.extension}
            alt={comics.title}
          />
        </div>

        <div className="description">
          {comics.description ? (
            <p>{comics.description}</p>
          ) : (
            <p>En cours...</p>
          )}

          <img
            className="shield-comics"
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
