import React, { Fragment } from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
import MovieList from "../MovieList/MovieList";

function Home() {
  return (
    <Fragment>
      <MovieList />
      <MovieDetail />
    </Fragment>
  );
}

export default Home;
