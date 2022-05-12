import { axios } from "axios";

import { useState, useEffect } from "react";

export default function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  /////requête vers l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-p.herokuapp.com/comics"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error.message);
        // console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading === true ? <p>Chargement en cours</p> : <p>Test</p>;
}
