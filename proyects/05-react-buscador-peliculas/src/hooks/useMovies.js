import resultsMovies from "../mocks/results.json";
import noResponseMovies from "../mocks/no-results.json";
import { useState } from "react";

export function useMovies({ query }) {
  const [responseMovies, setResponseMovies] = useState([]);

  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (query) {
      fetch(`https://www.omdbapi.com/?apikey=5e8bf6a7&s=${query}`)
      .then( res => res.json())
      .then(json => {
        setResponseMovies(json)
      })
      
      
    } else {
      setResponseMovies(noResponseMovies);
    }
  };

  return { movies: mappedMovies, getMovies };
}
