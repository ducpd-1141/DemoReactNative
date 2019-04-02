import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { selectedCategory, unselectedCategory } from '../actions/dispathchers';

const {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} = require('react-native');

class TopScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Home',
  };

  didSelectedRow(id) {
    this.selectedCategory(id);
    this.props.navigation.push('SearchDetail');
  }

  selectedCategory(category) {
    this.props.dispatchUnselectedCategory(category);
    console.warn(this.props.categorySelected);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image source={coverImage} style={styles.coverImage} />
        </View>
        <FlatList
          style={styles.list}
          scrollEnabled={false}
          numColumns={numColumns}
          data={dataSource}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => this.didSelectedRow(item.categoryId)}
            >
              <View style={styles.container}>
                <Text>{item.image}</Text>
              </View>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const coverImage = require('../images/top.jpg');

const dataSource = [
  {
    title: 'Hotel',
    categoryId: '4bf58dd8d48988d1fa931735',
    image: <MaterialIcons name="hotel" size={50} color="#4C595C" />,
  },
  {
    title: 'Food',
    categoryId: '4d4b7105d754a06374d81259',
    image: <MaterialIcons name="restaurant" size={50} color="#4C595C" />,
  },
  {
    title: 'Night Market',
    categoryId: '53e510b7498ebcb1801b55d4',
    image: <MaterialIcons name="shopping-cart" size={50} color="#4C595C" />,
  },
  {
    title: 'Coffee Shop',
    categoryId: '4bf58dd8d48988d1e0931735',
    image: <MaterialIcons name="local-drink" size={50} color="#4C595C" />,
  },
  {
    title: 'Movie Theater',
    categoryId: '4bf58dd8d48988d17f941735',
    image: <MaterialCommunityIcons name="theater" size={50} color="#4C595C" />,
  },
  {
    title: 'Gym / Fitness Center',
    categoryId: '4bf58dd8d48988d175941735',
    image: <MaterialIcons name="fitness-center" size={50} color="#4C595C" />,
  },
];

const numColumns = 3;
const itemSpacing = 1;
const width = (Dimensions.get('window').width - (numColumns - 1) * itemSpacing) / 3;
const height = 342 / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: '#999999',
  },
  item: {
    width,
    height,
    margin: itemSpacing,
    flexDirection: 'column',
    backgroundColor: '#CCCCCC',
  },
  text: {
    width: '100%',
    height: '35%',
    fontSize: 18,
    color: '#4C595C',
    textAlign: 'center',
  },
  categoryImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    tintColor: '#4C595C',
  },
  coverImage: { resizeMode: 'cover' },
});
function mapStateToProps(state) {
  return {
    categorySelected: state.main.categorySelected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSelectedCategory: category => dispatch(selectedCategory(category)),
    dispatchUnselectedCategory: category => dispatch(unselectedCategory(category)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopScreen);
