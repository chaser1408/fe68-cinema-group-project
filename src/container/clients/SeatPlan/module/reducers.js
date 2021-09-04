import {
  FETCH_MOVIE_SEAT_FAIL,
  FETCH_MOVIE_SEAT_SUCCESS,
  // START_LOADING,
  // STOP_LOADING,
} from "./types";

const initialState = {
  movieSeat: [],
  loading: false,
  error: "",
};

const movieSeatPlanReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_SEAT_SUCCESS:
      state.movieSeat = payload;
      state.loading = false;
      return { ...state };

    case FETCH_MOVIE_SEAT_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export default movieSeatPlanReducer;
