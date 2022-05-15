import axios from "axios";
import { useState, useEffect } from "react";

import Comic from "../components/Comic";
import ComicsInput from "../components/ComicsInput";

export default function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [inputdata, setInputData] = useState();
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);

  console.log(data);
  //Requête vers l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?skip=${skip}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);

  const handleSearch = async (inputsearch) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/comics/${inputsearch}`
      );
      console.log(response.data.results);
      setInputData(response.data.results);
    } catch (error) {
      console.log(error);
      // toast.error("Ce comics n'existent pas");
    }
  };

  return isLoading === true ? (
    <p>Chargement en cours</p>
  ) : (
    <>
      <ComicsInput handleSearch={handleSearch} />
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
          {data.results.map((comics) => {
            return (
              <div className="col-12 col-md-4">
                <Comic comics={comics} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
