import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
  },
  signupText: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.white
  },
  alreadyHaveAccountText: {
    textAlign: 'center',
    color: 'white',
    margin: Metrics.baseMargin
  },
  signupButton: {
    marginTop: Metrics.baseMargin
  }
});
