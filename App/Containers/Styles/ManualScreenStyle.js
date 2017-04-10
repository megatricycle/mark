import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight
  },
  manualContainer: {
    backgroundColor: Colors.white
  },
  manualContentContainer: {
    padding: Metrics.baseMargin
  },
  startButton: {
    marginLeft: 0,
    marginRight: 0,
    height: 50,
    backgroundColor: Colors.accent
  },
  summary: {
    marginBottom: Metrics.baseMargin
  },
  stepsHeader: {
    marginBottom: Metrics.baseMargin,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.black
  },
  step: {
    fontSize: 16
  }
});
