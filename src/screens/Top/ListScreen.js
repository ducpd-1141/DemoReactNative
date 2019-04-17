import React from 'react';
import {
  SafeAreaView, View, StyleSheet, Text, Button, FlatList, SectionList,
} from 'react-native';
import { connect } from 'react-redux';
import { actionCreator } from '../../redux/venues/actions';
import AsyncImage from '../../components/AsyncImage';

class ListScreen extends React.Component {
  // componentDidMount() {
  //   this.props.fetchRecommendedVenues(16.0405013, 108.2284253);
  // }

  componentDidMount() {
    this.props.fetchRecommendedVenues(16.0405013, 108.2284253);
  }

  renderRecommendCell(item) {
    const { name, location } = item.venue;
    return (
      <View
        style={{
          backgroundColor: '#ecf0f1',
          height: 200,
          width: 365,
          flexDirection: 'column',
          margin: 5,
        }}
      >
        <AsyncImage
          source={{ uri: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg' }}
          placeholderColor="#e67e22"
          style={{ height: 120, width: 365 }}
        />
        <Text style={{ color: '#3498db' }}>{name}</Text>
        <Text style={{ color: '#2c3e50', flex: 1 }}>{location.address}</Text>
      </View>
    );
  }

  renderRecommendTable() {
    if (this.props.venues.recommendPlaces) {
      return (
        <FlatList
          horizontal="true"
          pagingEnabled
          style={{ flex: 1 }}
          data={this.props.venues.recommendPlaces}
          renderItem={({ item }) => this.renderRecommendCell(item)}
        />
        // console.log('this props', this.props.venues.recommendPlaces);
      );
    }
    return null;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <SectionList> */}
        {this.renderRecommendTable()}
        {/* </SectionList> */}
        {/* <SectionList /> */}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onIncrement: (step) => {
    dispatch(actionCreator.increaseValue(step));
  },
  onDecrement: (step) => {
    dispatch(actionCreator.decreaseValue(step));
  },
  fetchRecommendedVenues: (lat: number, lng: number) => {
    dispatch(actionCreator.loadVenueTips({ lat, lng }));
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdc3c7',
    flex: 1,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListScreen);

// Unused code
// {/* <SectionList
//           renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
//           renderSectionHeader={({ section: { title } }) => (
//             <Text style={{ fontWeight: 'bold' }}>{title}</Text>
//           )}
//           sections={[
//             { title: 'Title1', data: ['item1', 'item2'] },
//             { title: 'Title2', data: ['item3', 'item4'] },
//             { title: 'Title3', data: ['item5', 'item6'] },
//           ]}
//           keyExtractor={(item, index) => item + index}
//         /> */}
//         <View style={{ flex: 1, marginTop: 30 }}>
//           <Text
//             style={{
//               margin: 20,
//               fontWeight: 'bold',
//               color: 'red',
//               fontSize: 20,
//             }}
//           >
//             Redux Sagas
//           </Text>
//           <View style={{ height: 50, margin: 10, flexDirection: 'row' }}>
//             <Button
//               title="Decrement -"
//               style={{
//                 fontSize: 18,
//                 color: 'white',
//                 padding: 10,
//                 height: 45,
//                 borderRadius: 10,
//                 backgroundColor: 'blue',
//               }}
//               onPress={() => {
//                 this.props.onDecrement(1);
//               }}
//             />
//             <Button
//               title="Increments -"
//               // containerStyle={{
//               //   padding: 10,
//               //   height: 45,
//               //   borderRadius: 10,
//               //   backgroundColor: 'darkviolet',
//               //   marginLeft: 30,
//               // }}
//               style={{ fontSize: 18, color: 'blue' }}
//               onPress={() => {
//                 this.props.fetchRecommendedVenues(16.0405013, 108.2284253);
//               }}
//             />
//           </View>
//           <Text
//             style={{
//               margin: 10,
//               fontWeight: 'bold',
//               color: 'blue',
//               fontSize: 17,
//             }}
//           >
//             Counts: {this.props.venues.time}
//           </Text>
//         </View>
