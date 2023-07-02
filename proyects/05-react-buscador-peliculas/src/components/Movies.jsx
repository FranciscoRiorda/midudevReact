export function ListofMovies({ movies }) {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.Title}></img>
          </li>
        ))}
      </ul>
    </>
  );
}

function NoMoviesResult() {
  return (
    <>
      <p>No se han encontrado resultados</p>
    </>
  );
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return(
    hasMovies ? <ListofMovies movies={movies} /> : <NoMoviesResult />
  )
}
