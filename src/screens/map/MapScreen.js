import React from 'react';
import {
  View, TextInput, Animated, Image, TouchableOpacity, SafeAreaView, Text,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import styles from './styles';
import { actionCreator } from '../../redux/map/actions';
import Loading from '../../component/Loading';

const markerImage = require('../../images/marker.png');

class MapScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowSearchBar: false,
    };
  }

  _onPressSearchBar() {
    this.setState({ isShowSearchBar: true });
  }

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.props.searchVenue(position.coords.latitude, position.coords.longitude);
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007,
          },
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    console.log(this.props.map);
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.containerSearchBar}>
          <TouchableOpacity onPress = {() => this._onPressSearchBar()}>
            <TextInput
              pointerEvents="none"
              style={styles.textInputSearch}
              placeholder="Search Foursquare"
            />
             </TouchableOpacity>
          </View>

        {this.state.isShowSearchBar
         && <SafeAreaView style= {styles.containerLayoutSearchBar}>
         <Text onPress= {() => { this.setState({ isShowSearchBar: false }); }}>ahihi</Text>
       </SafeAreaView>
        }

         {!this.state.isShowSearchBar
         && <MapView
         ref={(map) => { this.map = map; }}
         style={styles.containerMap}
         provider={PROVIDER_GOOGLE}
         region = {this.state.region}
         zoomEnabled={true}
       >
         {this.props.map.venues.map((marker, index) => <Marker
                     key={index}
                     coordinate={{
                       latitude: marker.location.lat,
                       longitude: marker.location.lng,
                     }}
                     title = {marker.name}
                     >
                     <Image source = {markerImage} style = {styles.markerImage} />

                     </Marker>)}
       </MapView>
        }

        { this.props.map.isFetching
          && <View style={styles.containerLoading}>
           <Loading />
          </View>
        }
      </SafeAreaView>
    );
  }

  renderSearchBar() {
    return (
      <SafeAreaView style= {styles.containerLayoutSearchBar}>
        <Text onPress= {() => { this.setState({ isShowSearchBar: false }); }}>ahihi</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => ({
  searchVenue: (lat, lng) => dispatch(actionCreator.fetching({ lat, lng })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
