// import { loginService } from "apis/authApi";
import movieApi from "apis/movieApi";
import {
  FETCH_LOGIN_SUCCESS,
  LOGOUT
  //   FETCH_LOGIN_FAIL,
  //   FETCH_LOGIN_RESQUEST,
} from "./types";
import { message } from "antd";
// import { Redirect } from "react-router-dom";

// export const actFetchMovieLoginResquest = (userLogin) => ({
//   type: FETCH_LOGIN_RESQUEST,
//   payload: userLogin,
// });

export const actFetchMovieLoginSuccess = (userLogin) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: userLogin,
});
// export const actFetchMovieLoginFail = (err) => ({
//   type: FETCH_LOGIN_FAIL,
//   payload: err,
// });

// export const actfetchMovieUserLogin = (userLogin) => {
//   return (dispatch) => {
//     dispatch(actFetchMovieLoginResquest(userLogin));
//     console.log(userLogin, "userLogin");
//     movieApi
//       .fetchMovieUserLoginApi(userLogin)
//       .then((res) => {
//         const { content } = res.data;
//         console.log(res, "lay duoc roi");
//         dispatch(actFetchMovieLoginSuccess(content));
//       })
//       .catch((err) => {
//         dispatch(actFetchMovieLoginFail(err));
//         console.log("sai ne", err);
//       });
//   };
// };

export const loginAction = (user, pushCallback) => {
  // const loginPromise = loginService(user);
  return (dispatch) => {
    // loginPromise
    movieApi
      .fetchMovieUserLoginApi(user)
      .then((rs) => {
        const { content } = rs.data;
        message.success("Xin chao " + content.hoTen, 2);
        localStorage.setItem("userLogin", JSON.stringify(content));
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
