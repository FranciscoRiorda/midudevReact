import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ query });
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.startsWith(" ")) return;
    setQuery(inputValue);

    if (inputValue === " ") {
      setError("No se puede realizar una búsqueda vacía");
      return; // Para que no siga ejecutándose
    }
    if (inputValue.length < 3) {
      setError("La búsqueda debe ser como mínimo de 3 carácteres");
      return;
    }
    if (inputValue.match(/^\d+$/)) {
      setError("No se puede buscar sólo números");
      return;
    }
    setError(null);
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
              placeholder="Avangers, Star Wars, The Matrix..."
            />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </header>
        <main>
          <Movies movies={movies} />
        </main>
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
