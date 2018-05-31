import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  center: {
    alignItems: 'center'
  },
  noAccountText: {
    textAlign: 'center',
    color: Colors.white,
    margin: Metrics.baseMargin
  },
  loginButton: {
    marginTop: Metrics.baseMargin
  },
  logo: {
    width: 200,
    height: 200
  }
});
