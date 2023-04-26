import React from "react";
import { directors } from "../data";

function Directors() {

  const renderDirectors = directors.map((director, index) =>
    <div key={index}>
      Name: {director.name}
      <br />
      Movies:
      <ul>{director.movies.map((movie, index) => <li key={index}>{movie}</li>)}</ul>
    </div>
  )

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors;
