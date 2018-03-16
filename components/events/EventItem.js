import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const EventItem = ({ name, from, to }) => (
  <View style={styles.container}>
    <Text>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

EventItem.propTypes = {
  name: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default EventItem;
