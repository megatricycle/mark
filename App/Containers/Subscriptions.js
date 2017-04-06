import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';

// Styles
import styles from './Styles/SubscriptionsStyle';
import { Images } from '../Themes';

class Subscriptions extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={styles.providerName}>Samsung Inc.</Text>
          <List containerStyle={styles.list}>
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={1}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={2}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={3}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={4}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={5}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
          </List>
        </View>

        <View>
          <Text style={styles.providerName}>Samsung Inc.</Text>
          <List containerStyle={styles.list}>
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={1}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={2}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={3}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={4}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
            <ListItem
              roundAvatar
              avatar={Images.dummy}
              key={5}
              title={'GearVR'}
              onPress={() => { window.alert('Boop!'); }}
            />
          </List>
        </View>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
