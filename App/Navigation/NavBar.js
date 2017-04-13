import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import NavBarActions from '../Redux/NavBarRedux';
import SearchActions from '../Redux/SearchRedux';
import SearchResults from '../Components/SearchResults';
import { getProductById } from '../Selectors/ProductsSelector';
import { getManual } from '../Selectors/ManualsSelector';

import styles from './Styles/CustomNavBarStyles';
import { Colors } from '../Themes';

const screensWithTitle = ['productScreen', 'manualScreen'];

class NavBar extends React.Component {
  constructor (props) {
    super(props);

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText (term) {
    const { setSearchTerm } = this.props;

    setSearchTerm(term);
  }

  componentWillMount () {
    const { resetSearch } = this.props;

    resetSearch();
  }

  componentWillReceiveProps (newProps) {
    const { title } = newProps.navigation.scene;
    const { setTitle, selectedProduct } = this.props;

    if (selectedProduct) {
      if (title === 'productScreen' && newProps.navBar.title !== newProps.selectedProduct.name) {
        setTitle(newProps.selectedProduct.name);
      } else if (title === 'manualScreen' && newProps.navBar.title !== newProps.selectedManual.name) {
        setTitle(newProps.selectedManual.name);
      }
    }
  }

  render () {
    const { scene } = this.props.navigation;
    const { title } = this.props.navBar;
    const { term } = this.props.search;
    const { handleChangeText } = this;

    return (
      <View style={styles.container}>
        <View style={styles.navBarContainer}>
          {
            screensWithTitle.indexOf(scene.title) > -1
              ? <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name={'arrow-back'}
                  color={Colors.white}
                  onPress={() => Actions.pop()}
                  underlayColor={Colors.transparent}
                  iconStyle={styles.backButton}
                />
                <Text style={styles.navTitle}>{title}</Text>
              </View>
            : <SearchBar
              placeholder={'Search'}
              round
              containerStyle={styles.searchContainer}
              inputStyle={styles.searchInput}
              onChangeText={handleChangeText}
              value={term}
              />
          }
        </View>
        {
          term !== '' && screensWithTitle.indexOf(scene.title) === -1
            ? <SearchResults />
            : <View />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    navBar: state.navBar,
    search: state.search,
    selectedProduct: getProductById(state),
    selectedManual: getManual(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(NavBarActions.setTitle(title)),
    setSearchTerm: (term) => dispatch(SearchActions.setSearchTerm(term)),
    resetSearch: () => dispatch(SearchActions.resetSearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
