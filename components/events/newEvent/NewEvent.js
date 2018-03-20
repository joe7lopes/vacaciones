import React from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FONT_SIZE_TITLE, FONT_SIZE_TEXT, COLOR_PRIMARY } from '../../../styles/style';
import InvitedFriendsListDetail from './InvitedFriendListDetail';
import DatePicker from './DatePicker';

class NewEvent extends React.Component {
    static navigationOptions = {
      title: 'New Event',
    };
    state = {
      eventName: undefined,
      datePickerVisible: false,
      invitedFriends: [
        { key: 'albert' },
        { key: 'Jhon' },
        { key: 'matheus' }
      ]
    };


    onInviteFriendsClicked() {
      this.props.navigation.navigate('SearchContact');
    }

    onCreateClicked() {
      // TODO Save the event.
      this.props.navigation.goBack();
    }

    openDatePicker() {
      this.setState({ datePickerVisible: true });
    }

    handleOnDateConfirm = (startDate, endDate) => {
      this.setState({ datePickerVisible: false });
      console.log(startDate, endDate);
    }

    handleOnDateClose = () => {
      this.setState({ datePickerVisible: false });
    }

    render() {
      return (
        <View style={styles.container}>
          { this.state.datePickerVisible &&
            <DatePicker
              onConfirm={this.handleOnDateConfirm}
              onClose={this.handleOnDateClose}
            /> }
          <View style={styles.eventDetailsContainer}>
            <View style={styles.eventDetailsRow}>
              <Ionicons name="ios-people" size={iconsStyle.size} />
              <TextInput
                style={styles.eventName}
                placeholder="Event Name"
                onChangeText={eventName => this.setState({ eventName })}
              />
            </View>
            <View style={styles.eventDetailsRow}>
              <Ionicons name="md-calendar" size={iconsStyle.size} />

              <Button
                title="choose dates"
                onPress={() => this.openDatePicker()}
              />
            </View>
            <View style={styles.eventDetailsRow}>
              <Ionicons name="ios-pin" size={iconsStyle.size} />
              <TextInput
                style={styles.locationTextInput}
                placeholder="Location"
                onChangeText={location => console.log(location)}
              />
            </View>
          </View>
          <Button
            style={styles.invitationButton}
            title="Invite Friends"
            onPress={() => this.onInviteFriendsClicked()}
          />
          <View style={styles.friendsContainer}>
            <FlatList
              style={styles.invitedFriendsList}
              data={this.state.invitedFriends}
              renderItem={({ item }) => <InvitedFriendsListDetail name={item.key} />}
            />
          </View>
        </View>

      );
    }
}

const iconsStyle = {
  size: 40
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  eventDetailsContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY
  },
  friendsContainer: {
    flex: 2,
    borderColor: 'black',
    borderWidth: 0.5
  },
  eventDetailsRow: {
    width: 300,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  eventName: {
    flex: 1,
    textAlign: 'center',
    fontSize: FONT_SIZE_TEXT
  },
  invitationButton: {
    height: '10%',
    backgroundColor: 'white'
  },
  locationTextInput: {
    flex: 1,
    textAlign: 'center',
    fontSize: FONT_SIZE_TEXT
  }
});

export default NewEvent;
