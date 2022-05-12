import axios from "axios";
import { useState, useEffect } from "react";

export default function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  //Requête vers l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://marvel-backend-p.herokuapp.com/comics"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return isLoading === true ? (
    <p>Chargement en cours</p>
  ) : (
    <div className="comics">
      <h2>Tous vos comics</h2>
      {data.results.map((comics) => {
        return (
          <div key={comics._id}>
            <p>{comics.title}</p>
          </div>
        );
      })}
    </div>
  );
}
