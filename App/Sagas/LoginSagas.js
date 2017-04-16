import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import UserActions from '../Redux/UserRedux';

export function * login (action) {
  yield call(delay, 3000);

  yield put(UserActions.loginUser('tricycle', 0));
}

export function * logout (action) {
  yield call(delay, 3000);

  yield put(UserActions.logout());
}
