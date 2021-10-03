import { LOGOUT, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAIL, SET_THONG_TIN_NGUOI_DUNG } from "./types";
const initialState = {
  userLogin: null,
  loading: false,
  error: "",
  thongTinNguoiDung: null
};
const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LOGIN_SUCCESS:
      state.userLogin = payload;
      console.log("payload", payload);
      return { ...state };

    case FETCH_LOGIN_FAIL:
      state.error = payload;
      return { ...state };

    case LOGOUT:
      return { ...state, userLogin: payload };

    case SET_THONG_TIN_NGUOI_DUNG:
      state.thongTinNguoiDung = payload;
      console.log('thongTinNguoiDung lalalalala', payload)

      // nó ko chạy vô đây, coi chừng lộn reducer
      return {...state}
    default:
      return state;
  }
};
export default userLoginReducer;
