import movieApi from "apis/movieApi";
import { FETCH_MOVIE_MANAGER_FAIL, FETCH_MOVIE_MANAGER_RESQUESS,
    FETCH_MOVIE_MANAGER_SUCCESS } from "./type";

export const actFetchMovieManager =()=>{
    return dispatch=>{
        dispatch({type:FETCH_MOVIE_MANAGER_RESQUESS});
        movieApi.fetchMovieManagerApi()
        .then(res=>{
            console.log(res);
            dispatch({
                type: FETCH_MOVIE_MANAGER_SUCCESS,
                payload: res.data.content,
            })

        }).catch(error=>{
            dispatch({type:FETCH_MOVIE_MANAGER_FAIL,
                payload: error,

            })
            
        })
    }
}