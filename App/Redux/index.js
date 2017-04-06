import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: require('./GithubRedux').reducer,
    loginPage: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    user: require('./UserRedux').reducer,
    home: require('./HomeRedux').reducer
  });

  return configureStore(rootReducer, rootSaga);
};
