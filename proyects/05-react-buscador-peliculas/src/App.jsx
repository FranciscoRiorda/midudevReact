import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);

  const { query, setQuery, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ query, sort });

  const debouncedGerMovies = useCallback(
    debounce((query) => {
      getMovies({ query });
    }, 300),
    [getMovies]);

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ query });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return; // ese return devuelve undefined
    setQuery(newSearch);
    debouncedGerMovies(newSearch); // realizar busqueda cuando escribimos
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              style={{
                border: "1px solid transparent",
                borderColor: error ? "red" : "transparent",
              }}
              onChange={handleChange}
              name="queryFilm"
              value={query}
              placeholder="Avengers, Star Wars, The Matrix..."
            />
            <input type="checkbox" onClick={handleSort} checked={sort}></input>
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </header>
        <main>{loading ? <p>Cargando..</p> : <Movies movies={movies} />}</main>
      </div>
    </>
  );
}
export default App;

// useRef es una referencia a un elemento del dom, mutable y que persiste (su valor no se reinicia) a lo largo de todo el ciclo de vida del componente.
// Cada vez que se modifica, no renderiza nuevamente el componente como el useState.
// -----------------------------------------------------------
// const inputRef = useRef();

//   const handleClick = () => {
//     const refElement = inputRef.current.value;
//   }

//   const handleSubmit = (event) => { // De esta forma puedo tomar el valor de todos los inputs que tenga en el form.Forma no controlada
//     event.preventDefault();
//     const inputs = Object.fromEntries(
//       new window.FormData(event.target)
//     )
//     console.log(inputs);
//   }
