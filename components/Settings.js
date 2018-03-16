import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FONT_SIZE_TEXT } from '../styles/style';

class Settings extends React.Component {
  state = {
    syncWithPhoneCalendar: false
  }

  onSyncWithCalendar = () => {
    const syncWithPhoneCalendar = !this.state.syncWithPhoneCalendar;
    this.setState({ syncWithPhoneCalendar });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Ionicons name="ios-calendar-outline" size={25} />
          <Text style={styles.label}>Sync with phone calendars</Text>
          <Switch
            style={styles.switch}
            value={this.state.syncWithPhoneCalendar}
            onValueChange={this.onSyncWithCalendar}
          />
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50
  },
  row: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.5
  },
  label: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 10,
    fontSize: FONT_SIZE_TEXT

  },
  switch: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});

export default Settings;
