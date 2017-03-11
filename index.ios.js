/**
 * React Native Starter
 * https://github.com/sturdynut/react-native-starter
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store';
import App from './src/containers/App';

const store = configureStore();

export default Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('Todo', () => Index);
