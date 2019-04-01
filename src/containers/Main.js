import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import MapScreen from '../components/MapScreen';
import TopScreen from '../components/TopScreen';
import SearchDetail from '../components/SearchDetail';

class C extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Text>History</Text>
      </View>
    );
  }
}

class D extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Text>Profile</Text>
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  Home: TopScreen,
  SearchDetail,
});

const TopContainer = createAppContainer(Navigator);

const TabNavigator = createBottomTabNavigator({
  Search: TopContainer,
  Settings: MapScreen,
  History: C,
  Profile: D,
});

export default createAppContainer(TabNavigator);
