import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FONT_SIZE_TEXT } from '../../styles/style';

const EventCard = ({ style, title, createdAt }) => (
  <View style={style}>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <View style={styles.cardDetails}>
      <Text>Created at: {createdAt}</Text>
      <View style={styles.cardInvitationStatus}>
        <Ionicons name="ios-people" size={20} color="green"> 3 </Ionicons>
        <Ionicons name="ios-people" size={20} color="yellow"> 3 </Ionicons>
        <Ionicons name="ios-people" size={20} color="red"> 3 </Ionicons>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#9E9E9E'
  },
  cardDetails: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
  cardInvitationStatus: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
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
