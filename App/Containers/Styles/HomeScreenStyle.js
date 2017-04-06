import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    top: Metrics.navBarHeight
  },
  tabTitle: {
    fontSize: 10
  },
  selectedTitle: {
    marginTop: -1,
    marginBottom: 3,
    color: Colors.accent
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },
  homepageView: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: Colors.grey
  }
});
