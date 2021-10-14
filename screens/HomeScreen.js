import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation, styles }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24}}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
