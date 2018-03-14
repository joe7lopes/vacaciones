import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';
import { FONT_SIZE_TEXT } from '../../../styles/style';

const SearchContact = ({name, image, checked, onSelect}) => (
    <View style={styles.container}>
        <Text>IMG</Text>
        <CheckBox 
            style={styles.checkBox}
            checkBoxColor='blue'
            leftText={name} 
            isChecked={true}
            onClick={onSelect}/>
    </View>
)

SearchContact.propTypes = {
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
        borderColor: 'blue'
    },
    checkBox: {
        flex: 2,
        marginLeft: 50,
    }
});

export default SearchContact;