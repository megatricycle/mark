import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  showDescription: null,
  hideDescription: null,
  setSelectedProduct: ['productId'],
  requestGetProduct: ['productId']
});

export const ProductTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isDescriptionShown: false,
  selectedProductId: null
});

/* ------------- Reducers ------------- */

export const showDescription = (state) =>
  state.merge({ isDescriptionShown: true });

export const hideDescription = (state) =>
  state.merge({ isDescriptionShown: false });

export const setSelectedProduct = (state, { productId }) =>
  state.merge({ selectedProductId: productId });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_DESCRIPTION]: showDescription,
  [Types.HIDE_DESCRIPTION]: hideDescription,
  [Types.SET_SELECTED_PRODUCT]: setSelectedProduct
});
