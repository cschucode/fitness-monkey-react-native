import React, { useState, createContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import RecoveryScreen from './screens/RecoveryScreen';
import SocialFeedScreen from './screens/SocialFeedScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <View style={styles.container}>
        <Header title="Fitness Monkey" />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign In">
              <Stack.Screen name="Home" styles={styles.container} component={HomeScreen} />
              <Stack.Screen name="Sign In" component={RegistrationScreen} />
              <Stack.Screen name="Recovery" component={RecoveryScreen} />
              <Stack.Screen name="SocialFeed" component={SocialFeedScreen} />
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
});

export default App;
