import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  start: null
});

export const StartupTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  started: false
});

export const start = (state) => {
  return state.merge({ started: true });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START]: start
});
