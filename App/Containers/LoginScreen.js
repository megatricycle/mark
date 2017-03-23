import React from 'react';
import { ScrollView, Button, KeyboardAvoidingView, Linking, NativeModules } from 'react-native';
import { connect } from 'react-redux';

import ARActivity from '../Services/ARActivity';

// Styles
import styles from './Styles/LoginScreenStyle';

class LoginScreen extends React.Component {
  handlePress () {
    ARActivity.startActivity();
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Button
            title="Click me"
            onPress={this.handlePress}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
