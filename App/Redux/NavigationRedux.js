import { createReducer } from 'reduxsauce';
import { ActionConst } from 'react-native-router-flux';
import Immutable from 'seamless-immutable';

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  scene: {}
});

/* ------------- Reducers ------------- */

export const focus = (state, action) =>
  state.merge({ scene: action.scene });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [ActionConst.FOCUS]: focus
});
