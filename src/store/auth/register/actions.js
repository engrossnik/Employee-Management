import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_API_ERROR,
} from "./actionTypes"

export const registernUser = (user, history) => {
    return {
        type: REGISTER_USER,
        payload: { user, history },
    }
}
export const registernUserSuccess = user => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: user,
    }
}
export const apiError = error => {
    return {
      type: REGISTER_API_ERROR,
      payload: error,
    }
  }