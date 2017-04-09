import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    padding: Metrics.baseMargin
  },
  contentContainer: {
    flex: 1,
    paddingTop: Metrics.navBarHeight,
    backgroundColor: Colors.grey
  },
  upperPart: {
    flexDirection: 'row'
  },
  productImage: {
    width: 100,
    height: 100,
    marginHorizontal: Metrics.baseMargin
  },
  productBasicInfo: {
    flex: 1,
    marginBottom: Metrics.doubleBaseMargin
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.black
  },
  productProvider: {
    marginBottom: Metrics.doubleBaseMargin
  },
  subscribeWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  subscribeButton: {
    paddingHorizontal: 25,
    backgroundColor: Colors.green
  },
  productDescriptionContainer: {
    padding: Metrics.baseMargin,
    backgroundColor: Colors.white,
    marginHorizontal: -Metrics.baseMargin
  },
  showMoreButton: {
    color: Colors.accent,
    textAlign: 'center'
  },
  productDescriptionTextContainer: {
    padding: Metrics.baseMargin
  },
  productShortDescription: {
    textAlign: 'center',
    fontSize: 18
  },
  productDescription: {
    color: Colors.black,
    marginTop: Metrics.doubleBaseMargin
  },
  manualsHeader: {
    marginVertical: Metrics.baseMargin,
    fontSize: 24
  },
  listContainer: {
    marginHorizontal: -Metrics.baseMargin,
    marginTop: 0
  },
  showMoreButtonContainer: {
    marginTop: Metrics.baseMargin,
    marginBottom: -Metrics.baseMargin,
    height: 35,
    justifyContent: 'center'
  }
});
