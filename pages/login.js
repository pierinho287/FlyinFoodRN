import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import { SocialIcon, Divider  } from 'react-native-elements';

export default class Login extends Component<{}> {
  static navigationOptions = { title: '', headerStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 50,
        top: 0,
        left: 0,
        right: 0,
        // borderBottomWidth: 0 // removes the border on the bottom
      },
      headerTintColor: '#fff'
    };
  render() {
    const { navigate } = this.props.navigation;
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
		      onPress={() => navigate('Main', { name: 'JP' })}
        />
        <SocialIcon
          title='Sign In With Google'
          button
          style={{width: 240}}
          type='google-plus-official'
          onPress={() => navigate('Main', { name: 'JP' })}
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
});

AppRegistry.registerComponent('Login', () => Login);
