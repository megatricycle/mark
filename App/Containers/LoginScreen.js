import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import LoginActions from '../Redux/LoginRedux';
import SignupActions from '../Redux/SignupRedux';
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
    const { username } = this.props.user;
    const { resetLogin } = this.props;

    if (username) {
      Actions.appScreen({
        type: ActionConst.REPLACE
      });
    } else {
      resetLogin();
    }
  }

  render () {
    const { page, isLoggingIn } = this.props.loginPage;
    const { isSigningUp } = this.props.signup;
    const {
      openSignupPage,
      openLoginPage,
      requestLogin,
      requestSignup,
      resetSignup
    } = this.props;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          { page === 'LOGIN'
            ? <Login
              requestLogin={requestLogin}
              openSignup={openSignupPage}
              isLoggingIn={isLoggingIn}
            />
            : <Signup
              openLogin={openLoginPage}
              isSigningUp={isSigningUp}
              requestSignup={requestSignup}
              resetSignup={resetSignup}
              isLoggingIn={isLoggingIn}
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
    signup: state.signup,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openSignupPage: () => dispatch(LoginActions.openSignupPage()),
    openLoginPage: () => dispatch(LoginActions.openLoginPage()),
    requestLogin: (username, password) => dispatch(LoginActions.requestLogin(username, password)),
    resetLogin: () => dispatch(LoginActions.resetLogin()),
    requestSignup: (username, password) => dispatch(SignupActions.requestSignup(username, password)),
    resetSignup: () => dispatch(SignupActions.resetSignup())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
