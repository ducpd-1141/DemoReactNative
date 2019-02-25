/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
// import HomeScreen from './HomeScreen'
// import EditScreen from './EditScreen'
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen1 extends React.Component {
  static navigationOptions = {
    title: 'Home1',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details1241"
          onPress={() => {
            // this.props.navigation.dispatch(StackActions.reset({
            //   index: 0,
            //   actions: [
            //     NavigationActions.navigate({ routeName: 'Details' })
            //   ],
            // }))

            this.props.navigation.dispatch(StackActions.push({
              routeName: 'Details',
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
              index: 0,
            }))
          }}
        />
      </View>
    );
  }  
}

class DetailsScreen1 extends React.Component {
  static navigationOptions = {
    title: 'Detail1',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen1,
  },
  Details: {
    screen: DetailsScreen1,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
