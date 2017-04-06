import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/DashboardStyle';

export default class Dashboard extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.comingSoonText}>Dashboard will come soon! :)</Text>
      </View>
    );
  }
}
