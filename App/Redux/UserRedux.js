import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginUser: ['username'],
  logout: null
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null
});

/* ------------- Reducers ------------- */

export const loginUser = (state, data) =>
  state.merge({ username: data.username });

export const logout = (state) =>
  state.merge({ username: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER]: loginUser,
  [Types.LOGOUT]: logout
});
