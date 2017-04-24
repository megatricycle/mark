import { call, put } from 'redux-saga/effects';
import UserActions from '../Redux/UserRedux';

export function * login (api, { username, password }) {
  const response = yield call(api.login, username, password);

  if (response.ok) {
    const { id, username } = response.data;

    yield put(UserActions.loginUser(username, id));
  }
  // @TODO: login fail
}

export function * logout (api, action) {
  const response = yield call(api.logout);

  if (response.ok) {
    yield put(UserActions.logout());
  }
  // @TODO: logout fail
}
