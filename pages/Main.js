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

export default class Main extends Component<{}> {
  static navigationOptions = { title: 'Main', };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={{display:'flex', justifyContent:'center'}}>
        <Text>Hello JP</Text>
        <Text>{params.name}</Text>
        <Button title="Categoria 2" onPress={() => navigate('Login', 'Categoria two') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Main', () => Main);
