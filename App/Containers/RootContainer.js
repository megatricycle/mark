import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';

import Splash from '../Components/Splash';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render () {
    const { started } = this.props.startupState;

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        { started
          ? <NavigationRouter />
          : <Splash />
        }
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapStateToProps = (state) => {
  return {
    startupState: state.startup
  };
};

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
