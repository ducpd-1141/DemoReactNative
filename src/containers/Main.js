import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  Explore: MapScreen,
  History: C,
  Profile: D,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName = '';
      if (routeName == 'Search') {
        iconName = 'search';
      } else if (routeName == 'Explore') {
        iconName = 'explore';
      } else if (routeName == 'History') {
        iconName = 'list';
      } else if (routeName == 'Profile') {
        iconName = 'person';
      }
      return <MaterialIcons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(TabNavigator);
