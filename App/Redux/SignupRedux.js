import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  requestSignup: ['username', 'password'],
  resetSignup: null
});

export const SignupTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isSigningUp: false
});

/* ------------- Reducers ------------- */

export const requestSignup = (state) =>
  state.merge({ isSigningUp: true });

export const resetSignup = (state) =>
  state.merge({ isSigningUp: false });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_SIGNUP]: requestSignup,
  [Types.RESET_SIGNUP]: resetSignup
});
