import { createSelector } from 'reselect';

export const getManual = createSelector(
  [
    (state) => state.products.products,
    (state) => state.product.selectedProductId,
    (state) => state.manual.selectedManualId
  ],
    (products, selectedProductId, selectedManualId) => {
      if (selectedProductId === null || selectedManualId === null) return null;

      return products
            .filter(product => product.id === selectedProductId)[0]
            .manuals
            .filter(manual => manual.id === selectedManualId)[0];
    }
);
