import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasRegistered, setHasRegistered] = useState(false);

  const handleAuth = (e) => {
    // Register
      // Create a user in the database
      // Take user to registration form page
    // Login
      // Not a member, take them to registration page
      // Are a member, take them to recovery dashboard
    setHasRegistered(!hasRegistered);
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Fitness Monkey</Text>
        <TextInput style={styles.textInput} placeholder="username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.textInput} placeholder="password" value={password} onChangeText={setPassword} />
        <Button onPress={handleAuth} title={hasRegistered ? 'Login' : 'Register'} />
        <StatusBar style="auto" />
      </View>
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
