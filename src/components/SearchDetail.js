import React from "react";

const {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} = require("react-native");

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectedCategory, unselectedCategory } from "../actions/dispathchers";
import configureStore from "../store";

const store = configureStore();

class SearchDetail extends React.Component {
  // static navigationOptions = {
  //   title: 'Home',
  // };

  constructor(props) {
    super(props);
    this.state = {
      text: "test state",
      buttonPress: true,
      isLoading: true,
      selectedId: 0
    };
    console.log;
  }

  didSelectedRow(id) {
    this.selectedCategory(id);
  }

  selectedCategory(category) {
    this.props.dispatchUnselectedCategory(category);
    console.warn(store.getState());
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
        <FlatList
          style={styles.list}
          scrollEnabled={false}
          numColumns={numColumns}
          data={dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={this.didSelectedRow.bind(this, item.title)}
            >
              <View
                style={[
                  { flex: 1, justifyContent: "center", alignItems: "center" }
                ]}
              >
                <Image
                  source={item.image}
                  style={{ width: "50%", height: "50%", resizeMode: "contain" }}
                />
              </View>

              <Text
                style={[
                  {
                    width: "100%",
                    height: "35%",
                    fontSize: 18,
                    color: "#666666",
                    textAlign: "center"
                  }
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const dataSource = [
  {
    title: "Hotel",
    categoryId: "4bf58dd8d48988d1fa931735",
    image: require("../images/ic_hotel.png")
  },
  {
    title: "Food",
    categoryId: "4d4b7105d754a06374d81259",
    image: require("../images/ic_food.png")
  },
  {
    title: "Night Market",
    categoryId: "53e510b7498ebcb1801b55d4",
    image: require("../images/ic_market.png")
  },
  {
    title: "Coffee Shop",
    categoryId: "4bf58dd8d48988d1e0931735",
    image: require("../images/ic_coffee.png")
  },
  {
    title: "Movie Theater",
    categoryId: "4bf58dd8d48988d17f941735",
    image: require("../images/ic_cinema.png")
  },
  {
    title: "Gym / Fitness Center",
    categoryId: "4bf58dd8d48988d175941735",
    image: require("../images/ic_gym.png")
  }
];
const numColumns = 3;
const itemSpacing = 1;
const width =
  (Dimensions.get("window").width - (numColumns - 1) * itemSpacing) / 3;
var height = 342 / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    flex: 1,
    backgroundColor: "#999999"
  },
  item: {
    width: width,
    height: height,
    margin: itemSpacing,
    flexDirection: "column",
    backgroundColor: "#CCCCCC"
  }
});

class SearchContainer extends React.Component {
  static navigationOptions = {
    title: "Home2",
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "blue"
      }
    }
  };

  render() {
    var { dispatch, main } = this.props;
    var actionCreators = bindActionCreators(ActionCreators, dispatch);

    return <TopScreen {...actionCreators} />;
    // return <TopScreen />;
  }
}

function mapStateToProps(state) {
  return {
    main2: state.main
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSelectedCategory: category => dispatch(selectedCategory(category)),
    dispatchUnselectedCategory: category =>
      dispatch(unselectedCategory(category))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopScreen);
