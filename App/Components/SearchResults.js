import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import styles from './Styles/SearchResultsStyle';
import { Images } from '../Themes';

export default class SearchResults extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <Text style={styles.resultsHeader}>Results</Text>

          <List containerStyle={styles.listContainer}>
            <ListItem
              key={1}
              avatar={Images.dummy}
              roundAvatar
              title={'GearVR'}
              subtitle={<Text style={styles.subtitle}>Samsung</Text>}
              onPress={() => { Actions.productScreen(); }}
              />
            <ListItem
              key={2}
              avatar={Images.dummy}
              roundAvatar
              title={'GearVR'}
              subtitle={<Text style={styles.subtitle}>Samsung</Text>}
              onPress={() => { Actions.productScreen(); }}
              />
            <ListItem
              key={3}
              avatar={Images.dummy}
              roundAvatar
              title={'GearVR'}
              subtitle={<Text style={styles.subtitle}>Samsung</Text>}
              onPress={() => { Actions.productScreen(); }}
              />
          </List>
        </ScrollView>
      </View>
    );
  }
}
