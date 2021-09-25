import React, { Component } from "react";
// import { Button } from "antd";
import { connect } from "react-redux";
import "./MovieList.scss";
import { actFetchAllMovieApi } from "./module/actions";
import { Link } from "react-router-dom";
import './module/reducers';
import "./module/nagination"
import { Pagination } from "antd";
class MovieList extends Component {
  state= {
    listMovie:[],
    currentPage: 'maphim',
    postperPage: 5,
  }
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
    const {currentPage, postperPage, listMovie} =this.state;
    const indexOfLastPost =currentPage * postperPage;
    const indexOfFirstPost = indexOfLastPost - postperPage;
    const currentPost = listMovie.slice(indexOfLastPost, indexOfLastPost);
    const paginate = pageNum=>this.setState({currentPage: pageNum})
    const { isLoading } = this.props;
    if (isLoading) {
      return <div className="loader"></div>;
    } else {
      return (
        <div className="container">
          <div className="row">{this.renderListMovie()}</div>
          <Pagination postperPage={postperPage} totalPosts={listMovie.length} pagination={paginate} />
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
