import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Avatar } from 'react-native-elements';
import UserActions from '../Redux/UserRedux';

import ARActivity from '../Services/ARActivity';

// Styles
import styles from './Styles/AccountStyle';

class Account extends React.Component {
  startAR () {
    ARActivity.startActivity();
  }

  render () {
    const { logout } = this.props;
    const { startAR } = this;

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{flex: 1, marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Avatar
            rounded
            title='M'
            activeOpacity={0.7}
            width={70}
            height={70}
            titleStyle={styles.title}
            containerStyle={styles.avatarContainer}
            overlayContainerStyle={styles.overlay}
          />
          <Text style={styles.username}>megatricycle</Text>
        </View>

        <List containerStyle={styles.list}>
          <ListItem
            key={0}
            title={'Try Camera'}
            onPress={startAR}
            leftIcon={{ name: 'camera' }}
          />
          <ListItem
            key={1}
            title={'Logout'}
            onPress={logout}
            leftIcon={{ name: 'backspace' }}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(UserActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
