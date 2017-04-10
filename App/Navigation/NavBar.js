import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import NavBarActions from '../Redux/NavBarRedux';

import styles from './Styles/CustomNavBarStyles';
import { Colors } from '../Themes';

const screensWithTitle = ['productScreen', 'manualScreen'];

class NavBar extends React.Component {
  componentWillReceiveProps (newProps) {
    const { title } = newProps.navigation.scene;
    const { setTitle } = this.props;

    // @TODO
    if (title === 'productScreen' && newProps.navBar.title !== 'GearVR') {
      setTitle('GearVR');
    } else if (title === 'manualScreen' && newProps.navBar.title !== 'Assembling the Container') {
      setTitle('Assembling the Container');
    }
  }

  render () {
    const { scene } = this.props.navigation;
    const { title } = this.props.navBar;

    return (
      <View style={styles.container}>
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
            />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    navBar: state.navBar
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(NavBarActions.setTitle(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
