import { call, put, takeEvery } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError, loginSuccess } from "./actions"
import { post } from "../../../helpers/api-helper"

const postLogin = data => post('Account/login', data)
function* loginUser({ payload: { user, history } }) {
  try {

    const response = yield call(postLogin, {
      Email: user.email,
      Password: user.password,
    })
    if (response.type !== 'error') {
      localStorage.setItem("authUser", JSON.stringify(response))
      history.push("/dashboard")
      yield put(loginSuccess(response))
    } else {
      yield put(apiError(response))
    }
  } catch (error) {
    yield put(apiError(error))
  }
}
function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")

    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
