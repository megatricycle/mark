import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  requestSyncSubscriptions: ['userId'],
  syncSubscriptions: ['products'],
  requestUpdateProduct: ['productId'],
  setProductManuals: ['productId', 'manuals'],
  requestSetProductManual: ['productId', 'manualId'],
  setProductManual: ['productId', 'newManual']
});

export const ProductsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isSyncingSubscriptions: false,
  isUpdatingProduct: false,
  products: []
});

/* ------------- Reducers ------------- */

export const requestSyncSubscriptions = (state) =>
  state.merge({ isSyncingSubscriptions: true });

export const syncSubscriptions = (state, { products }) =>
  state.merge({ products, isSyncingSubscriptions: false });

export const requestUpdateProduct = (state) =>
  state.merge({ isUpdatingProduct: true });

export const setProductManuals = (state, { productId, manuals }) => {
  const updatedProducts = state.products.map(product => {
    if (product.id === productId) {
      return {
        ...product,
        manuals
      };
    } else {
      return product;
    }
  });

  return state.merge({ products: updatedProducts, isUpdatingProduct: false });
};

export const setProductManual = (state, { productId, newManual }) => {
  const updatedProducts = state.products.map(product => {
    if (product.id === productId) {
      return {
        ...product,
        manuals: product.manuals.map(manual => {
          if (manual.id === newManual.id) {
            return {
              ...manual,
              ...newManual
            };
          } else {
            return manual;
          }
        })
      };
    } else {
      return product;
    }
  });

  return state.merge({ products: updatedProducts });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SYNC_SUBSCRIPTIONS]: syncSubscriptions,
  [Types.REQUEST_UPDATE_PRODUCT]: requestUpdateProduct,
  [Types.SET_PRODUCT_MANUALS]: setProductManuals,
  [Types.SET_PRODUCT_MANUAL]: setProductManual
});
