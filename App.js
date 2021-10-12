import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasRegistered, setHasRegistered] = useState(false);

  const handleLogin = (e) => {
    setHasRegistered(!hasRegistered);
  }

  return (
    <View style={styles.container}>
      <Text>Fitness Monkey</Text>
      <TextInput style={styles.textInput} placeholder="username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.textInput} placeholder="password" value={password} onChangeText={setPassword} />
      <Button onPress={handleLogin} title={hasRegistered ? 'Login' : 'Register'} />
      <StatusBar style="auto" />
    </View>
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
