//ScoreScreen.js

import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native'; 
import UserState from '../Function/UserState';
import {SendScore} from '../Function/ApiConnection';

const ScoreScreen = ({ navigation }) => {
  const route = useRoute();
  const score = route.params?.score;

  useEffect(() => {
    const sendUserScore = async () => {
      const username = UserState.getUser(); 
      const response = await SendScore(username, score);
      console.log(response); 
    };

    sendUserScore();
  }, [score]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.congratulationsText}>Congratulations</Text>
        <Text style={styles.scoreText}>Your score: {score}</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F069D',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratulationsText: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 20,
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ScoreScreen;
