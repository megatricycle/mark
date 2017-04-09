import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  openSignupPage: null,
  openLoginPage: null,
  reset: null
});

export const LoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  page: 'LOGIN'
});

/* ------------- Reducers ------------- */

export const openSignupPage = (state, { data }) =>
  state.merge({ page: 'SIGN_UP' });

export const openLoginPage = (state, { data }) =>
  state.merge({ page: 'LOGIN' });

export const reset = (state) =>
  state.merge(INITIAL_STATE);

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_SIGNUP_PAGE]: openSignupPage,
  [Types.OPEN_LOGIN_PAGE]: openLoginPage,
  [Types.RESET]: reset
});
