/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { createStackNavigator } from 'react-navigation';

import React from 'react';
import Main from './src/containers/Main'
import { Provider } from 'react-redux';
import configureStore from './src/store'

const store = configureStore()

const app = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default app;

