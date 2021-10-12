import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [recoveryDate, setRecoveryDate] = useState('');
  const [addiction, setAddiction] = useState('');

  const handleOnPress = () => {
    console.log({
      username,
      addiction,
      recoveryDate,
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput style={styles.input} placeholder="username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="addiction" value={addiction} onChangeText={setAddiction} />
      <TextInput style={styles.input} placeholder="recovery date" value={recoveryDate} onChangeText={setRecoveryDate} />
      <Button
        title="Register"
        onPress={handleOnPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#bbb',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default RegistrationScreen;
