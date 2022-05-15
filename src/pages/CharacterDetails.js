import axios from "axios";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import Comic from "../components/Comic";

function CharacterDetails() {
  const { characterId } = useParams();

  const [character, setCharacter] = useState();
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/characters/id/${characterId}`
      );
      console.log(response.data);
      setCharacter(response.data);

      const promises = [];

      response.data.comics.forEach((comic) => {
        promises.push(axios.get(`http://localhost:4000/comics/${comic}`));
      });

      await Promise.all(promises).then((response) => {
        const comicsTemp = [];
        response.forEach((comic) => {
          comicsTemp.push(comic.data);
        });
        setComics([...comicsTemp]);
        setIsLoading(false);
        // console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log("Comics id", comics);

  if (isLoading) return <p>Chargement en cours...</p>;
  return (
    <div>
      <Cards character={character} />
      <div className="row">
        <h3 className="character-title">Les comics de {character.name}</h3>
        {comics.map((comic) => {
          return (
            <>
              <div key={comic._id} className="col-12 col-md-4">
                <Comic comics={comic} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterDetails;
