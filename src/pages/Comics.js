import axios from "axios";
import { useState, useEffect } from "react";

import Comic from "../components/Comic";
import ComicsInput from "../components/ComicsInput";

export default function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  // const [inputdata, setInputData] = useState();

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

  // const handleSearch = async (inputsearch) => {
  //   try {
  //     const response = await axios.get(`http://localhost:4000/comics/${inputsearch}`);
  //   console.log(response.data.results);
  //   setInputData(response.data.results);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Ce comics n'existent pas");
  //   }
  // }

  return isLoading === true ? (
    <p>Chargement en cours</p>
  ) : (
    <>
      {/* <ComicsInput handleSearch={handleSearch} /> */}
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
