import React from 'react';
import {
  Button,
  Text,
  View,
  Image
} from 'react-native';
import TextField from 'react-native-md-textinput';
import styles from './Styles/LoginStyle';

import { Colors, Images } from '../Themes';

export default class Login extends React.Component {
  render () {
    const { login, openSignup } = this.props;

    return (
      <View>
        <View style={styles.center}>
          <Image
            source={Images.logo}
          />
        </View>
        <TextField
          label={'Username'}
          labelColor={Colors.white}
          textColor={Colors.white}
          highlightColor={Colors.accent}
          selectionColor={Colors.accent}
        />
        <TextField
          label={'Password'}
          labelColor={Colors.white}
          textColor={Colors.white}
          highlightColor={Colors.accent}
          selectionColor={Colors.accent}
          secureTextEntry
        />
        <View style={styles.loginButton}>
          <Button
            ref={'loginButton'}
            title={'Login'}
            onPress={login}
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
