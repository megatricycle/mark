import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: Metrics.section
  },
  noAccountText: {
    textAlign: 'center',
    color: 'white',
    margin: 10
  },
  input: {
    color: 'white',
    margin: 5
  }
});
