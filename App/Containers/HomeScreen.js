import React from 'react';
import { View, Text } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import HomeActions, { TabNames } from '../Redux/HomeRedux';

// Styles
import styles from './Styles/HomeScreenStyle';
import { Colors } from '../Themes';

class HomeScreen extends React.Component {
  render () {
    const { changeTab } = this.props;
    const { currentTab } = this.props.home;

    // console.log(this.props);

    return (
      <View style={styles.container}>
        <Tabs tabBarStyle={styles.tabBar}>
          <Tab
            titleStyle={styles.tabTitle}
            selectedTitleStyle={styles.selectedTitle}
            selected={currentTab === TabNames.DASHBOARD}
            title={currentTab === TabNames.DASHBOARD ? 'Dashboard' : null}
            renderIcon={() => <Icon containerStyle={styles.icon} color={'#5e6977'} name='dashboard' size={33} />}
            renderSelectedIcon={() => <Icon color={Colors.accent} name='dashboard' size={30} />}
            onPress={() => { changeTab(TabNames.DASHBOARD); }}
          >
            <View style={[styles.homepageView]}><Text>1 {JSON.stringify(this.props.home)}</Text></View>
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
            <View style={[styles.homepageView]}><Text>2 {JSON.stringify(this.props.home)}</Text></View>
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
            <View style={[styles.homepageView]}><Text>3 {JSON.stringify(this.props.home)}</Text></View>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (tabName) => dispatch(HomeActions.changeTab(tabName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
