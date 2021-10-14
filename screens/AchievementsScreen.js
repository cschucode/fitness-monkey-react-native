import React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';

import oneDayBadge from '../assets/badges/recovery_badge_one_day.jpg';
import oneWeekBadge from '../assets/badges/recovery_badge.jpeg';
import oneMonthBadge from '../assets/badges/recovery_badge_one_month.jpeg';
import threeMonthBadge from '../assets/badges/recovery_badge_3_months.jpeg';
import sixMonthBadge from '../assets/badges/recovery_badge_red.png';
import oneYearBadge from '../assets/badges/recovery_badge_one_year.jpeg';
import twoYearBadge from '../assets/badges/recovery_badge_two_years.jpeg';
import fiveYearBadge from '../assets/badges/recovery_badge.jpeg';

const ACHIEVEMENTS = [
  { days: 1, title: 'One Day', badgeImage: oneDayBadge },
  { days: 7, title: 'One Week', badgeImage: oneWeekBadge },
  { days: 30, title: 'One Month', badgeImage: oneMonthBadge },
  { days: 90, title: 'Three Months', badgeImage: threeMonthBadge },
  { days: 180, title: 'Six Months', badgeImage: sixMonthBadge },
  { days: 365, title: 'One Year', badgeImage: oneYearBadge },
  { days: 730, title: 'Two Years', badgeImage: twoYearBadge },
  { days: 1095, title: 'Three Years', badgeImage: fiveYearBadge },
  { days: 1460, title: 'Four Years', badgeImage: fiveYearBadge },
  { days: 1825, title: 'Five Years', badgeImage: fiveYearBadge },
];

const AchievementsScreen = ({ userInfo }) => {
  const  { username, addiction, recoveryTime } = userInfo;
  const { days } = recoveryTime;
  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    return item.days <= days;
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Achievements Screen</Text>
      {filteredAchievements.map((ach) => {
        return (
          <View key={ach.days} style={styles.achievement}>
            <Image style={styles.image} source={ach.badgeImage} />
            <Text style={styles.badgeText}>{ach.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
  },
  achievement: {
    alignItems: 'center',
    borderColor: 'dodgerblue',
    borderWidth: 1,
    marginVertical: 10,
    padding: 15,
    flexDirection: 'row',
  },
  text: {
    color: 'orange',
    fontSize: 24,
  },
  badgeText: {
    color: 'orange',
    fontSize: 32,
    paddingHorizontal: 20,
  },
  image: {
    height: 80,
    width: 80,
  }
});

export default AchievementsScreen;
