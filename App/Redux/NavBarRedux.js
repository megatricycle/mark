import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setTitle: ['title']
});

export const NavBarTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  title: null
});

/* ------------- Reducers ------------- */

// request the data from an api
export const setTitle = (state, { title }) =>
  state.merge({ title });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TITLE]: setTitle
});
