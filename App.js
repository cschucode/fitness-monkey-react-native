import React, { useState, createContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RecoveryScreen from './screens/RecoveryScreen';
import SocialFeedScreen from './screens/SocialFeedScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = ({ navigation }) => {
  const screenOptions = {
    home: {
      tabBarIcon: ({ focused, color, size }) => {
        return <Entypo name='home' size={24} color='orange' />
      },
      headerShown: false,
    },
    recovery: {
      tabBarIcon: () => <AntDesign name='barschart' size={24} color='orange' />,
      headerShown: false,
    },
    fitness: {
      tabBarIcon: () => <FontAwesome5 name='running' size={24} color='orange' />,
      headerShown: false,
    },
    social: {
      tabBarIcon: () => <Ionicons name='people' size={24} color='orange' />,
      headerShown: false,
      tabBarBadge: 2,
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Fitness Monkey" />
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'navy' }}>
        <NavigationContainer independent={true} style={{ backgroundColor: 'navy' }}>
          <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: 'navy'}}} initialRouteName="Home">
            <Tab.Screen name="Home" options={screenOptions.home} component={HomeScreen} />
            <Tab.Screen name="Recovery" options={screenOptions.recovery} component={RecoveryScreen} />
            <Tab.Screen name="Fitness" options={screenOptions.fitness} component={WorkoutScreen} />
            <Tab.Screen name="SocialFeed" options={screenOptions.social} component={SocialFeedScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'NavigationScreens' : 'Login'}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="NavigationScreens" component={Navigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
