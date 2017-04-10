import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import ARActivity from '../Services/ARActivity';

// Styles
import styles from './Styles/ManualScreenStyle';

class ManualScreen extends React.Component {
  startAR () {
    ARActivity.startActivity();
  }

  render () {
    const { startAR } = this;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.manualContainer} contentContainerStyle={styles.manualContentContainer}>
          <Text style={styles.summary}>{'Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.'}</Text>
          <Text style={styles.stepsHeader}>{'Steps'}</Text>
          <Text style={styles.step}>{'1. Unscrew the screw.'}</Text>
          <Text style={styles.step}>{'2. Glue the lid.'}</Text>
          <Text style={styles.step}>{'3. Eat popcorn.'}</Text>
        </ScrollView>

        <Button
          title={'Start'}
          buttonStyle={styles.startButton}
          fontSize={24}
          onPress={startAR}
        />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManualScreen);
