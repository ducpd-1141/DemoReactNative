/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/containers/Main';
import configureStore from './src/store';

const store = configureStore();
const app = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default app;
