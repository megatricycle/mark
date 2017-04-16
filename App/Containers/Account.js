import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Avatar } from 'react-native-elements';
import UserActions from '../Redux/UserRedux';
import LoadingModal from '../Components/LoadingModal';

// Styles
import styles from './Styles/AccountStyle';

class Account extends React.Component {
  render () {
    const { logout } = this.props;
    const { isLoggingOut, username } = this.props.user;

    if (!username) return <View />;

    const usernameInitial = username
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('');

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        { isLoggingOut
          ? <LoadingModal
            text={'Logging out'}
          />
          : <View />
        }

        <View style={{flex: 1, marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Avatar
            rounded
            title={usernameInitial}
            activeOpacity={0.7}
            width={70}
            height={70}
            titleStyle={styles.title}
            containerStyle={styles.avatarContainer}
            overlayContainerStyle={styles.overlay}
          />
          <Text style={styles.username}>{username}</Text>
        </View>

        <List containerStyle={styles.list}>
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
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(UserActions.requestLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
