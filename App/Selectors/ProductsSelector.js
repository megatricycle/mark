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

export const filterProducts = (state, query) => createSelector(
  [
    (state) => state.products.products
  ],
    (products) => {
      if (query === '') {
        return [];
      }

      const nameResults = products.filter(product =>
        product.name.toLowerCase()
          .indexOf(query.toLowerCase()) === 0
      );
      const providerResults = products.filter(product =>
        product.user.username.toLowerCase()
          .indexOf(query.toLowerCase()) === 0
      );

      return [
        ...nameResults,
        ...providerResults
      ];
    }
)(state);
