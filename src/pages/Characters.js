import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import "../App.css";

import Cards from "../components/Cards";
import Input from "../components/Input";

export default function Characters() {
  // const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  //Requête vers l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-p.herokuapp.com/characters/`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <p>Chargement en cours</p>
  ) : (
    <div className="container">
      <Input />

      <h2 className="my-4">Tous vos personnages</h2>
      {data.results.map((character) => {
        return (
          <div className="row">
            <Link
              to="/comics"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Cards character={character} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
