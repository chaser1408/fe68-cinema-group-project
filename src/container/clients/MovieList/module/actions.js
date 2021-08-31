import movieApi from "apis/movieApi";
import {
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_ALL_MOVIE_FAILED,
  START_LOADING,
  STOP_LOADING,
} from "./types";

export const actStartLoading = () => ({
  type: START_LOADING,
});

export const actStopLoading = () => ({
  type: STOP_LOADING,
});

export const actFetchAllMovieSuccess = (movieList) => {
  return {
    type: FETCH_ALL_MOVIE_SUCCESS,
    payload: movieList,
  };
};

export const actFetchAllMovieFailed = (err) => {
  return {
    type: FETCH_ALL_MOVIE_FAILED,
    payload: err,
  };
};

export const actFetchAllMovieApi = () => {
  return (dispatch) => {
    dispatch(actStartLoading());

    movieApi
      .fecthAllMovieApi()
      .then((res) => {
        dispatch(actFetchAllMovieSuccess(res.data.content));
        dispatch(actStopLoading());
      })
      .catch((err) => {
        dispatch(actFetchAllMovieFailed(err));
        dispatch(actStopLoading());
      });
  };
};
