import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  openSignupPage: null,
  openLoginPage: null,
  resetLogin: null,
  requestLogin: ['username']
});

export const LoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  page: 'LOGIN',
  isLoggingIn: false
});

/* ------------- Reducers ------------- */

export const openSignupPage = (state, { data }) =>
  state.merge({ page: 'SIGN_UP' });

export const openLoginPage = (state, { data }) =>
  state.merge({ page: 'LOGIN' });

export const resetLogin = (state) =>
  state.merge(INITIAL_STATE);

export const requestLogin = (state) =>
  state.merge({ isLoggingIn: true });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_SIGNUP_PAGE]: openSignupPage,
  [Types.OPEN_LOGIN_PAGE]: openLoginPage,
  [Types.RESET_LOGIN]: resetLogin,
  [Types.REQUEST_LOGIN]: requestLogin
});
