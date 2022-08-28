import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_API_ERROR,
} from "./actionTypes"

const initialState = {
    loading: false,
    error: "",
    success: "",
}

const register = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            state = {
                ...state,
                loading: true,
            }
            break
        case REGISTER_USER_SUCCESS:
            state = {
                ...state,
                loading: false,
                success: action.payload
            }
            break
        case REGISTER_API_ERROR:
            state = { ...state, error: action.payload, loading: false }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default register
