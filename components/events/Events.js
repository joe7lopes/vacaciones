import React from 'react';
import {
  SafeAreaView,
  View,
  Button,
  StyleSheet,
  Dimensions
} from 'react-native';

import { COLOR_PRIMARY } from '../../styles/style';
import EventCard from './EventCard';

class Events extends React.Component {
    static navigationOptions = { header: null };

    state = {
      events: [
        { id: 1, title: 'Trip to ibiza', createdAt: 0 },
        { id: 2, title: 'Coffee', createdAt: 0 },
        { id: 3, title: 'Visit Grandma', createdAt: 0 },
      ]
    }

    renderEvents() {
      const { events } = this.state;
      return events.map(event => (
        <EventCard
          key={event.id}
          style={styles.eventBox}
          title={event.title}
          createdAt={event.createdAt}
        />
      ));
    }

    render() {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Button
              title="Create new Event"
              onPress={() => this.props.navigation.navigate('NewEvent')}
            />
          </View>
          <View style={styles.eventsContainer}>
            {this.renderEvents()}
          </View>
        </SafeAreaView>
      );
    }
}

const { width } = Dimensions.get('window');
const padding = width / 20;
const boxSize = (width / 2) - 22;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLOR_PRIMARY
  },
  eventsContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding
  },
  eventBox: {
    height: boxSize,
    width: boxSize,
    marginTop: 8
  }
});

export default Events;
