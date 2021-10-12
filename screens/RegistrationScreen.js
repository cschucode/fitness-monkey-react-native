import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <TextInput placeholder="name" />
      <TextInput type="password" placeholder="password" />
      <Button onPress={() => navigation.navigate('Recovery')} title="Enter" />
    </ScrollView>
  );
}

export default RegistrationScreen;
