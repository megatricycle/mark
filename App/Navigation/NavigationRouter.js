import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import NavBar from './NavBar';

// screens identified by the router
import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='navBarWrapper' navBar={NavBar}>
          <Scene initial key='launchScreen' component={LoginScreen} title='LoginScreen' hideNavBar />
          <Scene key='appScreen' component={HomeScreen} title='appScreen' />
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
