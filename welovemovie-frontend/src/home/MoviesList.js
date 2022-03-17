import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../shared/ErrorAlert";
import { listMovies } from "../utils/api";

// MoviesList component
function MoviesList() {
  // initializing state variables for movies with an empty array as the default value
  const [movies, setMovies] = useState([]);
  // initializing state variables for error with default value of null
  const [error, setError] = useState(null);

  // effect hook to get listMovies
  useEffect(() => {
    setError(null);
    // initializing abortController
    const abortController = new AbortController();
    listMovies(abortController.signal).then(setMovies).catch(setError);
    return () => abortController.abort();
    // cleanup
  }, []);

  // mapping through an array of movies 
  const list = movies.map((movie) => (
    <article key={movie.movie_id} className="col-sm-12 col-md-6 col-lg-3 my-2">
      <img
        alt={`${movie.title} Poster`}
        className="rounded"
        src={movie.image_url}
        style={{ width: "100%" }}
      />
      <Link
        to={`/movies/${movie.movie_id}`}
        className="stretched-link text-dark"
      >
        <h3 className="font-poppins-heading text-center mt-2">{movie.title}</h3>
      </Link>
    </article>
  ));

// rendering list component
  return (
    <main className="container">
      <ErrorAlert error={error} />
      <h2 className="font-poppins">Now Showing</h2>
      <hr />
      <section className="row">{list}</section>
    </main>
  );
}

export default MoviesList;
