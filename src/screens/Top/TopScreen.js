import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { actionCreator } from '../../redux/top/actions';

const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} = require('react-native');

class TopScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  didSelectedRow(id) {
    this.selectedCategory(id);
    this.props.navigation.push('SearchDetail');
  }

  selectedCategory(category) {
    this.props.dispatchUnselectedCategory(category);
    console.warn(this.props.categorySelected);
  }

  getCotegoriesView() {
    const items = dataSource.map(object => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.didSelectedRow(object.categoryId)}
      >
        <View style={styles.categoryIcon}>
          <Text>{object.image}</Text>
        </View>
        <Text style={styles.text}>{object.title}</Text>
      </TouchableOpacity>
    ));
    return items;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cover}>
          <ImageBackground source={coverImage} style={styles.coverImage}>
            <View style={styles.search}>
              <View style={styles.textInput}>
                <View style={styles.searchItem}>
                  <Text>
                    <MaterialIcons name="search" size={30} color="#4C595C" />
                  </Text>
                </View>
                <Text>What are you looking for?</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.list}>{this.getCotegoriesView()}</View>
      </View>
    );
  }
}

const coverImage = require('../../images/top.jpg');

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    width: '100%',
    height: '50%',
  },
  searchItem: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  search: {
    marginBottom: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: '#999999',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '33.05%',
    height: '50%',
    margin: 0.5,
    backgroundColor: '#CCCCCC',
  },
  text: {
    width: '100%',
    height: '40%',
    fontSize: 16,
    color: '#4C595C',
    textAlign: 'center',
  },
  categoryIcon: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    resizeMode: 'cover',
    height: '100%',
    flexDirection: 'column-reverse',
  },
});

// const mapStateToProps = state => ({
//   categorySelected: state.main.categorySelected,
// });

// const mapDispatchToProps = dispatch => ({
//   dispatchSelectedCategory: category => dispatch(actionCreator.selectedCategory(category)),
//   dispatchUnselectedCategory: category => dispatch(actionCreator.unselectedCategory(category)),
// });

export default (TopScreen);
