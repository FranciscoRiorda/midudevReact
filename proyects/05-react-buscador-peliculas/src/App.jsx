import "./App.css";
import responseMovies from "./mocks/results.json";
import noResponseMovies from "./mocks/no-results.json";
import { Movies } from "./components/Movies";

function App() {
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form action="" className="form">
            <input placeholder="Avangers, Star Wars, The Matrix..." />
            <button type="submit">Buscar</button>
          </form>
        </header>
        <main>
          <Movies movies={mappedMovies} />
        </main>
      </div>
    </>
  );
}
export default App;
