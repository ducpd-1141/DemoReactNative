import React from 'react';
import {
  SafeAreaView, View, SectionList, StyleSheet,
} from 'react-native';

class ListScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList

        />
      </SafeAreaView>
    );
  }
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
  },
});
