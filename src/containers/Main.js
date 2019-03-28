import React from "react"
import { Text, View } from "react-native"
import HomeScreen from "../components/HomeScreen"
import TopScreen from "../components/TopScreen"
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation"
import SearchDetail from "../components/SearchDetail"

class A extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <Text>Home!</Text>
      </View>
    )
  }
}

class B extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <Text>Settings!</Text>
      </View>
    )
  }
}

class C extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <Text>History</Text>
      </View>
    )
  }
}

class D extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <Text>Profile</Text>
      </View>
    )
  }
}

const Navigator = createStackNavigator({
  Home: TopScreen,
  SearchDetail: SearchDetail,
});

const TopContainer = createAppContainer(Navigator);

const TabNavigator = createBottomTabNavigator({
  Search: TopContainer,
  Settings: HomeScreen,
  History: C,
  Profile: D,
})

export default createAppContainer(TabNavigator);