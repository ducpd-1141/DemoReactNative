import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 20.9948891,
        longitude: 105.799677,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        });
        console.log(this.state);
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerMap}>
          <MapView
            showsMyLocationButton={true}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={this.state.region}
            region={this.state.region}
          >
            <Marker coordinate={this.state.region} />
          </MapView>
        </View>

        <View style={styles.containerSearchBar}>
          <TextInput
            style={styles.textInputSearch}
            placeholder="Search Foursquare"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerMap: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  containerSearchBar: {
    height: 50,
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 60,
  },
  textInputSearch: {
    marginStart: 20,
  },
});
export default HomeScreen;
