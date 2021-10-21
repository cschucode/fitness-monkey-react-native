import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';

import db from '../db/expo_sqlite_db';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [addiction, setAddiction] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleOnPress = async (navigationObj) => {
    await createTable();
    await setUser(username, addiction, date.getTime());
    await getUser();

    return navigationObj.navigate('NavigationScreens');
  };

  const createTable = async () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, addiction TEXT, sobriety_date INTEGER)`,
          [],
          (tx, results) => {},
          (err) => console.log('error creating table')
        );
      }
    )
  }


  const addUsersToDB = (users) => {
    db.transaction(
      (tx.executeSql(
        `query`,
        [],
        (tx, results) => {},
        (err) => console.log(err)
      ))
    )
  }

  const setUser = async (username, addiction, recoveryDate) => {
    try {
      await db.transaction(
        async (tx) => {
          await tx.executeSql(
            `INSERT INTO users (username, addiction, sobriety_date) VALUES (?, ?, ?)`,
            [username, addiction, recoveryDate],
            (tx, results) => {
              console.log(results.rows.item(0));
            },
            (err) => console.log(err)
          )
        }
      )
    } catch (error) {
      console.log(error.message);
    }
  }

  const getUser = async () => {
    try {
      db.transaction(
        async (tx) => {
          await tx.executeSql(
            `SELECT * FROM users`,
            [],
            (tx, results) => {
              console.log(results.rows._array);
            }
          )
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'orange', fontSize: 36, margin: 10 }}>Fitness Monkey</Text>
      </View>
      <View style={{ flex: 2 }}>
        <TextInput placeholderTextColor="orange" style={styles.input} placeholder="what's your name?" value={username} onChangeText={setUsername} />
        <TextInput placeholderTextColor="orange" style={styles.input} placeholder="what would you like to overcome?" value={addiction} onChangeText={setAddiction} />
        <View>
          <Pressable style={styles.datepicker} onPressIn={showDatepicker}>
            <AntDesign name="calendar" size={24} color="orange" />
            <Text style={{height: 40, margin: 12, padding: 10, color: 'orange', fontSize: 18 }}>Select recovery date</Text>
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode='date'
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <View style={{ padding: 10 }}>
          <Button
            title="Sign In"
            onPress={() => navigation.navigate('NavigationScreens', { username, addiction, time: date.getTime() })}
            style={styles.signin}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'dodgerblue',
    borderRadius: 10,
    borderWidth: 1,
    color: 'orange',
    fontSize: 18,
    height: 60,
    margin: 12,
    padding: 10,
  },
  datepicker: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  signin: {
    padding: 15,
    borderColor: 'dodgerblue',
    borderWidth: 1,
  }
});

export default LoginScreen;
