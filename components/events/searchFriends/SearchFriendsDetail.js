import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native';
import { FONT_SIZE_TEXT } from '../../../styles/style';

const SearchFriendsDetail = ({name, image, checked}) => (
    <View style={styles.container}>
        <Text>IMG</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.checkBox}>false</Text>
    </View>
)

SearchFriendsDetail.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.any,
    checked: PropTypes.bool
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    name:{
        flex:2,
        marginLeft: 20,
        fontSize: FONT_SIZE_TEXT,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    checkBox: {

    }
});

export default SearchFriendsDetail;