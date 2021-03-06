// import { Ghe, thongTinDatVe } from "_core/models/ThongTinPhongVe";
import {
  FETCH_MOVIE_SEAT_FAIL,
  FETCH_MOVIE_SEAT_SUCCESS,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_THONG_TIN_NGUOI_DUNG,
  // START_LOADING,
  // STOP_LOADING,
} from "./types";

const initialState = {
  movieSeat: {},
  loading: false,
  danhSachGheDangDat: [],
  error: "",
  thongTinNguoiDung: null,
};

const movieSeatPlanReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SEAT_SUCCESS: {
      state.movieSeat = action.data;
      return { ...state };
    }
    case FETCH_MOVIE_SEAT_FAIL:
      return { ...state, error: action.error, loading: false };
    case DAT_VE: {
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.slice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      console.log(action);
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    case DAT_VE_HOAN_TAT:
      state.danhSachGheDangDat = [];
      return { ...state };

    case SET_THONG_TIN_NGUOI_DUNG:
      state.thongTinNguoiDung = action.payload;
      console.log("thongTinNguoiDung lalalalala", action.payload);

      // nó ko chạy vô đây, coi chừng lộn reducer
      return { ...state };

    default:
      return state;
  }
};

export default movieSeatPlanReducer1;
