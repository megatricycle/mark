import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { getSubscribedProducts } from '../Selectors/ProductsSelector';
import ProductActions from '../Redux/ProductRedux';
import ProductsActions from '../Redux/ProductsRedux';
import _ from 'lodash';

// Styles
import styles from './Styles/SubscriptionsStyle';
import { Images } from '../Themes';

class Subscriptions extends React.Component {
  constructor (props) {
    super(props);

    this.handleProductPress = this.handleProductPress.bind(this);
  }

  handleProductPress (productId) {
    const { setSelectedProduct } = this.props;

    setSelectedProduct(productId);
    Actions.productScreen();
  }

  componentWillMount () {
    const { requestSyncSubscriptions } = this.props;
    const { userId } = this.props.user;

    requestSyncSubscriptions(userId);
  }

  render () {
    const { products } = this.props.products;
    const { handleProductPress } = this;

    const groupedProducts = Object.entries(_.groupBy(products, (product) => product.user.username))
      .map(([prop, value]) => ({ provider: prop, products: value }));

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {groupedProducts.map((group) =>
          <View key={group.provider}>
            <Text style={styles.providerName}>{group.provider}</Text>
            <List containerStyle={styles.list}>
              {group.products.map((product) =>
                <ListItem
                  roundAvatar
                  avatar={Images.dummy}
                  key={product.id}
                  title={product.name}
                  onPress={() => { handleProductPress(product.id); }}
                />
              )}
            </List>
          </View>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: getSubscribedProducts(state.products),
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedProduct: (productId) => dispatch(ProductActions.setSelectedProduct(productId)),
    requestSyncSubscriptions: (userId) => dispatch(ProductsActions.requestSyncSubscriptions(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
