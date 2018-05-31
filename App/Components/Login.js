import React from 'react';
import {
  Button,
  Text,
  View,
  Image
} from 'react-native';
import TextField from 'react-native-md-textinput';
import LoadingModal from './LoadingModal';
import styles from './Styles/LoginStyle';

import { Colors, Images } from '../Themes';

export default class Login extends React.Component {
  constructor () {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin () {
    const { requestLogin } = this.props;
    const { username, password } = this.refs;

    requestLogin(username.state.text, password.state.text);
  }

  render () {
    const { openSignup, isLoggingIn } = this.props;
    const { handleLogin } = this;

    return (
      <View>
        {isLoggingIn
          ? <LoadingModal
            text={'Logging in'}
          />
          : <View />
        }
        <View style={styles.center}>
          <Image
            source={Images.logo}
            style={styles.logo}
          />
        </View>
        <TextField
          ref={'username'}
          label={'Username'}
          labelColor={Colors.white}
          textColor={Colors.white}
          highlightColor={Colors.accent}
          selectionColor={Colors.accent}
        />
        <TextField
          ref={'password'}
          label={'Password'}
          labelColor={Colors.white}
          textColor={Colors.white}
          highlightColor={Colors.accent}
          selectionColor={Colors.accent}
          secureTextEntry
        />
        <View style={styles.loginButton}>
          <Button
            title={'Login'}
            onPress={handleLogin}
            color={Colors.accent}
          />
        </View>
        <Text style={styles.noAccountText}>No account?</Text>
        <Button
          title={'Sign up'}
          onPress={openSignup}
          color={Colors.accent}
        />
      </View>
    );
  }
}
