import movieApi from "apis/movieApi";
import {
  //   STOP_LOADING,
  //   START_LOADING,
  FETCH_MOVIE_SEAT_SUCCESS,
  FETCH_MOVIE_SEAT_FAIL,
} from "./types";

// export const actStartLoading = () => ({
//   type: START_LOADING,
// });
// export const actStopLoading = () => ({
//   type: STOP_LOADING,
// });
// export const actFetchMovieSeatPlanSuccess = (movieSeat) => ({
//   type: FETCH_MOVIE_SEAT_SUCCESS,
//   payload: movieSeat,
// });
// export const actFetchMovieSeatPlanFail = (err) => ({
//   type: FETCH_MOVIE_SEAT_FAIL,
//   payload: err,
// });

export const actFetchMovieSeatApi = (showTimeId) => {
  return async dispatch => {
    try{
      let { data, status} = await movieApi.fetchMovieSeatPlanApi(showTimeId)
      dispatch({ 
        type : FETCH_MOVIE_SEAT_SUCCESS, 
        data : data.content
      })
    }catch(err){
      console.log(err.response?.data)
    }
  }
};
