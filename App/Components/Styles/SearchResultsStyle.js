import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey
  },
  scrollContentContainer: {
    padding: Metrics.baseMargin,
    flex: 1
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
  },
  noResultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noResultText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
