/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon, Divider  } from 'react-native-elements';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View source={{uri: 'wall'}} style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
            }}
            source={{ uri: 'wall' }}
          />
        </View>
         <Image source={{uri: 'banner'}} style={{width: 250, height: 150, resizeMode: 'contain',}} />

         <Divider style={{ height: 100, backgroundColor: 'blue' }} />

        <SocialIcon
          title=' Sign In With Facebook '
          button
          style={{width: 240}}
          type='facebook'
        />

        <SocialIcon
          title='  Sign In With Google  '
          button
          style={{width: 240}}
          type='google-plus-official'
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
