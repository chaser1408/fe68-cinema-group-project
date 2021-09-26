import {
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_ALL_MOVIE_FAILED,
  PHIM_DANG_CHIEU,
  PHIM_SAP_CHIEU
  // START_LOADING,
  // STOP_LOADING,
} from "container/clients/MovieList/module/types";

const initialState = {
  listMovie: [],
  errors: {},
  isLoading: false,
  dangChieu: true,
  sapChieu: false,
  arrFilmDefault: [],
};

const movieReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_ALL_MOVIE_SUCCESS: {
       state.listMovie = action.payload;
       state.arrFilmDefault =state.listMovie;
      // state.listMovie= action.listMovie.filter(movie=> movie.sapChieu===state.dangChieu
      //   && movie.dangChieu===state.sapChieu)
      return { ...state };
    }
    case PHIM_SAP_CHIEU:{
      state.sapChieu = !state.sapChieu;

      state.listMovie= action.arrFilmDefault.filter(movie=> movie.sapChieu===state.sapChieu
     )
      return { ...state };

    }
    case PHIM_DANG_CHIEU:{
      state.dangChieu = !state.dangChieu;
      state.listMovie= action.arrFilmDefault.filter(movie=> movie.dangChieu===state.dangChieu)
      return { ...state };

    }
    case FETCH_ALL_MOVIE_FAILED: {
      state.errors = action.payload;
      return { ...state };
    }
    
    
    // case START_LOADING: {
    //   state.isLoading = true;
    //   return { ...state };
    // }
    // case STOP_LOADING: {
    //   state.isLoading = false;
    //   return { ...state };
    // }
    default:
      return state;
  }
};

export default movieReducer;
