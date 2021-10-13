import React from 'react';
import { View, Text, Button } from 'react-native';

const RecoveryScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Hi {route.params.username}! You've been free from addiction for {route.params.time}ms!!</Text>
      <Button
        title="To Social Feed"
        onPress={() => navigation.navigate('SocialFeed')}
      />
    </View>
  );
};

export default RecoveryScreen;
