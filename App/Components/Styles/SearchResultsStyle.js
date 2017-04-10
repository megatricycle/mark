import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey
  },
  scrollContentContainer: {
    padding: Metrics.baseMargin
  },
  resultsHeader: {
    fontWeight: 'bold',
    fontSize: 16
  },
  listContainer: {
    marginHorizontal: -Metrics.baseMargin
  },
  subtitle: {
    marginLeft: Metrics.baseMargin,
    fontSize: 12
  }
});
