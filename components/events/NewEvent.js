import React from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import { FONT_SIZE_TITLE, FONT_SIZE_TEXT } from '../../styles/style';
import InvitedFriendsListDetail from './InvitedFriendListDetail';

class NewEvent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            eventName: undefined,
            invitedFriends: [
                {key: 'albert'},
                {key: 'Jhon'},
                {key: 'matheus'}
            ]
        }
    }

    static navigationOptions = {
        title: 'New Event',
    };

    onInviteFriendsClicked(){
        this.props.navigation.navigate('SearchFriends');
    }

    onCreateClicked(){
        //TODO Save the event.
        this.props.navigation.goBack();
    }

    render(){
        return (
            <View style={styles.container}> 
                <TextInput
                    style={styles.evenNameInput}
                    placeholder="Event Name"
                    onChangeText={(eventName)=> this.setState({eventName})}
                />
                {this.state.invitedFriends &&
                    <FlatList
                        style={styles.invitedFriendsList}
                        data={this.state.invitedFriends}
                        renderItem={({ item }) => <InvitedFriendsListDetail name={item.key}/>}
                    />
                }
                <Button 
                    title="Invite Friends"
                    onPress={()=> this.onInviteFriendsClicked()}
                />
                 <Button 
                    title="Create Event"
                    onPress={()=> this.onCreateClicked()}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: FONT_SIZE_TITLE
    },
    evenNameInput: {
        height: 100,
        fontSize: FONT_SIZE_TEXT
    }
});

export default NewEvent;