// import { loginService } from "apis/authApi";
import movieApi from "apis/movieApi";
import {
  FETCH_LOGIN_SUCCESS,
  LOGOUT,
  //   FETCH_LOGIN_FAIL,
  //   FETCH_LOGIN_RESQUEST,
} from "./types";
import { message } from "antd";

export const actFetchMovieLoginSuccess = (userLogin) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: userLogin,
});

export const loginAction = (user, pushCallback) => {
  return (dispatch) => {
    movieApi
      .fetchMovieUserLoginApi(user)
      .then((rs) => {
        const { content } = rs.data;
        message.success("Xin chao " + content.hoTen, 2);
        // localStorage.setItem("userLogin", JSON.stringify(content));
        if (content.maLoaiNguoiDung === "QuanTri") {
          pushCallback("Admin/MovieManager/");
        } else {
          pushCallback("/");
        }
        console.log("OK 200 Login");
        dispatch(actFetchMovieLoginSuccess(content));
      })
      .catch((err) => {
        message.error(err.response.data.content);
        console.log("Lỗi Login");
      });
  };
};

export const actLogout = () => ({
  type: LOGOUT,
  payload: null,
});
