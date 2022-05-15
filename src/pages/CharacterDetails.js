import axios from "axios";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

function CharacterDetails() {
  const { characterId } = useParams();

  const [character, setCharacter] = useState();
  const [comics, setComics] = useState(null);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/characters/id/${characterId}`
      );
      //   console.log(response);
      setCharacter(response.data);

      const promises = [];

      response.data.comics.forEach((comic) => {
        promises.push(axios.get(`http://localhost:4000/comics/${comic}`));
      });
      await Promise.all(promises).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  });
  return <div>test</div>;
}

export default CharacterDetails;
