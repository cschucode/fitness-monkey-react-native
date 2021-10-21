import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, Image } from 'react-native';
import faker from 'faker';

import db from '../db/expo_sqlite_db';

const SocialFeedScreen = () => {
  const [posts, setPosts] = useState([]);

  const createPosts = (numOfPosts) => {
    const storage = [];

    for (let i = 0; i < numOfPosts; i++) {
      let post = {};
      post.id = i + 1;
      post.avatar = faker.image.avatar();
      post.author = faker.internet.userName();
      post.image = faker.image.people();
      post.title = faker.company.catchPhrase();
      post.body = faker.commerce.productDescription();

      storage.push(post);
    }
    console.log(storage);
    setPosts(storage);
  }

  useEffect(() => {
    createPosts(10);
  }, []);

  return (
    <ScrollView style={styles.container}>
        <View style={styles.feed}>
          <Text style={styles.sectionTitle}>Community</Text>
          {posts.map((post) => {
            console.log(post);
            return (
              <View key={post.id} style={styles.post}>
                <View style={styles.heading}>
                  <Image style={styles.avatar} source={{ uri: post.avatar }} />
                  <Text style={styles.attribution}>{post.author}</Text>
                </View>
                <Image style={styles.image} source={{ uri: post.image }}></Image>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={{ color: 'orange'}}>{post.body}</Text>
              </View>
            );
        })}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
  },
  sectionTitle: {
    color: 'orange',
    fontSize: 18,
  },
  heading: {
    color: 'dodgerblue',
    display: 'flex',
    flexDirection: 'row',
  },
  attribution: {
    color: 'dodgerblue',
    fontWeight: '900',
    fontSize: 16,
    padding: 10,
  },
  feed: {
    flex: 1,
  },
  avatar: {
    height: 40,
    width: 40,
    borderColor: 'dodgerblue',
    borderWidth: 2,
    borderRadius: 50,
  },
  post: {
    borderWidth: 1,
    borderColor: 'dodgerblue',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  title: {
    color: 'dodgerblue',
    fontWeight: '900',
    fontSize: 16,
    paddingVertical: 10,
  },
  image: {
    height: 200,
    marginVertical: 10,
  },
});

export default SocialFeedScreen;
