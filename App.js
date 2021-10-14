import React, { useState, createContext } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import SocialFeedScreen from './screens/SocialFeedScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = ({ navigation, route }) => {
  const { username, addiction, time } = route.params;

  const convertToDays = (ms) => {
    // get current time
    const currentTime = Date.now();
    let accrued = currentTime - ms;

    let days = Math.floor(accrued / (86400 * 1000));
    accrued -= days * (86400 * 1000);
    let hours = Math.floor(accrued / (60 * 60 * 1000 ));
    accrued -= hours * (60 * 60 * 1000);
    let minutes = Math.floor(accrued / (60 * 1000));

    return { days, hours, minutes };
  };

  const screenOptions = {
    home: {
      tabBarIcon: ({ focused, color, size }) => {
        return <Entypo name='home' size={24} color='orange' />
      },
      headerShown: false,
      tabBarShowLabel: false,
    },
    achievements: {
      tabBarIcon: () => <FontAwesome5 name="award" size={24} color="orange" />,
      headerShown: false,
      tabBarShowLabel: false,
    },
    fitness: {
      tabBarIcon: () => <FontAwesome5 name='running' size={24} color='orange' />,
      headerShown: false,
      tabBarShowLabel: false,
    },
    social: {
      tabBarIcon: () => <Ionicons name='people' size={24} color='orange' />,
      headerShown: false,
      tabBarBadge: 2,
      tabBarShowLabel: false,
    }
  }

  const userInfo = { username, addiction, recoveryTime: convertToDays(time) };

  return (
    <View style={styles.container}>
      <Header title="Fitness Monkey" />
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'navy' }}>
        <NavigationContainer independent={true} style={{ backgroundColor: 'navy' }}>
          <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: 'navy'}}} initialRouteName="Achievements">
            <Tab.Screen name="Home" options={screenOptions.home}>
              {props => <HomeScreen userInfo={userInfo} />}
            </Tab.Screen>
            <Tab.Screen name="Achievements" options={screenOptions.achievements}>
              {props => <AchievementsScreen userInfo={userInfo} />}
            </Tab.Screen>
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
    <NavigationContainer independent={true}>
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
