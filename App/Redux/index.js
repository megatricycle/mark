import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    loginPage: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    user: require('./UserRedux').reducer,
    home: require('./HomeRedux').reducer,
    startup: require('./StartupRedux').reducer,
    navigation: require('./NavigationRedux').reducer,
    navBar: require('./NavBarRedux').reducer,
    product: require('./ProductRedux').reducer,
    products: require('./ProductsRedux').reducer,
    manual: require('./ManualRedux').reducer,
    signup: require('./SignupRedux').reducer
  });

  return configureStore(rootReducer, rootSaga);
};
