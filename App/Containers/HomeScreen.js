import React from 'react';
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>HomeScreen Container</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
