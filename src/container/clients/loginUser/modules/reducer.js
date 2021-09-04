const initialState = {
    userLogin: {},
    error: "",
}
const UserLoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_LOGIN_RESQUEST':
            state.userLogin = payload;

            return {...state}
        case 'FETCH_LOGIN_SUCCESS':
            state.userLogin = payload;
            return { ...state }

            case 'FETCH_LOGIN_FAIL':
                state.error = payload;
                return { ...state }
        default:
            return state;
    }

}
export default UserLoginReducer;