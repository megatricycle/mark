import { Colors, Metrics } from '../../Themes/';

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: 5,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchContainer: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  searchInput: {
    padding: 0,
    backgroundColor: '#501361'
  }
};
