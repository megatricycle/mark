// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// our "constructor"
const create = (baseURL = 'http://192.168.1.27:8000') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  });

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce);
  }

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  // const getRoot = () => api.get('');
  // const getRate = () => api.get('rate_limit');
  // const getUser = (username) => api.get('search/users', {q: username});
  const whoami = () =>
    api.get('session/whoami');

  const login = (username, password) =>
    api.post('session/login', {
      username, password
    });

  const logout = () =>
    api.post('session/logout');

  const signup = (username, password) =>
    api.post('users/signup', {
      username,
      password,
      userType: 'consumer'
    });

  const getUserSubscriptions = (userId) =>
    api.get(`users/${userId}/subscriptions`);

  const getProduct = (productId) =>
    api.get(`products/${productId}`);

  const getProductManuals = (productId) =>
    api.get(`products/${productId}/manuals`);

  const getProductManual = (productId, manualId) =>
    api.get(`products/${productId}/manuals/${manualId}`);

  const searchProducts = (query) =>
    api.get('products', { query });

  const subscribeProduct = (userId, productId) =>
    api.post(`users/${userId}/subscriptions/${productId}`);

  const unsubscribeProduct = (userId, productId) =>
    api.delete(`users/${userId}/subscriptions/${productId}`);

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    login,
    logout,
    whoami,
    signup,
    getUserSubscriptions,
    getProduct,
    getProductManuals,
    getProductManual,
    searchProducts,
    subscribeProduct,
    unsubscribeProduct
  };
};

// let's return back our create method as the default.
export default {
  create
};
