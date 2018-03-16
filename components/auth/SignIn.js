import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR_PRIMARY_LIGHTER, FONT_SIZE_LOGIN_BUTTON } from '../../styles/style';

const SignIn = () => (
  <View style={styles.container}>
    <Text>Making Plans with your friends don't have to be a pain anymore</Text>
    <TouchableOpacity style={styles.facebookButton}>
      <Text style={styles.signInButtonText}>Facebook</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.googleButton}>
      <Text style={styles.signInButtonText}>Google</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 100,
    padding: 20
  },
  facebookButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY_LIGHTER
  },
  googleButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  signInButtonText: {
    fontSize: FONT_SIZE_LOGIN_BUTTON,
    color: 'white'
  }
});

export default SignIn;
