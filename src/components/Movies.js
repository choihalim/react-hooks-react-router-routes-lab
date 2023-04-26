import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = movies.map((movie, index) =>
    <div key={index}>
      Name:{movie.title}
      <br />
      Time: {movie.time}
      <br />
      Genres:
      <ul>
        {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
    </div>
  );
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
}

export default Movies;
