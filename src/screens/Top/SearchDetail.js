import React from 'react';
import { SearchBar, Input, Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { actionCreator } from '../../redux/search/actions';
import SearchRow from '../../components/SearchRow';

class SearchDetail extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
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

  componentWillMount() {
    this.props.dispatchClear();
  }

  updateSearch = (search) => {
    this.setState({ search });
    this.searchForCategory(search);
  };

  searchForCategory(search) {
    this.props.dispatchSearchForCategory(
      '16.0405013',
      '108.2284253',
      search,
      '4bf58dd8d48988d1e0931735',
    );
  }

  clear() {
    this.props.dispatchClear();
    this.props.navigation.pop();
  }

  loadMore() {
    // this.props.dispatchClear();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.backView} onPress={() => this.clear()}>
            <Text>
              <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
            </Text>
          </TouchableOpacity>
          <Input
            placeholder="Type Here..."
            containerStyle={styles.searchBar}
            inputContainerStyle={styles.searchBarInput}
            leftIcon={<MaterialIcons name="search" size={20} color="#4C595C" />}
            onChangeText={this.updateSearch}
          />
        </View>
        <View style={styles.content}>
          <FlatList
            style={styles.list}
            data={this.props.venues}
            keyExtractor={({ index }) => index}
            renderItem={({ item, index }) => <SearchRow key={index} item={item} index={index} />}
            onEndReachedThreshold={0.4}
            onEndReached={this.loadMore()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  content: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  backView: {
    width: 50,
    height: '100%',
    alignItems: 'center',
  },
  headerView: {
    height: 44,
    paddingBottom: 10,
    backgroundColor: 'tomato',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarInput: {
    padding: 0,
    // flex: 1,
    borderWidth: 0,
    borderColor: 'transparent',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  searchBar: {
    marginRight: 10,
    marginTop: 0,
    padding: 0,
    flex: 1,
    backgroundColor: 'transparent',
  },
  list: {
    width: '100%',
    height: '100%',
  },
  text: {
    backgroundColor: 'red',
  },
});

const mapStateToProps = state => ({
  venues: state.search.venues,
});

const mapDispatchToProps = dispatch => ({
  dispatchSearchForCategory: (lat, lng, query, category) => {
    dispatch(
      actionCreator.searchForCategory({
        lat,
        lng,
        query,
        category,
      }),
    );
  },
  dispatchClear: () => {
    dispatch(actionCreator.clear());
  },
  dispatchLoadMore: () => {
    dispatch(actionCreator.loadMore());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchDetail);
