const initialState = {
    register: {},
    error: "",
}
const RegisterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_REGISTER_RESQUEST':
            state.register = payload;

            return {...state}
        case 'FETCH_REGISTER_SUCCESS':
            state.register = payload;
            return { ...state }

            case 'FETCH_REGISTER_FAIL':
                state.error = payload;
                return { ...state }
        default:
            return state;
    }

}
export default RegisterReducer;