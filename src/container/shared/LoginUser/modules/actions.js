import movieApi from "apis/movieApi";
import {
  FETCH_LOGIN_SUCCESS,
  LOGOUT,
  SET_THONG_TIN_NGUOI_DUNG,
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


export const layThongTinNguoiDungAction = (user) => {
  return async (dispatch) => {
      try {
          const result = await movieApi.layThongTinNguoiDungApi(user);
          console.log("actTTND", result)


          if (result.data.statusCode === 200) {
              dispatch({
                  type: SET_THONG_TIN_NGUOI_DUNG,
                  thongTinNguoiDung: result.data.content
              });

          }

          console.log('result', result);

      } catch (error) {
          console.log('error', error.response.data);
      }

  }

}