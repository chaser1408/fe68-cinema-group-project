import {
  FETCH_GET_USER_FAIL,
  FETCH_GET_USER_SUCCESS,
  FETCH_UPDATE_USER_FAIL,
  FETCH_UPDATE_USER_SUCCESS,
} from "./types";

const initialState = {
  userInfo: null,
  err: "",
};

const userEditUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GET_USER_SUCCESS:
      console.log(payload, "FETCH_GET_USER_SUCCESS");
      return { ...state, userInfo: payload };

    case FETCH_GET_USER_FAIL:
      return { ...state, err: payload };

    case FETCH_UPDATE_USER_SUCCESS:
      console.log(payload, "FETCH_UPDATE_USER_SUCCESS");

      return { ...state, userInfo: payload };

    case FETCH_UPDATE_USER_FAIL:
      return { ...state, err: payload };

    default:
      return state;
  }
};

export default userEditUserReducer;
