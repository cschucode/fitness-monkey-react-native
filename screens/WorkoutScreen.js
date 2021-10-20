import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';

import cyclingImage from '../assets/images/cycling.png';
import runningImage from '../assets/images/running.png';
import trexImage from '../assets/images/trex.jpeg';
import turkeyImage from '../assets/images/turkey.jpeg';
import yodaImage from '../assets/images/yoda.jpeg';

const MOCK_WORKOUT_DATA = [
  { id: 1, image: runningImage, workoutType: 'run', duration: '30 minutes', distance: 4.2, steps: 8000, title: 'First Run of the Year', comments: 'It was exhausting but rewarding!'},
  { id: 2, image: trexImage, workoutType: 'hike', duration: '1 hour', distance: 5, title: 'Because it was there', comments: 'Best hike ever!'},
  { id: 3, image: yodaImage, workoutType: 'yoga', duration: '45 minutes', distance: null, title: 'Namaste', comments: 'So relaxing!'},
  { id: 4, image: turkeyImage, workoutType: 'walk', duration: '1 hour', distance: 3.1, title: 'I walk the line', comments: 'Getting it first thing monday morning'},
  { id: 5, image: cyclingImage, workoutType: 'bike', duration: '1 hour', distance: 2, title: 'On the Road Again', comments: 'Take that Lance!!'},
]

const WorkoutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Workouts: </Text>
      <View style={styles.workoutsContainer}>
        {MOCK_WORKOUT_DATA.map((workout) => (
          <View style={styles.cardContainer} key={workout.id}>
            <ImageBackground style={{ height: 250, width: '100%' }} resizeMode="cover" source={workout.image}></ImageBackground>
            <View style={styles.cardInfo}>
              <Text style={styles.title}>{`${workout.workoutType} | ${workout.title}`}</Text>
              <Text style={styles.info}>{workout.comments}</Text>
              <Text style={styles.metrics}>{`${workout.distance} miles | ${workout.duration}`}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },
  text: {
    color: 'orange',
    fontSize: 18
  },
  workoutsContainer: {
    padding: 10,
    flex: 1,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: 'dodgerblue',
    marginVertical: 10,
  },
  cardInfo: {
    padding: 10,
  },
  cardImage: {
    height: '250px',
  },
  title: {
    color: 'orange',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '900',
  },
  info: {
    color: '#bbb',
    fontSize: 14,
    marginVertical: 5,
  },
  metrics: {
    fontSize: 14,
    color: 'orange',
  }
});

export default WorkoutScreen;
