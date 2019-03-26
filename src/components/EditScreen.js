import React from 'react'; 

import { StyleSheet, View, Image, Animated, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json


export default class EditScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };
  constructor(props) {
    super(props);
    this.state = {text: "test state",
    isLoading: true,
    fadeAnim: new Animated.Value(0)};
    console.log
  }

  async componentDidMount(){
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,             // Make it take a while
      }
    ).start();

    try {
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      console.log(itemId);
      console.log(`https://api.themoviedb.org/3/genre/${itemId}/movies?api_key=d79d9f8467a0e6d7b24624c522cb2ab3`)
      const response = await fetch(`https://api.themoviedb.org/3/genre/${itemId}/movies?api_key=d79d9f8467a0e6d7b24624c522cb2ab3`);
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      }, function () {
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    // const {navigate} = this.props.navigation;
   

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    let { fadeAnim } = this.state;
    return (
      <View style={styles.container}>
        <FlatList style = {styles.list} numColumns = {numColumns}
          data={this.state.dataSource}
          renderItem={({item}) => 
          <Animated.View style={{opacity: fadeAnim,}}>
            <View style={styles.item}>
              <Image source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={{flex: 1, resizeMode: 'stretch'}} />
            </View>
          </Animated.View>
            
            }

          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const numColumns = 3
const itemSpacing = 3
const size = (Dimensions.get('window').width - ((numColumns - 1) * itemSpacing)) / 3
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    marginLeft: -itemSpacing,
  },
  item: {
    width: size,
    height: size + (size / 2),
    marginLeft: itemSpacing,
    marginBottom: itemSpacing,
    flexDirection: 'column',
  }
});
