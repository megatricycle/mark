import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { getManual } from '../Selectors/ManualsSelector';
import ProductsActions from '../Redux/ProductsRedux';
import ARActivity from '../Services/ARActivity';

// Styles
import styles from './Styles/ManualScreenStyle';

class ManualScreen extends React.Component {
  constructor (props) {
    super(props);

    this.startAR = this.startAR.bind(this);
  }

  startAR () {
    const { steps } = this.props.manual;

    ARActivity.startActivity(steps);
  }

  componentWillMount () {
    const { requestSetProductManual } = this.props;
    const { selectedProductId: productId } = this.props.product;
    const { id: manualId } = this.props.manual;

    requestSetProductManual(productId, manualId);
  }

  render () {
    const { startAR } = this;
    const { manual } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.manualContainer} contentContainerStyle={styles.manualContentContainer}>
          <Text style={styles.summary}>{manual.summary}</Text>
          <Text style={styles.stepsHeader}>{'Steps'}</Text>
          {manual.steps && manual.steps.map((step, i) =>
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
    manual: getManual(state),
    product: state.product
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSetProductManual: (productId, manualId) => dispatch(ProductsActions.requestSetProductManual(productId, manualId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManualScreen);
