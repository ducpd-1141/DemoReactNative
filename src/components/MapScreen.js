import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: 20.9948891,
      longitude: 105.799677,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={this.state}>
          <MapView.Marker coordinate={this.state} />
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  item: {
    width: "100%",
    height: 65,
    marginLeft: 20,
  },
  map: {
    width: 300,
    height: 300,
    flex: 1,
    backgroundColor: '#008800'
  }
});
export default HomeScreen;

