import movieApi from "apis/movieApi";


// export const actFetchMovieAdd =(formData)=>{
//     return dispatch=>{
//         // dispatch({type:FETCH_MOVIE_MANAGER_RESQUESS});
//         movieApi.fetchMovieAddMovieUploadHinhApi(formData)
//         .then(res=>{
//             console.log(res.data.content)  
//             alert("ok")         
//             dispatch({
//                 type: FETCH_MOVIE_ADD_SUCCESS,
//                 payload: res.data.content,
//             })
//         }).catch(error=>{
//             console.log("sai ne", error.response.data)
//             dispatch({
//                 type:FETCH_MOVIE_ADD_FAIL,
//                 payload: error.response.data
//             })
//         })
//     }
// }

export const actFetchMovieAdd = (formData) => {
    return async (dispatch) => {
        try {
            let {data} = await movieApi.fetchMovieAddMovieUploadHinhApi(formData);
            console.log(data)

        } catch(error) {
            console.log(error.response?.data)

        }

    }
}