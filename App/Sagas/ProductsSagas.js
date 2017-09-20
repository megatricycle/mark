/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects';
import ProductsActions from '../Redux/ProductsRedux';
import RNFetchBlob from 'react-native-fetch-blob';

export function * syncProducts (api, { userId }) {
  const response = yield call(api.getUserSubscriptions, userId);

  if (response.ok) {
    const products = response.data
      .map(product => ({
        ...product,
        isSubscribed: true,
        manuals: []
      }));

    yield put(ProductsActions.syncProducts(products));
  } else {
    // @TODO: handle error
  }
}

export function * syncProduct (api, { productId }) {
  const response = yield call(api.getProduct, productId);

  if (response.ok) {
    const product = response.data;

    yield put(ProductsActions.syncProducts([product]));
  } else {
    // @TODO: handle error
  }
}

export function * getProductManuals (api, { productId }) {
  const response = yield call(api.getProductManuals, productId);

  if (response.ok) {
    const manuals = response.data;

    yield put(ProductsActions.setProductManuals(productId, manuals));
  } else {
    // @TODO: handle error
  }
}

export function * getProductManual (api, { productId, manualId }) {
  const response = yield call(api.getProductManual, productId, manualId);

  if (response.ok) {
    const manual = response.data;

    const imageURLs = manual.steps.map(step => step.imageTarget);

    const promises = imageURLs.map(url =>
      RNFetchBlob
        .config({
          fileCache: true,
          appendExt: url.substring(url.lastIndexOf('.')),
          trusty: true,
          path: RNFetchBlob.fs.dirs.CacheDir + url
        })
        .fetch('GET', 'http://192.168.1.13:8000' + url, {})
    );

    const result = yield Promise.all(promises);

    const updatedManual = {
      ...manual,
      steps: manual.steps.map((step, i) => ({
        ...step,
        imageTarget: result[i].path()
      }))
    };

    console.tron.log(updatedManual);

    yield put(ProductsActions.setProductManual(productId, updatedManual));
  } else {
    // @TODO: handle error
  }
}

export function * subscribeProduct (api, { userId, productId }) {
  const response = yield call(api.subscribeProduct, userId, productId);

  if (response.ok) {
    const product = response.data;

    yield put(ProductsActions.syncProducts([product]));
    yield put(ProductsActions.requestUpdateProduct(productId));
  } else {
    // @TODO: handle error
  }
}

export function * unsubscribeProduct (api, { userId, productId }) {
  const response = yield call(api.unsubscribeProduct, userId, productId);

  if (response.ok) {
    const product = response.data;

    yield put(ProductsActions.syncProducts([product]));
  } else {
    // @TODO: handle error
  }
}
