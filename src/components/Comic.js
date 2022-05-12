import React from "react";

const Comic = ({ comics }) => {
  return (
    <div key={comics._id}>
      <p>{comics.title}</p>
      <div className="comics-image">
        <img
          src={comics.thumbnail.path + "." + comics.thumbnail.extension}
          alt={comics.title}
        />
      </div>

      <div className="description">
        {comics.description ? <p>{comics.description}</p> : <p>En cours...</p>}
      </div>
    </div>
  );
};

export default Comic;
