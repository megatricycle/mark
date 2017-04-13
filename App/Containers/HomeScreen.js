import React from 'react';
import { View } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import HomeActions, { TabNames } from '../Redux/HomeRedux';
import Dashboard from './Dashboard';
import Subscriptions from './Subscriptions';
import Account from './Account';

// Styles
import styles from './Styles/HomeScreenStyle';
import { Colors } from '../Themes';

class HomeScreen extends React.Component {
  componentWillMount () {
    const { username } = this.props.user;
    const { resetHome } = this.props;

    if (!username) {
      Actions.loginScreen({
        type: ActionConst.REPLACE
      });
    }

    resetHome();
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.user.username) {
      Actions.loginScreen({
        type: ActionConst.REPLACE
      });
    }
  }

  render () {
    const { changeTab } = this.props;
    const { currentTab } = this.props.home;

    return (
      <View style={styles.container}>
        <Tabs tabBarStyle={styles.tabBar} sceneStyle={{paddingBottom: 0}}>
          <Tab
            titleStyle={styles.tabTitle}
            selectedTitleStyle={styles.selectedTitle}
            selected={currentTab === TabNames.DASHBOARD}
            title={currentTab === TabNames.DASHBOARD ? 'Dashboard' : null}
            renderIcon={() => <Icon containerStyle={styles.icon} color={'#5e6977'} name='dashboard' size={33} />}
            renderSelectedIcon={() => <Icon color={Colors.accent} name='dashboard' size={30} />}
            onPress={() => { changeTab(TabNames.DASHBOARD); }}
          >
            <View style={[styles.homepageView]}>
              <Dashboard />
            </View>
          </Tab>
          <Tab
            titleStyle={styles.tabTitle}
            selectedTitleStyle={styles.selectedTitle}
            selected={currentTab === TabNames.SUBSCRIPTIONS}
            title={currentTab === TabNames.SUBSCRIPTIONS ? 'Subscriptions' : null}
            renderIcon={() => <Icon containerStyle={styles.icon} color={'#5e6977'} name='view-module' size={33} />}
            renderSelectedIcon={() => <Icon color={Colors.accent} name='view-module' size={30} />}
            onPress={() => { changeTab(TabNames.SUBSCRIPTIONS); }}
          >
            <View style={[styles.homepageView]}>
              <Subscriptions />
            </View>
          </Tab>
          <Tab
            titleStyle={styles.tabTitle}
            selectedTitleStyle={styles.selectedTitle}
            selected={currentTab === TabNames.ACCOUNT}
            title={currentTab === TabNames.ACCOUNT ? 'Account' : null}
            renderIcon={() => <Icon containerStyle={styles.icon} color={'#5e6977'} name='person' size={33} />}
            renderSelectedIcon={() => <Icon color={Colors.accent} name='person' size={30} />}
            onPress={() => { changeTab(TabNames.ACCOUNT); }}
          >
            <View style={[styles.homepageView]}>
              <Account />
            </View>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (tabName) => dispatch(HomeActions.changeTab(tabName)),
    resetHome: (tabName) => dispatch(HomeActions.resetHome())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
