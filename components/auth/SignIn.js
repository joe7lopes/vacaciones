import React from 'react';
import { SafeAreaView, View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import {
  COLOR_PRIMARY,
  FONT_SIZE_TITLE,
  FONT_SIZE_TEXT
} from '../../styles/style';

const SignIn = () => (
  <SafeAreaView style={styles.main}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}> Vacaciones </Text>
        <Text style={styles.loginText}>Making Plans with your friends don't have to be a pain anymore</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.signInButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.signInButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY
  },
  container: {
    flex: 1,
    marginLeft: width / 20,
    marginRight: width / 20,
    marginBottom: width / 20,
  },
  header: {
    flex: 1
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  logo: {
    marginTop: height / 20,
    fontSize: FONT_SIZE_TITLE,
    textAlign: 'center',
    color: 'white',
  },
  loginText: {
    marginTop: height / 20,
    fontSize: FONT_SIZE_TEXT,
    textAlign: 'center',
    color: 'white'
  },
  facebookButton: {
    backgroundColor: 'blue',
    padding: 10
  },
  googleButton: {
    marginTop: 5,
    backgroundColor: 'red',
    padding: 10
  },
  signInButtonText: {
    fontSize: FONT_SIZE_TEXT,
    color: 'white',
    textAlign: 'center'
  }

});

export default SignIn;
