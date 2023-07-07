import { useRef, useState } from "react";
import { searchMovies } from "../services/moviesService";

export function useMovies({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(query);

  const getMovies = async () => {
    if (query === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = query;
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      //Se ejecuta tanto si pasa por el try como por el catch
      setLoading(false);
    }
  };

  return { movies, loading, getMovies };
}
