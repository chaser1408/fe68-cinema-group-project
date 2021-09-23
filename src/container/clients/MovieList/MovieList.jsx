import React, { Component } from "react";
// import { Button } from "antd";
import { connect } from "react-redux";
import "./MovieList.scss";
import { actFetchAllMovieApi } from "./module/actions";
import { Link } from "react-router-dom";
class MovieList extends Component {
  componentDidMount() {
    this.props.fetchAllMovie();
  }

  renderListMovie = () =>
    this.props.listMovie.map((movie) => (
      <div className="col-3 card" key={movie.maPhim}>
        <img className="card-img-top" src={movie.hinhAnh} alt={movie.biDanh} />
        <div className="card-body">
          <h4 className="card-title">{movie.tenPhim}</h4>
          <p className="card-text text-truncate">{movie.moTa}</p>
          {/* <button
            className="btn btn-success"
            to={`/movie-detail/${movie.maPhim}`}
          >
            
          </button> */}
          <button className="btn btn-dark">
            <Link to={`/movie-detail/${movie.maPhim}`}>View detail</Link>
          </button>
        </div>
      </div>
    ));

  render() { 
    const { isLoading } = this.props;
    if (isLoading) {
      return <div className="loader"></div>;
    } else {
      return (
        <div className="container">
          <div className="row">{this.renderListMovie()}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  listMovie: state.movieReducer.listMovie,
  isLoading: state.movieReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllMovie: () => dispatch(actFetchAllMovieApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
