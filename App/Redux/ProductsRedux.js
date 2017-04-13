import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addProduct: ['data']
});

export const ProductsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  products: [{
    id: 0,
    name: 'GearVR',
    provider: 'Samsung',
    isSubscribed: true,
    description: {
      summary: 'Lorem ipsum sit dolor amet.',
      detail: 'Consectetur adipiscing elit. Etiam dictum vel erat eu malesuada. Cras posuere ultricies lacus, at pulvinar ex eleifend eu. Donec eget leo a nulla bibendum tincidunt sit amet in turpis. Morbi porttitor mi eget lacus rutrum imperdiet. Sed purus quam, lobortis et fermentum eu, sodales id nisl. In pellentesque eget metus sit amet feugiat. Praesent quis quam tincidunt ante condimentum mattis. Suspendisse efficitur bibendum mi, vitae vehicula odio fringilla eget. Pellentesque ut facilisis dolor. Nulla volutpat semper ligula vel varius. Praesent ullamcorper condimentum elit, in feugiat metus egestas eu. Integer velit nunc, consequat a cursus quis, interdum id ex. Phasellus ornare lacus sem, eu congue libero mollis at. Etiam quis ultricies ante, quis lobortis magna. Donec convallis tempor posuere. Pellentesque augue tellus, viverra vel malesuada eget, rutrum eu sapien.\n\nVestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.'
    },
    image: '',
    manuals: [{
      name: 'Assembling the Container',
      summary: 'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.',
      step: [{
        instruction: 'Point your camera at the object.'
      }]
    }, {
      name: 'Maintaining the Composure',
      summary: 'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.',
      step: [{
        instruction: 'Point your camera at the object.'
      }]
    }]
  }, {
    id: 1,
    name: 'Galaxy S6',
    provider: 'Samsung',
    isSubscribed: true,
    description: {
      summary: 'Lorem ipsum sit dolor amet.',
      detail: 'Consectetur adipiscing elit. Etiam dictum vel erat eu malesuada. Cras posuere ultricies lacus, at pulvinar ex eleifend eu. Donec eget leo a nulla bibendum tincidunt sit amet in turpis. Morbi porttitor mi eget lacus rutrum imperdiet. Sed purus quam, lobortis et fermentum eu, sodales id nisl. In pellentesque eget metus sit amet feugiat. Praesent quis quam tincidunt ante condimentum mattis. Suspendisse efficitur bibendum mi, vitae vehicula odio fringilla eget. Pellentesque ut facilisis dolor. Nulla volutpat semper ligula vel varius. Praesent ullamcorper condimentum elit, in feugiat metus egestas eu. Integer velit nunc, consequat a cursus quis, interdum id ex. Phasellus ornare lacus sem, eu congue libero mollis at. Etiam quis ultricies ante, quis lobortis magna. Donec convallis tempor posuere. Pellentesque augue tellus, viverra vel malesuada eget, rutrum eu sapien.\n\nVestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.'
    },
    image: '',
    manuals: [{
      name: 'Assembling the Container',
      summary: 'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.',
      step: [{
        instruction: 'Point your camera at the object.'
      }]
    }, {
      name: 'Maintaining the Composure',
      summary: 'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.',
      step: [{
        instruction: 'Point your camera at the object.'
      }]
    }]
  }, {
    id: 2,
    name: 'Z-100',
    provider: 'Lenovo',
    isSubscribed: true,
    description: {
      summary: 'Lorem ipsum sit dolor amet.',
      detail: 'Consectetur adipiscing elit. Etiam dictum vel erat eu malesuada. Cras posuere ultricies lacus, at pulvinar ex eleifend eu. Donec eget leo a nulla bibendum tincidunt sit amet in turpis. Morbi porttitor mi eget lacus rutrum imperdiet. Sed purus quam, lobortis et fermentum eu, sodales id nisl. In pellentesque eget metus sit amet feugiat. Praesent quis quam tincidunt ante condimentum mattis. Suspendisse efficitur bibendum mi, vitae vehicula odio fringilla eget. Pellentesque ut facilisis dolor. Nulla volutpat semper ligula vel varius. Praesent ullamcorper condimentum elit, in feugiat metus egestas eu. Integer velit nunc, consequat a cursus quis, interdum id ex. Phasellus ornare lacus sem, eu congue libero mollis at. Etiam quis ultricies ante, quis lobortis magna. Donec convallis tempor posuere. Pellentesque augue tellus, viverra vel malesuada eget, rutrum eu sapien.\n\nVestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.'
    },
    image: '',
    manuals: [{
      name: 'Assembling the Container',
      summary: 'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.',
      step: [{
        instruction: 'Point your camera at the object.'
      }]
    }, {
      name: 'Maintaining the Composure',
      summary: 'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.',
      step: [{
        instruction: 'Point your camera at the object.'
      }]
    }]
  }, {
    id: 3,
    name: 'Dildo',
    provider: 'Pornhub',
    isSubscribed: false,
    description: {
      summary: 'Lorem ipsum sit dolor amet.',
      detail: 'Consectetur adipiscing elit. Etiam dictum vel erat eu malesuada. Cras posuere ultricies lacus, at pulvinar ex eleifend eu. Donec eget leo a nulla bibendum tincidunt sit amet in turpis. Morbi porttitor mi eget lacus rutrum imperdiet. Sed purus quam, lobortis et fermentum eu, sodales id nisl. In pellentesque eget metus sit amet feugiat. Praesent quis quam tincidunt ante condimentum mattis. Suspendisse efficitur bibendum mi, vitae vehicula odio fringilla eget. Pellentesque ut facilisis dolor. Nulla volutpat semper ligula vel varius. Praesent ullamcorper condimentum elit, in feugiat metus egestas eu. Integer velit nunc, consequat a cursus quis, interdum id ex. Phasellus ornare lacus sem, eu congue libero mollis at. Etiam quis ultricies ante, quis lobortis magna. Donec convallis tempor posuere. Pellentesque augue tellus, viverra vel malesuada eget, rutrum eu sapien.\n\nVestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.'
    },
    image: '',
    manuals: [{
      name: 'Assembling the Container',
      summary: 'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.',
      step: [{
        instruction: 'Point your camera at the object.'
      }]
    }, {
      name: 'Maintaining the Composure',
      summary: 'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.',
      step: [{
        instruction: 'Point your camera at the object.'
      }]
    }]
  }]
});

/* ------------- Reducers ------------- */

// request the data from an api
export const addProduct = (state, { product }) =>
  state.merge({ products: [...state.products, ...product] });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: addProduct
});
