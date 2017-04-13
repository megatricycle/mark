import { createSelector } from 'reselect';

export const getSubscribedProducts = createSelector(
    [(state) => ({ products: state.products.filter(product => product.isSubscribed) })],
    (subscribedProducts) => subscribedProducts
);

export const getProductById = createSelector(
  [
    (state) => state.products.products,
    (state) => state.product.selectedProductId
  ],
    (products, selectedProductId) => products.filter(product => product.id === selectedProductId)[0] || null
);
