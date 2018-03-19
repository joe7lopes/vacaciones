import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { FONT_SIZE_TEXT } from '../../styles/style';

const EventCard = ({ style, title, createdAt }) => (
  <View style={style}>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <View style={styles.cardDetails}>
      <Text>Created at: </Text>
      <Text>{createdAt}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#9E9E9E'
  },
  cardDetails: {
    flex: 0.5,
    backgroundColor: '#EEEEEE'
  },
  cardTitle: {
    fontSize: FONT_SIZE_TEXT,
    color: '#F5F5F5'
  }

});

EventCard.prototype = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  style: PropTypes.object
};

export default EventCard;
