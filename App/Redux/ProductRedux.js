import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  showDescription: null,
  hideDescription: null
});

export const ProductTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isDescriptionShown: false
});

/* ------------- Reducers ------------- */

export const showDescription = (state) =>
  state.merge({ isDescriptionShown: true });

export const hideDescription = (state) =>
  state.merge({ isDescriptionShown: false });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_DESCRIPTION]: showDescription,
  [Types.HIDE_DESCRIPTION]: hideDescription
});
