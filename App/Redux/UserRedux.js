import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginUser: ['username']
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null
});

/* ------------- Reducers ------------- */

// request the data from an api
export const loginUser = (state, data) =>
  state.merge({ username: data.username });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER]: loginUser
});
