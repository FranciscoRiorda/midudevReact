import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/moviesService";

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(query);

  const getMovies = useCallback(
    // Este useMemo sirve para no ejecutar getMovies cada vez que se cambia el sort en el buscador. Para guardar un valor cuando esa dependencia cambie.
    // useCallback se utiliza para abreviar la sintaxis del useMemo. useMemo(() =>{},[]). useCallback(,[]). Se usan sólo para funciones dentro de funciones.
    async ({ query }) => {
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
    },[]
  );

  const sortedMovies = useMemo(() => {
    //useMemo para guardar/memorizar algún elemento. No usar siempre, en cosas simple hacer calculo directamente
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { movies: sortedMovies, loading, getMovies };
}
