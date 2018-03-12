import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyCallendar extends React.Component {

    render(){
        return (
            <View style={styles.container}>
                <Text> MyCallendar </Text>
            </View>
        )
    }
}

export default MyCallendar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });