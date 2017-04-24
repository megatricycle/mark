import { call, put } from 'redux-saga/effects';
import SignupActions from '../Redux/SignupRedux';
import LoginActions from '../Redux/LoginRedux';

export function * signup (api, { username, password }) {
  const response = yield call(api.signup, username, password);

  yield put(SignupActions.resetSignup());

  if (response.ok) {
    yield put(LoginActions.requestLogin(username, password));
  } else {
    window.alert('Signing up failed.');
  }
  // @TODO: signup fail
}
