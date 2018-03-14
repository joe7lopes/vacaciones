import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';

import { FONT_SIZE_TITLE, FONT_SIZE_TEXT } from '../../styles/style';

class Events extends React.Component {
    static navigationOptions = { header: null };

    state = {
      plans: [
        { key: 'Trip to ibiza' },
        { key: 'Coffee' },
        { key: 'Visit Grandma' },
      ]
    }

    renderPlan(plan) {
      return (
        plan ? <Text style={styles.planDetail}>{plan.key}</Text> : <Text> No Plans </Text>
      );
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Events</Text>
          <FlatList
            contentContainerStyle={styles.plansList}
            data={this.state.plans}
            renderItem={({ item }) => this.renderPlan(item)}
          />
          <View style={styles.createPlanButton}>
            <Button
              title="Create new Event"
              onPress={() => this.props.navigation.navigate('NewEvent')}
            />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 75,
  },
  title: {
    textAlign: 'center',
    fontSize: FONT_SIZE_TITLE
  },
  createPlanButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  plansList: {
    borderWidth: 0.5,
    borderColor: 'black'
  },
  planDetail: {
    fontSize: FONT_SIZE_TEXT
  }
});

export default Events;
