const initialState = {
  userLogin: {},
  loading: false,
  error: "",
};
const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_LOGIN_SUCCESS":
      state.userLogin = payload;
      console.log("payload", payload);
      return { ...state };

    default:
      return state;
  }
};
export default userLoginReducer;
