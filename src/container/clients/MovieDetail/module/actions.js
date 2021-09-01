import movieApi from "apis/movieApi";
import { actFetchAllMovieFailed, actFetchAllMovieSuccess } from "container/clients/MovieList/module/actions";
import {
    STOP_LOADING, START_LOADING, FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_FAIL
} from "./types"


export const actStartLoading = () => ({
    type: START_LOADING,
})
export const actStopLoading = () => ({
    type: STOP_LOADING,

})
export const actFetchMovieDetailSuccess = (movieDetail) => ({
    type: FETCH_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,

})
export const actFetchMovieDetailFail = (err) => ({
    type: FETCH_MOVIE_DETAIL_FAIL,
    payload: err,
})


export const actFetchMovieDetailApi = (movieId) => {
    return (dispatch) => {
        
        // const { params } = this.props.match;
        movieApi
            .fetchMovieDetailApi(movieId)
            .then(res => {
                console.log(res);
                  dispatch(actFetchAllMovieSuccess)(res.data.content);
            })
            // .catch(err => console.log(err));
            .catch((err) =>  dispatch(actFetchAllMovieFailed(err)));
    }
}
