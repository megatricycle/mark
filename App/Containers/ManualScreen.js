import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { getManual } from '../Selectors/ManualsSelector';
import ARActivity from '../Services/ARActivity';

// Styles
import styles from './Styles/ManualScreenStyle';

class ManualScreen extends React.Component {
  startAR () {
    ARActivity.startActivity();
  }

  render () {
    const { startAR } = this;
    const { manual } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.manualContainer} contentContainerStyle={styles.manualContentContainer}>
          <Text style={styles.summary}>{manual.summary}</Text>
          <Text style={styles.stepsHeader}>{'Steps'}</Text>
          {manual.step.map((step, i) =>
            <Text
              style={styles.step}
              key={i}
            >
              {(i + 1) + '. ' + step.instruction}
            </Text>
          )}
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
    manual: getManual(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManualScreen);
