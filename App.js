import React, { useState, createContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import RecoveryScreen from './screens/RecoveryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <View style={styles.container}>
        <Header title="Fitness Monkey" />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" styles={styles.container} component={HomeScreen} />
              <Stack.Screen name="Auth" component={AuthScreen} />
              <Stack.Screen name="Register" component={RegistrationScreen} />
              <Stack.Screen name="Recovery" component={RecoveryScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <Footer />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#bbb',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default App;
