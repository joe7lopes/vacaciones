import React from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import moment from 'moment/src/moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dateFormat } from '../../../constants';
import { FONT_SIZE_TITLE, FONT_SIZE_TEXT, COLOR_PRIMARY } from '../../../styles/style';
import InvitedFriendsListDetail from './InvitedFriendListDetail';
import DatePicker from './DatePicker';

class NewEvent extends React.Component {
    static navigationOptions = {
      title: 'New Event',
    };
    state = {
      datePickerVisible: false,
      name: undefined,
      startDate: moment(),
      endDate: moment(),
      location: undefined,
      people: [
        { id: 1, name: 'albert' },
        { id: 2, name: 'Jhon' },
        { id: 3, name: 'matheus' }
      ]

    };

    onInviteFriendsClicked() {
      this.props.navigation.navigate('SearchContact');
    }

    onCreateClicked() {
      // TODO Save the event.
      this.props.navigation.goBack();
    }

    setEventDates = (startDate, endDate) => {
      this.setState({
        datePickerVisible: false,
        startDate,
        endDate
      });
    }

    handleOnDateConfirm = (startDate, endDate) => {
      if (startDate && endDate) {
        this.setEventDates(startDate, endDate);
      } else if (startDate && !endDate) {
        this.setEventDates(startDate, startDate);
      }
    }

    openDatePicker() {
      this.setState({ datePickerVisible: true });
    }

    handleOnDateClose = () => {
      this.setState({ datePickerVisible: false });
    }

    renderInvidetedFriendsListDetail = ({ name }) => (
      <InvitedFriendsListDetail
        name={name}
        image="img"
        editable={false}
      />
    )
    renderEventDateView = () => (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => this.openDatePicker()}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
          <View>
            <Text>From</Text>
            <Text>{this.state.startDate.format(dateFormat)}</Text>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text>To</Text>
            <Text>{this.state.endDate.format(dateFormat)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )

    render() {
      return (
        <View style={styles.container}>
          { this.state.datePickerVisible &&
            <DatePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onConfirm={this.handleOnDateConfirm}
              onClose={this.handleOnDateClose}
            /> }
          <View style={styles.eventDetailsContainer}>

            <View style={styles.eventDetailsRow}>
              <Ionicons name="ios-people" size={iconsStyle.size} />
              <TextInput
                style={styles.eventName}
                placeholder="Event Name"
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </View>

            <View style={styles.eventDetailsRow}>
              <Ionicons name="md-calendar" size={iconsStyle.size} />
              {this.renderEventDateView()}
            </View>
            <View style={styles.eventDetailsRow}>
              <Ionicons name="ios-pin" size={iconsStyle.size} />
              <TextInput
                style={styles.locationTextInput}
                placeholder="Location"
                value={this.state.location}
                onChangeText={location => this.setState({ location })}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.invitationButton}
            onPress={() => this.onInviteFriendsClicked()}
          >
            <Text style={styles.inviationButtonText}>Invite Friends</Text>
          </TouchableOpacity>
          <View style={styles.friendsContainer}>
            <FlatList
              data={this.state.people}
              keyExtractor={item => item.id}
              renderItem={({ item }) => this.renderInvidetedFriendsListDetail(item)}
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
    backgroundColor: 'white'
  },
  eventDetailsContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY
  },
  friendsContainer: {
    flex: 2
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
    top: -20,
    height: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  inviationButtonText: {
    fontSize: FONT_SIZE_TITLE,
    textAlign: 'center',
    color: 'white'
  },
  locationTextInput: {
    flex: 1,
    textAlign: 'center',
    fontSize: FONT_SIZE_TEXT
  }
});

export default NewEvent;
