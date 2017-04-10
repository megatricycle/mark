import { Colors, Metrics } from '../../Themes/';

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1
  },
  navBarContainer: {
    height: Metrics.navBarHeight,
    paddingVertical: Metrics.smallMargin,
    paddingHorizontal: 5,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchContainer: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  searchInput: {
    padding: 0,
    backgroundColor: '#501361'
  },
  backButton: {
    marginLeft: Metrics.baseMargin / 2
  },
  navTitle: {
    color: Colors.white,
    fontSize: 16,
    marginLeft: Metrics.baseMargin
  }
};
