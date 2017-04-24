import { takeLatest } from 'redux-saga/effects';
import API from '../Services/Api';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { LoginTypes } from '../Redux/LoginRedux';
import { UserTypes } from '../Redux/UserRedux';
import { OpenScreenTypes } from '../Redux/OpenScreenRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { login, logout } from './LoginSagas';
import { openScreen } from './OpenScreenSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(LoginTypes.REQUEST_LOGIN, login, api),
    takeLatest(UserTypes.REQUEST_LOGOUT, logout, api),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen)

    // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ];
}
