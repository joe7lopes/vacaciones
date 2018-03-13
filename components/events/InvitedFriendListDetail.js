import React from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import { FONT_SIZE_TEXT } from '../../styles/style';

const InvitedFriendListDetail = ({ name }) => (
    <View style={styles.container}>
        <Ionicons style={styles.image} name="ios-person" size={25}/>
        <Text style={styles.name}>{name}</Text>
    </View>
    
);

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
    },
    image: {
        marginRight: 10
    },
    name: {
        fontSize: FONT_SIZE_TEXT
    }
})

InvitedFriendListDetail.propTypes = {
    name: PropTypes.string.isRequired
}

export default InvitedFriendListDetail;