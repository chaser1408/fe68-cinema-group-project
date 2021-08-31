import {
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_ALL_MOVIE_FAILED,
  START_LOADING,
  STOP_LOADING,
} from "container/clients/MovieList/module/types";

const initialState = {
  listMovie: [],
  errors: {},
  isLoading: false,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_MOVIE_SUCCESS: {
      state.listMovie = payload;
      return { ...state };
    }
    case FETCH_ALL_MOVIE_FAILED: {
      state.errors = payload;
      return { ...state };
    }
    case START_LOADING: {
      state.isLoading = true;
      return { ...state };
    }
    case STOP_LOADING: {
      state.isLoading = false;
      return { ...state };
    }
    default:
      return state;
  }
};

export default movieReducer;
