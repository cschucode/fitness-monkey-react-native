import React from 'react';
import { View, Text, Button } from 'react-native';

const RecoveryScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>Hi {route.params.username}!</Text>
      <Button onPress={() => navigation.navigate('Auth')} title="Go Home" />
    </View>
  );
};

export default RecoveryScreen;
