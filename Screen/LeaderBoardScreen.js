//LeadreBoardScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScoreBoard } from '../Function/ApiConnection'; // Import metody ScoreBoard z ApiConnection

const LeaderBoardScreen = ({ navigation }) => {
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    const fetchLeaderBoardData = async () => {
      try {
        const data = await ScoreBoard(); // Wywołanie metody ScoreBoard
        setLeaderBoardData(data.split(';').filter(item => item.trim() !== '').map(item => {
          const [name, score] = item.split('/');
          return { name, score: parseInt(score) };
        }));
      } catch (error) {
        console.error(error);
        // Obsługa błędu
      }
    };

    fetchLeaderBoardData();
  }, []); // Pusta tablica zależności oznacza, że ten efekt będzie wykonywany tylko raz po załadowaniu komponentu

  return (
    <View style={styles.container}>
      <View style={styles.leaderBoard}>
        {leaderBoardData.map((item, index) => (
          <Text key={index} style={styles.leaderBoardItem}>{index + 1}. {item.name} : {item.score}</Text>
        ))}
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
  leaderBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderBoardItem: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
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

export default LeaderBoardScreen;

