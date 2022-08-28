import { call, put, takeEvery } from "redux-saga/effects"

// Login Redux States
import {  REGISTER_USER } from "./actionTypes"
import { apiError,registernUserSuccess } from "./actions"
import { post } from "../../../helpers/api-helper"

const postRegister = data => post('users', data)
function* registerUser({ payload: { user, history } }) {
  debugger;
  try {

    const response = yield call(postRegister, {
      username :user.username,
      email: user.email,
      password: user.password,
    })
    debugger;
    // if (response.type !== 'error') {
    //   localStorage.setItem("authUser", JSON.stringify(response))
    //   history.push("/dashboard")
    //   yield put(registernUserSuccess(response))
    // } else {
    //   yield put(apiError(response))
    // }
  } catch (error) {
    yield put(apiError(error))
  }
}

function* registerSaga() {
  yield takeEvery(REGISTER_USER, registerUser)
}

export default registerSaga
