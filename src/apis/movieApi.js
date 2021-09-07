// import { GROUP_ID } from "settings/apiConfig";
// import callApi from "utils/callApi";

// const movieApi = {
//   fecthAllMovieApi() {
//     return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
//   },

//   fetchMovieDetailApi(movieId) {
//     return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
//   },
//   fetchMovieSeatPlanApi(showTimeId) {
//     return callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`);
//   },
//   fetchMovieUserLoginApi()
// };

// export default movieApi;

import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";


const movieApi = {
  fecthAllMovieApi() {
    return callApi(
      `QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
      "GET",
      null,
    );
  },
  fetchMovieDetailApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  fetchMovieSeatPlanApi(showTimeId) {
    return callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`);
  },
  fetchMovieUserLoginApi(userLogin) {
    return callApi(`QuanLyNguoiDung/DangNhap`, "POST", userLogin);
  },
};

export default movieApi;
