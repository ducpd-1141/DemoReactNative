import React from 'react';
import {
  View, TextInput, Animated, Image, Text,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles, { CARD_WIDTH } from './styles';

const Images = [
  { uri: 'https://i.imgur.com/sNam9iJ.jpg' },
  { uri: 'https://i.imgur.com/N7rlQYt.jpg' },
  { uri: 'https://i.imgur.com/UDrH0wm.jpg' },
  { uri: 'https://i.imgur.com/Ka8kNST.jpg' },
];

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          coordinate: {
            latitude: 45.524548,
            longitude: -122.6749817,
          },
          title: 'Best Place',
          description: 'This is the best place in Portland',
          image: Images[0],
        },
        {
          coordinate: {
            latitude: 45.524698,
            longitude: -122.6655507,
          },
          title: 'Second Best Place',
          description: 'This is the second best place in Portland',
          image: Images[1],
        },
        {
          coordinate: {
            latitude: 45.5230786,
            longitude: -122.6701034,
          },
          title: 'Third Best Place',
          description: 'This is the third best place in Portland',
          image: Images[2],
        },
        {
          coordinate: {
            latitude: 45.521016,
            longitude: -122.6561917,
          },
          title: 'Fourth Best Place',
          description: 'This is the fourth best place in Portland',
          image: Images[3],
        },
      ],
      region: {
        latitude: 45.52220671242907,
        longitude: -122.6653281029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
      // region: {
      //   latitude: 20.9948891,
      //   longitude: 105.799677,
      //   latitudeDelta: 0.005,
      //   longitudeDelta: 0.005,
      // },
    };
  }

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position);
    //     this.setState({
    //       region: {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         latitudeDelta: 0.005,
    //         longitudeDelta: 0.005,
    //       },
    //     });
    //     console.log(this.state);
    //   },
    //   error => this.setState({ error: error.message }),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    // );

    this.animation.addListener(({ value }) => {
      // animate 30% away from landing on the next item
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: 'clamp',
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: 'clamp',
      });
      return { scale, opacity };
    });
    return (
      <View style={styles.container}>
        <MapView
          ref={(map) => { this.map = map; }}
          initialRegion={this.state.region}
          style={styles.containerMap}
          provider={PROVIDER_GOOGLE}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </Marker>
            );
          })}
        </MapView>

              <View style={styles.containerSearchBar}>
          <TextInput
            style={styles.textInputSearch}
            placeholder="Search Foursquare"
          />
        </View>

        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true },
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
