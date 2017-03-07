/**
 * React Native Starter
 * https://github.com/sturdynut/react-native-starter
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/containers/App';

export default class Todo extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Todo', () => App);
