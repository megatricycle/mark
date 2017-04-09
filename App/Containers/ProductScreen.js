import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import NavBarActions from '../Redux/NavBarRedux';
import ProductActions from '../Redux/ProductRedux';

// Styles
import styles from './Styles/ProductScreenStyle';
import { Images } from '../Themes';

class ProductScreen extends React.Component {
  componentWillMount () {
    this.props.setTitle('GearVR');
    this.props.hideDescription();
  }

  render () {
    const { showDescription } = this.props;
    const { isDescriptionShown } = this.props.product;

    return (
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.upperPart}>
            <Image
              source={Images.dummy}
              style={styles.productImage}
            />
            <View style={styles.productBasicInfo}>
              <Text style={styles.productName}>GearVR</Text>
              <Text style={styles.productProvider}>Samsung</Text>
              <View style={styles.subscribeWrapper}>
                <Button
                  title={'Subscribe'}
                  onPress={() => {}}
                  buttonStyle={styles.subscribeButton}
                />
              </View>
            </View>
          </View>
          <View style={styles.productDescriptionContainer}>
            <View style={styles.productDescriptionTextContainer}>
              <Text
                style={styles.productShortDescription}
              >
                Lorem ipsum sit dolor amet.
              </Text>

              { isDescriptionShown
                ? <Text
                  style={styles.productDescription}
                >
                  Consectetur adipiscing elit. Etiam dictum vel erat eu malesuada. Cras posuere ultricies lacus, at pulvinar ex eleifend eu. Donec eget leo a nulla bibendum tincidunt sit amet in turpis. Morbi porttitor mi eget lacus rutrum imperdiet. Sed purus quam, lobortis et fermentum eu, sodales id nisl. In pellentesque eget metus sit amet feugiat. Praesent quis quam tincidunt ante condimentum mattis. Suspendisse efficitur bibendum mi, vitae vehicula odio fringilla eget. Pellentesque ut facilisis dolor. Nulla volutpat semper ligula vel varius. Praesent ullamcorper condimentum elit, in feugiat metus egestas eu. Integer velit nunc, consequat a cursus quis, interdum id ex. Phasellus ornare lacus sem, eu congue libero mollis at. Etiam quis ultricies ante, quis lobortis magna. Donec convallis tempor posuere. Pellentesque augue tellus, viverra vel malesuada eget, rutrum eu sapien.
                  {'\n\n'}
                  Vestibulum eleifend imperdiet felis. Ut eleifend risus sed tristique scelerisque. Mauris magna risus, porttitor vitae nulla eu, molestie volutpat eros. Suspendisse ac metus aliquet, sodales nulla sit amet, ullamcorper nulla. Curabitur ultricies vulputate commodo. Nullam sed tincidunt nisl, a rhoncus mi. Integer consectetur efficitur condimentum.
                </Text>
                : <TouchableNativeFeedback onPress={showDescription}>
                  <View style={styles.showMoreButtonContainer}>
                    <Text style={styles.showMoreButton}>Read more</Text>
                  </View>
                </TouchableNativeFeedback>
              }
            </View>
          </View>

          <View>
            <Text style={styles.manualsHeader}>Manuals</Text>

            <List containerStyle={styles.listContainer}>
              <ListItem
                key={1}
                title={'Assembling the Container'}
                onPress={() => { window.alert('Clicking a Manual'); }}
              />
              <ListItem
                key={2}
                title={'Maintaining the Grid'}
                onPress={() => { window.alert('Clicking a Manual'); }}
              />
              <ListItem
                key={3}
                title={'Disassembling the Container'}
                onPress={() => { window.alert('Clicking a Manual'); }}
              />
            </List>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(NavBarActions.setTitle(title)),
    hideDescription: () => dispatch(ProductActions.hideDescription()),
    showDescription: () => dispatch(ProductActions.showDescription())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
