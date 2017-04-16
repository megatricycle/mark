import React from 'react';
import { View, Text, Modal, ActivityIndicator } from 'react-native';
import styles from './Styles/LoadingModalStyle';
import { Colors } from '../Themes';

export default class LoadingModal extends React.Component {
  render () {
    const { text } = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent
        visible
        onRequestClose={() => {}}
      >
        <View style={styles.overlay}>
          <View style={styles.innerContainer}>
            <ActivityIndicator
              size={'large'}
              color={Colors.accent}
            />
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}
