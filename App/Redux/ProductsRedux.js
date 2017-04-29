import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  requestSyncSubscriptions: ['userId'],
  syncProducts: ['products'],
  requestUpdateProduct: ['productId'],
  setProductManuals: ['productId', 'manuals'],
  requestSetProductManual: ['productId', 'manualId'],
  setProductManual: ['productId', 'newManual'],
  requestSubscribeProduct: ['userId', 'productId'],
  requestUnsubscribeProduct: ['userId', 'productId']
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

export const syncProducts = (state, { products }) => {
  return state.merge({
    products: [
      ...state.products.map(product => {
        return _.find(products, { id: product.id })
          ? {
            ...product,
            ..._.find(products, { id: product.id })
          }
          : product;
      }),
      ..._.differenceBy(products, state.products, 'id')
    ],
    isSyncingSubscriptions: false
  });
};

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
  [Types.SYNC_PRODUCTS]: syncProducts,
  [Types.REQUEST_UPDATE_PRODUCT]: requestUpdateProduct,
  [Types.SET_PRODUCT_MANUALS]: setProductManuals,
  [Types.SET_PRODUCT_MANUAL]: setProductManual
});
