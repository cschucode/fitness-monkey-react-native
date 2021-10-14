import React from 'react';
import { StyleSheet, View, Text, Button, Pressable, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ title, logo }) => {
  return (
    <View>
      <StatusBar></StatusBar>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Pressable onPress={() => console.log('user profile')}>
          <FontAwesome name="user-circle" size={24} color="orange" />
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'navy',
    borderBottomColor: 'orange',
    flexDirection: 'row',
    padding: 10,
  },
  headerText: {
    backgroundColor: 'navy',
    color: 'orange',
    flex: 1,
    fontSize: 24,
  },
});

export default Header;
