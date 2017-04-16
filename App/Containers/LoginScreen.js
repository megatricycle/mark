import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import LoginActions from '../Redux/LoginRedux';
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
    const { openSignupPage, openLoginPage, requestLogin } = this.props;

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
    requestLogin: (username) => dispatch(LoginActions.requestLogin(username)),
    resetLogin: () => dispatch(LoginActions.resetLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
