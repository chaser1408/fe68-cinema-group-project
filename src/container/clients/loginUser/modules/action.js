import movieApi from "apis/movieApi"
import { FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAIL,
    FETCH_LOGIN_RESQUEST } from "./type";
 
    export const actFetchMovieLoginResquest = (userLogin) => ({
        type: FETCH_LOGIN_RESQUEST,
        payload: userLogin,
    });
    
 
export const actFetchMovieLoginSuccess = (userLogin) => ({
    type: FETCH_LOGIN_SUCCESS,
    payload: userLogin,
});
export const actFetchMovieLoginFail = (err) => ({
    type: FETCH_LOGIN_FAIL,
    payload: err,
});
 
export const  actfetchMovieUserLogin=(userLogin) => {
    return dispatch=>{
         
        dispatch(actFetchMovieLoginResquest(userLogin))
         
        movieApi
         .fetchMovieUserLoginApi()
        .then((res)=>{
            const { content } = res.data;
            dispatch(actFetchMovieLoginSuccess(content));

        }).catch((err)=>{
            dispatch(actFetchMovieLoginFail(err))
            console.log('sai ne', err);
        })
    }
     
     
}