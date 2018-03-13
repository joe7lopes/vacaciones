import React from 'react';
import { View, Text, TextInput, Modal } from 'react-native';

class Login extends React.Component{

    state = {
        modalVisible: true
    };

    render(){
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                </Modal>
            </View>
        )
    }
}