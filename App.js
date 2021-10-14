import React, { useState, createContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

import { Ionicons, Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import RecoveryScreen from './screens/RecoveryScreen';
import SocialFeedScreen from './screens/SocialFeedScreen';


// screenOptions={({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === 'Home') {
//       iconName = focused
//         ? 'ios-information-circle'
//         : 'ios-information-circle-outline';
//     } else if (route.name === 'Settings') {
//       iconName = focused ? 'ios-list-box' : 'ios-list';
//     }

//     // You can return any component that you like here!
//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'gray',
// })}
const screenOptions = {
  home: {
    tabBarIcon: ({ focused, color, size }) => {
      return <Entypo name='home' size={24} color='orange' />
    },
    tabBarBadge: 2,
    headerShown: false
  },
  recovery: {
    tabBarIcon: () => <AntDesign name='barschart' size={24} color='orange' />,
    headerShown: false
  },
  fitness: {
    tabBarIcon: () => <FontAwesome5 name='running' size={24} color='orange' />,
    headerShown: false
  },
  social: {
    tabBarIcon: () => <Ionicons name='people' size={24} color='orange' />,
    headerShown: false
  }
}

const App = () => {
  const WorkoutScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 24}}>WorkoutScreen Screen</Text>
      </View>
    );
  }

  return (
      <View style={styles.container}>
        <Header title="Fitness Monkey" />
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'navy' }}>
          <NavigationContainer style={{ backgroundColor: 'navy' }}>
            <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: 'navy'}}} initialRouteName="Home">
              <Tab.Screen name="Home" options={screenOptions.home} component={HomeScreen} />
              <Tab.Screen name="Sign In" component={RegistrationScreen} />
              <Tab.Screen name="Recovery" options={screenOptions.recovery} component={RecoveryScreen} />
              <Tab.Screen name="Fitness" options={screenOptions.fitness} component={WorkoutScreen} />
              <Tab.Screen name="SocialFeed" options={screenOptions.social} component={SocialFeedScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
        {/* <Footer /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
