import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import "../App.css";

import Cards from "../components/Cards";
import Input from "../components/Input";

export default function Characters() {
  // const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);

  //Requête vers l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/characters?skip=${skip}`
        );
        // console.log(response.data);
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);

  const handleSearch = async (inputsearch) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/characters/${inputsearch}`
      );
      console.log("handleSubmit", response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
      toast.error("Ce personnage n'existe pas");
    }
  };

  return isLoading === true ? (
    <p>Chargement en cours</p>
  ) : (
    <>
      <Input handleSearch={handleSearch} />

      <div className="search">
        {page !== 1 && (
          <button
            className="page-minus"
            onClick={() => {
              setPage(page - 1);
              setSkip(skip - 100);
            }}
          >
            Page précédente
          </button>
        )}
        {skip + 100 < 1493 && (
          <button
            className="page-add"
            onClick={() => {
              setPage(page + 1);
              setSkip(skip + 100);
            }}
          >
            Page suivante
          </button>
        )}
      </div>

      <div className="container bg-white">
        <div className="row">
          {data.map((character) => {
            return (
              <Link
                className="col-12 col-md-4"
                to={`/character/${character._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Cards character={character} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
