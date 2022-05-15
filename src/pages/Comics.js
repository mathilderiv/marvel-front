import axios from "axios";
import { useState, useEffect } from "react";

import Comic from "../components/Comic";

export default function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  console.log(data);
  //Requête vers l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  // return <p>Coucou</p>;
  return isLoading === true ? (
    <p>Chargement en cours</p>
  ) : (
    <div className="comics-map">
      <h2>Tous vos comics</h2>
      {data.results.map((comics) => {
        return (
          <div className="comics-cards">
            <Comic comics={comics} />
          </div>
        );
      })}
    </div>
  );
}
