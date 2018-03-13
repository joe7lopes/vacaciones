import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, CheckBox, StyleSheet} from 'react-native';


const SearchContactDetail = ({name, image, selected}) => (
    <View style={styles.container}>
        <Text style={styles.img}>IMG</Text>
        <Text style={styles.name}>{name}</Text>
        <CheckBox style={styles.checkBox} value={selected} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: 20
    },
    img: {
        flex: 2,
        marginRight: 20
    },
    name: {
        flex: 3,
        marginRight: 20
    },
    checkBox: {
        height: 20,
        width: 20,
        right: 50
    }
})

SearchContactDetail.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.any,
    selected: PropTypes.bool
}

export default SearchContactDetail;