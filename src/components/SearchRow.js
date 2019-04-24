import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.5,
  },
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
  },
  container_title: {
    flexDirection: 'row',
  },
  venue: {
    flex: 1,
    flexDirection: 'row',
  },
  container_recommend: {
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: 'tomato',
    fontWeight: 'bold',
  },
  container_venue: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  description: {
    fontSize: 13,
    color: '#4C595C',
    marginTop: 2,
    textTransform: 'capitalize',
  },
  type: {
    fontSize: 13,
    color: '#999999',
    marginTop: 2,
    textTransform: 'capitalize',
  },
  photo: {
    borderRadius: 3,
    height: 60,
    aspectRatio: 1,
    backgroundColor: '#4C595C',
  },
});

const SearchRow = ({
  item: {
    venue: { categories, name, location },
    photo,
    snippets: { items },
  },
  index,
}) => (
  <View style={styles.main}>
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Image
          tintColor="blue"
          source={{
            uri: `${photo != null ? `${photo.prefix}500${photo.suffix}` : null}`,
          }}
          style={styles.photo}
        />
        <View style={styles.container_venue}>
          <Text style={styles.title}>{`${index + 1}. ${name}`}</Text>
          <Text style={styles.type}>{categories[0].shortName}</Text>
          <Text style={styles.type}>
            {location.city == null ? location.country : location.city}
          </Text>
        </View>
      </View>
      {items[0].detail != null ? (
        <View style={styles.container_recommend}>
          <Text style={styles.description} numberOfLines={3}>
            {`"${items[0].detail.object.text}"`}
          </Text>
        </View>
      ) : null}
    </View>
  </View>
);
export default SearchRow;
