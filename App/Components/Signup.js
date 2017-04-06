import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import TextField from 'react-native-md-textinput';
import styles from './Styles/SignupStyle';
import { Colors } from '../Themes';

export default class Signup extends React.Component {
  render () {
    const { openLogin } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.signupText}>Sign Up</Text>
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
        <TextField
          label={'Confirm your Password'}
          labelColor={Colors.white}
          textColor={Colors.white}
          highlightColor={Colors.accent}
          selectionColor={Colors.accent}
          secureTextEntry
        />
        <View style={styles.signupButton}>
          <Button
            title={'Sign up'}
            onPress={this.props.login}
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

// // Prop type warnings
// Signup.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Signup.defaultProps = {
//   someSetting: false
// }
