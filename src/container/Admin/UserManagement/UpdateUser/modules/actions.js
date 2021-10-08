import movieApi from "apis/movieApi";
import {
  FETCH_GET_USER_FAIL,
  FETCH_GET_USER_SUCCESS,
  FETCH_UPDATE_USER_FAIL,
  FETCH_UPDATE_USER_SUCCESS,
} from "./types";

export const actFetchUserInfo = (taiKhoan) => {
  return (dispatch) => {
    movieApi
      .fetchGetUserInfo(taiKhoan)
      .then((res) => {
        dispatch({
          type: FETCH_GET_USER_SUCCESS,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_GET_USER_FAIL,
          payload: err.response.data,
        });
      });
  };
};

export const actFetchUserUpdate = (userInfo, history, userLogin) => {
  return (dispatch) => {
    movieApi
      .fetchUpdateUser(userInfo, userLogin.accessToken)
      .then((res) => {
        dispatch({
          type: FETCH_UPDATE_USER_SUCCESS,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_UPDATE_USER_FAIL,
          payload: err.response?.data.content,
        });
      });
  };
};
