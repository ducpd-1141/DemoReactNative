import React from 'react';
import { Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapScreen from '../map/MapScreen';
import TopScreen from '../Top/TopScreen';
import SearchDetail from '../Top/SearchDetail';
import ListScreen from '../Top/ListScreen';

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

const TabNavigator = createBottomTabNavigator(
  {
    Search: TopContainer,
    Explore: MapScreen,
    List: ListScreen,
    Profile: D,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = '';
        if (routeName === 'Search') {
          iconName = 'search';
        } else if (routeName === 'Explore') {
          iconName = 'explore';
        } else if (routeName === 'List') {
          iconName = 'format-list-bulleted';
        } else if (routeName === 'Profile') {
          iconName = 'person';
        }
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    header: null,
    headerTitle: '',
  },
);

export default createAppContainer(TabNavigator);
