import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

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

const AuthScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasRegistered, setHasRegistered] = useState(false);

  const handleAuth = (e) => {
    console.log({ username, password });
    // Register
      // Create a user in the database
      // Take user to registration form page
    // Login
      // Not a member, take them to registration page
      // Are a member, take them to recovery dashboard
    setHasRegistered(!hasRegistered);
    setUsername('');
    setPassword('');
    navigation.navigate('Recovery', { username });
  }
  return (
    <View style={styles.container}>
      <Text>Fitness Monkey</Text>
      <TextInput style={styles.textInput} placeholder="username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.textInput} placeholder="password" value={password} onChangeText={setPassword} />
      <Button type='Submit' onSubmit={handleAuth} onPress={handleAuth} title={hasRegistered ? 'Login' : 'Register'} />
      <StatusBar style="auto" />
    </View>
  );
}

export default AuthScreen