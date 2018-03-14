import React from 'react';
import { View, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { FONT_SIZE_TEXT } from '../../../styles/style';
import SearchContactDetail from './SearchContactDetail';

class SearchContact extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedContacts: [],
      contacts: undefined
    };
  }

  componentDidMount() {
    const contacts = [
      {
        key: 1, name: 'jhon', image: 'avatar', selected: false
      },
      {
        key: 2, name: 'Martin', image: 'avatar', selected: false
      },
      {
        key: 3, name: 'Sophie', image: 'avatar', selected: false
      },
      {
        key: 4, name: 'kacper', image: 'avatar', selected: false
      },
    ];

    this.setState({ contacts });
  }

  onDoneButtonClicked = () => {
    this.props.navigation.goBack();
  }

  renderContactDetail({ item }) {
    const { name, image, selected } = item;
    return (
      <SearchContactDetail
        name={name}
        image={image}
        checked={selected}
        onSelect={() => {
                    let selectedContacts = this.state.selectedContacts.slice(0);
                    if (selected) {
                        selectedContacts.push(item);
                    } else {
                        selectedContacts = selectedContacts.filter(contact => contact !== item);
                    }
                    this.setState({ selectedContacts });
                }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.SearchInput}
            placeholder="Search..."
          />
          <Button
            title="Done"
            onPress={this.onDoneButtonClicked}
          />
        </View>
        <FlatList
          contentContainerStyle={styles.contactList}
          data={this.state.contacts}
          renderItem={this.renderContactDetail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  SearchInput: {
    flex: 1,
    padding: 10,
    fontSize: FONT_SIZE_TEXT
  },
  contactList: {
    marginTop: 20
  }
});

export default SearchContact;
