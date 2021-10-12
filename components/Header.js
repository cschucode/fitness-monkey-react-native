import React from 'react';
import { View, Text, Button } from 'react-native';

const Header = ({ title, logo }) => {
  return <Text style={{ padding: 20, color: '#bbb', backgroundColor: 'dodgerblue' }}>{title}</Text>;
}

export default Header;
