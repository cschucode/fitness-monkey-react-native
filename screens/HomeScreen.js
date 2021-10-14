import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, userInfo }) => {
  const { username, addiction, recoveryTime } = userInfo;
  const { days, hours, minutes } = recoveryTime;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {username}!</Text>

      <View style={styles.metrics}>
        <Text style={{ fontSize: 16, paddingVertical: 10, color: 'orange' }}>Recovery Metrics</Text>
        <Text style={styles.metricsText}>{days} days</Text>
        <Text style={styles.metricsText}>{hours} hours</Text>
        <Text style={styles.metricsText}>{minutes} minutes</Text>
      </View>
      <Text style={styles.text}>free from {addiction}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  metrics: {
    borderColor: 'orange',
    borderWidth: 1,
    padding: 50,
  },
  metricsText: {
    color: 'dodgerblue',
    fontSize: 40,
  },
  text: {
    color: 'dodgerblue',
    fontSize: 32,
  },
});

export default HomeScreen;
