import { useState, useCallback, useEffect } from "react";
import fetch from "./fetch";

const useFetch = (query, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [movies, setMovies] = useState([]);

  const execute = useCallback(() => {
    setStatus("pending");

    return fetch(query)
      .then((response) => {
        setMovies([...response.data.Search]);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  }, [query]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, movies };
};

export default useFetch;
