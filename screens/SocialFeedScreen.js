import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

import db from '../db/expo_sqlite_db';

const SocialFeedScreen = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      await db.transaction(
        async (tx) => {
          await tx.executeSql(
            `SELECT * FROM users`,
            [],
            (tx, results) => {
              console.log('results', results.rows._array);
              setUsers(results.rows._array);
            },
            (err) => console.log(err)
          )
        }
      )
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ScrollView>
        <Text>Social Feed Screen</Text>
        <View style={{ flex: 1, padding: 5}}>
        {users.map((user) => {
          return (
            <View key={user.id} style={{ borderWidth: 1, margin: 5, padding: 10}}>
              <Text>member @{user.username}</Text>
              <Text>addiction: {user.addiction}</Text>
              <Text>recovery date in ms: {user.sobriety_date}</Text>
            </View>
          );
        })}
        </View>
      </ScrollView>
  );
}

export default SocialFeedScreen;
