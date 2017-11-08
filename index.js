import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';

import Login from './pages/login';
import Main from './pages/Main';

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const App = StackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
  });

AppRegistry.registerComponent('FlyinFood', () => App);
