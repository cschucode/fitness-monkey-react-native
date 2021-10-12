import { StatusBar } from 'expo-status-bar';
import React, { useState, createContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from './screens/AuthScreen';

const Stack = createNativeStackNavigator();

const userContext = createContext({
  username: 'Phil',
  sobriety_date: new Date('June 26, 2000 07:00:00'),
});

const App = () => {
  const RecoveryScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text>Hi {route.params.username}!</Text>
        <Button onPress={() => navigation.navigate('Auth')} title="Go Home" />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Auth'}>
        <Stack.Screen name="Auth" styles={styles} component={AuthScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#bbb',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  }
});

export default App;
