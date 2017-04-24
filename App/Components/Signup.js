import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import TextField from 'react-native-md-textinput';
import styles from './Styles/SignupStyle';
import LoadingModal from './LoadingModal';
import { Colors } from '../Themes';

export default class Signup extends React.Component {
  handleSignup = () => {
    const { username, password } = this.refs;
    const { requestSignup } = this.props;

    requestSignup(username.state.text, password.state.text);
  }

  render () {
    const { openLogin, isSigningUp, isLoggingIn } = this.props;
    const { handleSignup } = this;

    return (
      <View style={styles.container}>
        {isSigningUp
          ? <LoadingModal
            text={'Creating your account'}
          />
          : <View />
        }
        {isLoggingIn
          ? <LoadingModal
            text={'Logging in'}
          />
          : <View />
        }
        <Text style={styles.signupText}>Sign Up</Text>
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
        <View style={styles.signupButton}>
          <Button
            title={'Sign up'}
            onPress={handleSignup}
            color={Colors.accent}
          />
        </View>
        <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
        <Button
          title={'Log in'}
          color={Colors.accent}
          onPress={openLogin}
        />
      </View>
    );
  }
}
