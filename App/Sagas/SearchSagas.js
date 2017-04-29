import { call, put } from 'redux-saga/effects';
import ProductsActions from '../Redux/ProductsRedux';

export function * searchProducts (api, { query }) {
  const response = yield call(api.searchProducts, query);

  if (response.ok) {
    const products = response.data;

    yield put(ProductsActions.syncProducts(products));
  }
  // @TODO: search fail
}
