import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    padding: Metrics.baseMargin
  },
  header: {
    fontSize: 20,
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin
  },
  providerName: {
    fontSize: 16,
    marginBottom: Metrics.baseMargin
  },
  list: {
    marginTop: 0,
    marginHorizontal: -Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  }
});
