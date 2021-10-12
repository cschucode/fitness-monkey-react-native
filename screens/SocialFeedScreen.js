import React, { useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

const SocialFeedScreen = () => {
  const dogs = ['Sam', 'Fido', 'Chunky', 'Rex', 'T-Bone'];

  return (
    <ScrollView>
        <Text>Social Feed Screen</Text>
        <View style={{ height: 30, padding: 5}}>
        {dogs.map((name) => {
          return <Text key={name} style={{ borderColor: '#bbb', borderWidth: 1, margin: 5, padding: 50 }}>{name}</Text>;
        })}
        </View>
      </ScrollView>
  );
}

export default SocialFeedScreen;
