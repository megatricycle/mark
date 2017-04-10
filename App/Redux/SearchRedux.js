import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setSearchTerm: ['term'],
  reset: null
});

export const SearchTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  term: ''
});

/* ------------- Reducers ------------- */

export const setSearchTerm = (state, { term }) =>
  state.merge({ term });

export const reset = (state) =>
  state.merge(INITIAL_STATE);

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SEARCH_TERM]: setSearchTerm,
  [Types.REST]: reset
});
