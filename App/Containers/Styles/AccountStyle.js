import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    padding: Metrics.baseMargin
  },
  list: {
    marginTop: 0,
    marginHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  title: {
    fontSize: 30
  },
  avatarContainer: {
    width: 70,
    height: 70
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: Metrics.baseMargin
  },
  overlay: {
    backgroundColor: Colors.accent
  }
});
