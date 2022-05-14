import axios from "axios";

import { useState, useEffect } from "react";

export default function Pagination() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://marvel-backend-p.herokuapp.com/characters"
        );
        setPosts(response.data);
        setIsLoading(false);
        // console.log("test" + posts);
      } catch (error) {
        // console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading === true ? <p>Chargement en cours</p> : <p>Test</p>;
}
