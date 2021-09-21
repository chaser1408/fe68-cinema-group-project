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
import callApiPost from "utils/callApiPost";
import callApiDelete from "utils/callApiDelete";

const movieApi = {
  fecthAllMovieApi() {
    return callApi(
      `QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
      "GET",
      null
    );
  },
  fetchMovieDetailApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  fetchMovieSeatPlanApi(showTimeId) {
    return callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`);
  },
  // LOG-IN / SIGN-UP
  fetchMovieUserLoginApi(userLogin) {
    return callApi(`QuanLyNguoiDung/DangNhap`, "POST", userLogin);
  },
  // ADMIN MOVIE
  fetchMovieManagerApi() {
    return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  },
  fetchMovieAddMovieUploadHinhApi(formData) {
    return callApiPost(`QuanLyPhim/ThemPhimUploadHinh`, formData);
  },
  fetchMovieInforApi(maPhim) {
    return callApi(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  UpdateMovieUpLoadAPi(formData) {
    return callApiPost(`QuanLyPhim/CapNhatPhimUpload`, formData);
  },
  DeleteMovieUpLoadAPi(maPhim) {
    return callApiDelete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
  // ADMIN USER
  fetchUserManagement() {
    return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
  },
};

export default movieApi;
