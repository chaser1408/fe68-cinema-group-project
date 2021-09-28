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
import {ThongTinDatVe} from "../_core/models/ThongTinDatVe"

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
  fetchMovieUserLoginApi(userLogin) {
    return callApi(`QuanLyNguoiDung/DangNhap`, "POST", userLogin);
  },
  fetchMovieManagerApi(tenPhim = "") {
    if (tenPhim != "".trim()) {
      return callApi(
        `QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`
      );
    }
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
  fetchTheaterSystemInformation() {
    return callApi(`QuanLyRap/LayThongTinHeThongRap`);
  },
  layThongTinCumRap(maHeThongRap) {
    return callApi(
      `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  },
  taoLichChieu(layThongTinLichChieu) {
    return callApiPost(`QuanLyDatVe/TaoLichChieu`, layThongTinLichChieu);
  },
<<<<<<< HEAD
  // admin user
  fetchUserManagement() {
    return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
  },
  fetchAddUser(clientData) {
    return callApiPost(`QuanLyNguoiDung/ThemNguoiDung`, clientData);
  },
  fetchGetUserInfo(tuKhoa) {
    return callApi(
      `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tuKhoa}`
    );
  },
=======
  
fetchUserManagement() {
  return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
},
//MovieInformation
//  fetchMovieInforAPi(){
//    return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`);
//  }
 fetchShowtimeTheaterSystemApi() {
  return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
},
//api DatVe
fetchDatVeApi ( thongTinDatVe = new ThongTinDatVe()){
  return callApiPost(`QuanLyDatVe/DatVe`, thongTinDatVe)
}
 
>>>>>>> 323a1471e6a4469fd56fcea8b373351d46f2da71
};


export default movieApi;
