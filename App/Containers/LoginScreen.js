import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import LoginActions from '../Redux/LoginRedux';
import UserActions from '../Redux/UserRedux';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

// Styles
import styles from './Styles/LoginScreenStyle';

class LoginScreen extends React.Component {
  componentWillReceiveProps (newProps) {
    // check if logged in

    if (newProps.user.username) {
      Actions.appScreen({
        type: ActionConst.REPLACE
      });
    }
  }

  componentWillMount () {
    if (this.props.user.username) {
      Actions.appScreen({
        type: ActionConst.REPLACE
      });
    } else {
      this.props.reset();
    }
  }

  render () {
    const { page } = this.props.loginPage;
    const { openSignupPage, openLoginPage, login } = this.props;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          { page === 'LOGIN'
            ? <Login
              login={login}
              openSignup={openSignupPage}
            />
            : <Signup
              openLogin={openLoginPage}
            />
          }
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginPage: state.loginPage,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openSignupPage: () => dispatch(LoginActions.openSignupPage()),
    openLoginPage: () => dispatch(LoginActions.openLoginPage()),
    login: () => dispatch(UserActions.loginUser('tricycle')),
    reset: () => dispatch(LoginActions.reset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
