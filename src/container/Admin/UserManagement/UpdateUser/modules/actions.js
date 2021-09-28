import { message } from "antd";
import movieApi from "apis/movieApi";
import {
  FETCH_GET_USER_FAIL,
  FETCH_GET_USER_SUCCESS,
  FETCH_USER_MANAGEMENT_FAIL,
  FETCH_USER_MANAGEMENT_SUCCESS,
} from "./types";

// export const actFetchUserManagement = () => (dispatch) => {
//   movieApi
//     .fetchUserManagement()
//     .then((res) => {
//       dispatch({
//         type: FETCH_USER_MANAGEMENT_SUCCESS,
//         payload: res.data.content,
//       });
//     })
//     .catch((err) => {
//       console.log("user management", err.response.data);
//       dispatch({
//         type: FETCH_USER_MANAGEMENT_FAIL,
//         payload: err.response.data,
//       });
//     });
// };

// export const actFetchAddUser = (clientData, pushCallback) => {
//   return async () => {
//     try {
//       let { data } = await movieApi.fetchAddUser(clientData);
//       message.success("Add user success", data);
//       pushCallback("/Admin/UserManagement");
//       console.log(data, "data add user");
//     } catch (error) {
//       console.log(error.response?.data);
//       message.error("Add user fail " + error.response?.data);
//     }
//   };
// };

export const actFetchUserInfo = (taiKhoan, pushCallback) => (dispatch) => {
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
