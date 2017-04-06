import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './Styles/CustomNavBarStyles';

class CustomNavBar extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder={'Search'}
          round
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInput}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar);
