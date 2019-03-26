import React from "react";

const {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} = require("react-native");

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectedCategory, unselectedCategory } from "../actions/dispathchers";
import configureStore from "../store";

const store = configureStore();

class TopScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Home',
  };
  
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
        <Image source={require("../images/top.jpg")} style = { {resizeMode: "cover" } } />
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
              <View style={styles.container}>
                <Image source={item.image} style={styles.image} />
              </View>

              <Text
                style={styles.text}
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
    image: require("..../images/ic_hotel.png")
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
  },
  text: {
    width: "100%",
    height: "35%",
    fontSize: 18,
    color: "#4C595C",
    textAlign: "center"
  },
  image: { width: "50%", height: "50%", resizeMode: "contain", tintColor: "#4C595C"}
});


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
