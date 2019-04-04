import React from 'react';
import {
  SafeAreaView, View, SectionList, StyleSheet, FlatList, Text, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { decreaseValue, increaseValue } from '../actions/VenuesActions';

class ListScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <SectionList
          renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
          sections={[
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
          ]}
          keyExtractor={(item, index) => item + index}
        /> */}
        <View style={{ flex: 1, marginTop: 30 }}>
          <Text
            style={{
              margin: 20,
              fontWeight: 'bold',
              color: 'red',
              fontSize: 20,
            }}
          >
            Redux Sagas
          </Text>
          <View style={{ height: 50, margin: 10, flexDirection: 'row' }}>
            <Button
              title="Decrement -"
              style={{
                fontSize: 18,
                color: 'white',
                padding: 10,
                height: 45,
                borderRadius: 10,
                backgroundColor: 'blue',
              }}
              onPress={() => {
                this.props.onDecrement(1);
              }}
            />
            <Button
              title="Increments -"
              // containerStyle={{
              //   padding: 10,
              //   height: 45,
              //   borderRadius: 10,
              //   backgroundColor: 'darkviolet',
              //   marginLeft: 30,
              // }}
              style={{ fontSize: 18, color: 'blue' }}
              onPress={() => {
                this.props.onIncrement(1);
              }}
            />
          </View>
          <Text
            style={{
              margin: 10,
              fontWeight: 'bold',
              color: 'blue',
              fontSize: 17,
            }}
          >
            Counts: {this.props.venues.time}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const { venues } = state;
  return { venues };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: (step) => {
    dispatch(increaseValue(step));
  },
  onDecrement: (step) => {
    dispatch(decreaseValue(step));
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListScreen);
