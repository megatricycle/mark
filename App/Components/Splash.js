import React from 'react';
import { View, Image } from 'react-native';
import styles from './Styles/SplashStyle';

import { Images } from '../Themes';

export default class Splash extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          source={Images.logo}
        />
      </View>
    );
  }
}
