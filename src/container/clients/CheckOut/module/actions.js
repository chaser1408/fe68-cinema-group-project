/* eslint-disable no-unused-vars */
import movieApi from "apis/movieApi";
import { FETCH_MOVIE_SEAT_SUCCESS, FETCH_MOVIE_SEAT_FAIL } from "./types";

export const actFetchMovieSeatApi = (showTimeId) => {
  return async (dispatch) => {
    try {
      let { data, status } = await movieApi.fetchMovieSeatPlanApi(showTimeId);
      dispatch({
        type: FETCH_MOVIE_SEAT_SUCCESS,
        data: data.content,
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

export const actDatVe = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      const res = await movieApi.fetchDatVeApi(thongTinDatVe);
      console.log("datve", res.data.content);
      alert("datve Thanh cong");
    } catch (err) {
      console.log("errdatve", err.response?.data);
    }
  };
};

// export const datVe = (thongTinDatVe) => {
//   return async (dispatch) => {
//       try{

//       let res =    await movieApi.fetchDatVeApi(thongTinDatVe)
//       console.log(res)

//           // await dispatch(actGetListTicketRoomApi(thongTinDatVe.maLichChieu))
//          dispatch({
//               type : DAT_VE_HOAN_TAT,
//           })

//           // await dispatch({
//           //     type : HIDING_LOADING
//           // })

//           // let userLogin = getState().QuanLyUserReducer.userLogin
//           // connection.invoke('datGheThanhCong', userLogin, thongTinDatVe.maLichChieu)

//           // Swal.fire({
//           //     title: "Đặt vé thành công",
//           //     icon: "success",
//           //     button: "OK",
//           // }).then(
//           //     () => {
//           //         history.push("/home")
//           //     }
//           // )

//       }catch(err){
//           console.log(err.response?.data)
//       }
//   }
// }
