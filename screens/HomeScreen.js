import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation, userInfo }) => {
  const { username, addiction, recoveryTime } = userInfo;
  const { days, hours, minutes } = recoveryTime;

  const greeting = (name) => {
    const time = new Date().getHours();
    let timeOfDay = 'morning';

    if (time < 4 && time > 19) {
      timeOfDay = 'evening';
    } else if (time > 11 && time < 20) {
      timeOfDay = 'afternoon';
    }

    return `Good ${timeOfDay} ${name}`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>{greeting(username)}</Text>
      <Text style={styles.greeting}>Take a moment to appreciate...</Text>
      <View style={styles.metrics}>
        <Text style={styles.metricsText}>{days} days</Text>
        <Text style={styles.metricsText}>{hours} hours</Text>
        <Text style={styles.metricsText}>{minutes} minutes</Text>
        <Text style={styles.greeting}>without</Text>
        <Text style={styles.greeting}>{addiction}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  greeting: {
    fontSize: 18,
    color: 'orange',
    marginVertical: 10,
  },
  metrics: {
    borderColor: 'dodgerblue',
    borderRadius: 150,
    borderWidth: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    height: 300,
    width: 300,
    margin: 30,
  },
  metricsText: {
    color: 'orange',
    fontSize: 32,
  },
  text: {
    color: 'dodgerblue',
    fontSize: 32,
  },
});

export default HomeScreen;
