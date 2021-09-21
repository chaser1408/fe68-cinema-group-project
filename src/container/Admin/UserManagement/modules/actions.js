import movieApi from "apis/movieApi";
import {
  FETCH_USER_MANAGEMENT_FAIL,
  FETCH_USER_MANAGEMENT_SUCCESS,
} from "./types";

export const actFetchUserManagement = () => (dispatch) => {
  movieApi
    .fetchUserManagement()
    .then((res) => {
      dispatch({
        type: FETCH_USER_MANAGEMENT_SUCCESS,
        payload: res.data.content,
      });
    })
    .catch((err) => {
      console.log("user management", err.response.data);
      dispatch({
        type: FETCH_USER_MANAGEMENT_FAIL,
        payload: err.response.data,
      });
    });
};
