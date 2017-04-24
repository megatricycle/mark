import { call, put } from 'redux-saga/effects';
import _ from 'lodash';

import StartupActions from '../Redux/StartupRedux';
import UserActions from '../Redux/UserRedux';

export function * startup (api, action) {
  const response = yield call(api.whoami);

  if (response.ok) {
    const user = response.data;

    if (_.isEmpty(user)) {
      yield put(UserActions.logout());
    } else {
      const { username, id } = user;

      yield put(UserActions.loginUser(username, id));
    }

    yield put(StartupActions.start());
  }

  // @TODO: error
}
