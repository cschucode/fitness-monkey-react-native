import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

const Header = ({ title, logo }) => {
  return (
    <View>
      <StatusBar></StatusBar>
      <Text style={{ padding: 10, color: 'orange', fontSize: 24, backgroundColor: 'navy' }}>{title}</Text>
    </View>
  );
}

export default Header;
