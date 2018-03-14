import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { FONT_SIZE_TEXT, FONT_SIZE_TITLE } from '../../../styles/style';
import SearchFriendsDetail from './SearchFriendsDetail';

class SearchFriends extends React.Component {
    constructor(){
        super();
        this.state = {
            searchText: undefined,
            contacts: undefined
        }
    }

    componentDidMount(){
        let contacts = [
            {key:1, name: 'jhon', image:'avatar'},
            {key:2, name: 'Martin', image:'avatar'},
            {key:3, name: 'Sophie', image:'avatar'}
        ];

        this.setState({contacts});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.SearchInput}
                        placeholder="Search..."
                        onChangeText={(searchText)=> this.setState({searchText})}
                    />
                    <Button 
                        title="Done" 
                        onPress={()=> Alert.alert("done")}
                    />
                </View>
                <FlatList
                    contentContainerStyle={styles.contactList} 
                    data={this.state.contacts}
                    renderItem={ ({item})=> <SearchFriendsDetail name={item.name} image={item.image} checked={false}/>}
                />
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // borderWidth: 0.5,
        // borderColor: 'black'
    },
    SearchInput: {
        flex: 1,
        padding: 10,
        fontSize: FONT_SIZE_TEXT
    },
    contactList: {
        marginTop: 20
    }
})

export default SearchFriends;