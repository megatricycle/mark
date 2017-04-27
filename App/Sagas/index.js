import { takeLatest } from 'redux-saga/effects';
import API from '../Services/Api';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { SignupTypes } from '../Redux/SignupRedux';
import { LoginTypes } from '../Redux/LoginRedux';
import { UserTypes } from '../Redux/UserRedux';
import { OpenScreenTypes } from '../Redux/OpenScreenRedux';
import { ProductsTypes } from '../Redux/ProductsRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { login, logout } from './LoginSagas';
import { signup } from './SignupSagas';
import { openScreen } from './OpenScreenSagas';
import { syncProducts, getProductManuals, getProductManual } from './ProductsSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(LoginTypes.REQUEST_LOGIN, login, api),
    takeLatest(UserTypes.REQUEST_LOGOUT, logout, api),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),
    takeLatest(SignupTypes.REQUEST_SIGNUP, signup, api),
    takeLatest(ProductsTypes.REQUEST_SYNC_SUBSCRIPTIONS, syncProducts, api),
    takeLatest(ProductsTypes.REQUEST_UPDATE_PRODUCT, getProductManuals, api),
    takeLatest(ProductsTypes.REQUEST_SET_PRODUCT_MANUAL, getProductManual, api)
  ];
}
