import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setSelectedManual: ['manualId']
});

export const ManualTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  selectedManualId: null
});

/* ------------- Reducers ------------- */

export const setSelectedManual = (state, { manualId }) =>
  state.merge({ selectedManualId: manualId });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SELECTED_MANUAL]: setSelectedManual
});
