import React from "react"
import Edit from "./EditScreen"

const {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} = require("react-native")
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions
} from "react-navigation" // Version can be specified in package.json

class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Home',
  // };

  constructor(props) {
    super(props)
    this.state = { text: "test state", buttonPress: true, isLoading: true, selectedId: 0 }
    console.log
  }

  didSelectedRow(id) {
    this.props.navigation.push("Details", {
      itemId: id
    })
    // this.props.navigation.dispatch(StackActions.push({
    //   routeName: 'Details',
    //   params: {
    //     itemId: id,
    //   },
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Details' })
    //   ],
    //   index: 0,
    // }))
  }

  componentDidMount() {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d79d9f8467a0e6d7b24624c522cb2ab3"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.genres
          },
          function() {}
        )
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text
                style={[{ flex: 1, fontSize: 18 }]}
                onPress={this.didSelectedRow.bind(this, item.id)}
              >
                {item.name}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0
  },
  item: {
    width: "100%",
    height: 65,
    marginLeft: 20
  }
})
export default HomeScreen
