import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

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

  const handleOnPress = () => {
    // create a new user in the database
    console.log(date);

  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput style={styles.input} placeholder="username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="addiction" value={addiction} onChangeText={setAddiction} />

      <Pressable onPressIn={showDatepicker}>
        <Text style={styles.input}>Select Recovery Date</Text>
      </Pressable>
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
      <Button
        title="Sign In"
        onPress={handleOnPress}
      />
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
