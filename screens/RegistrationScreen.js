import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';

import db from '../db/expo_sqlite_db';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [addiction, setAddiction] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleOnPress = async () => {
    // create a new user in the database
    const mockUser = { username: 'Mocky', time: new Date().getTime() };
    navigation.navigate('Recovery', mockUser);
    await createTable();
    await setUser(username, addiction, date.getTime());
    await getUser();
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

  const setUser = async (username, addiction, recoveryDate) => {
    try {
      await db.transaction(
        async (tx) => {
          await tx.executeSql(
            `INSERT INTO users (username, addiction, sobriety_date) VALUES (?, ?, ?)`,
            [username, addiction, recoveryDate],
            (tx, results) => {},
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
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput style={styles.input} placeholder="username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="addiction" value={addiction} onChangeText={setAddiction} />

      <Pressable style={{flexDirection: 'row', alignItems: 'center', padding: 10}} onPressIn={showDatepicker}>
        <AntDesign name="calendar" size={24} color="black" />
        <Text style={{height: 40, margin: 12, padding: 10}}>Select recovery date</Text>
      </Pressable>
      <Text style={{padding: 10}}>Date selected: {date.toLocaleDateString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={{ padding: 10 }}>
        <Button
          style={{backgroundColor: 'green', height: 40}}
          title="Sign In"
          onPress={handleOnPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default RegistrationScreen;
