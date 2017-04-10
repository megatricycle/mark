import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import NavBar from './NavBar';

// screens identified by the router
import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';
import ProductScreen from '../Containers/ProductScreen';
import ManualScreen from '../Containers/ManualScreen';

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

const RouterWithRedux = connect()(Router);

class NavigationRouter extends Component {
  render () {
    return (
      <RouterWithRedux>
        <Scene key='navBarWrapper' navBar={NavBar}>
          <Scene initial key='loginScreen' component={LoginScreen} title='LoginScreen' hideNavBar />
          <Scene key='appScreen' component={HomeScreen} title='appScreen' />
          <Scene key='productScreen' component={ProductScreen} title='productScreen' />
          <Scene key='manualScreen' component={ManualScreen} title='manualScreen' />
        </Scene>
      </RouterWithRedux>
    );
  }
}

export default NavigationRouter;
