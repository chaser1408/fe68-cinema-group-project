import Header from "components/Header/Header";
import React, { Component } from "react";
import MovieList from "../MovieList/MovieList";
class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <MovieList />
      </>
    );
  }
}

export default Home;
