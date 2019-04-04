import React from 'react';

const {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} = require('react-native');

class SearchDetail extends React.Component {
  static navigationOptions = {
    title: 'Search Detail',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: 'test state',
      buttonPress: true,
      isLoading: true,
      selectedId: 0,
    };
    console.log;
  }

  didSelectedRow(id) {
    // this.selectedCategory(id);
    // this.props.navigation.goBack();
  }

  selectedCategory(category) {
    this.props.dispatchUnselectedCategory(category);
    console.warn(store.getState());
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Detail!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchDetail;
