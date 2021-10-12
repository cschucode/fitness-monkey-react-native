import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation, styles }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="To Recovery Metrics"
        onPress={() => navigation.navigate('Recovery')}
      />
    </View>
  );
};

export default HomeScreen;
