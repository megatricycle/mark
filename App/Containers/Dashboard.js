import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// Styles
import styles from './Styles/DashboardStyle';

class Dashboard extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.comingSoonText}>Dashboard will come soon! :)</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
