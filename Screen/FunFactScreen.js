import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FunFact } from '../Function/ApiConnection';

const FunFactScreen = ({ navigation }) => {
  const [fact, setFact] = useState('Loading fun fact...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const fetchedFact = await FunFact();
        setFact(fetchedFact);
      } catch (error) {
        console.error("Error fetching the fun fact:", error); // Logowanie błędów
        setError('Error fetching the fun fact');
      }
    };

    fetchFact();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fun fact</Text>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <Text style={styles.fact}>{fact}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game', { infiniteGameMode: false })}>
        <Text style={styles.buttonText}>Start normal game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game', { infiniteGameMode: true })}>
        <Text style={styles.buttonText}>Start infinite game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F069D',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  fact: {
    fontSize: 30,
    marginBottom: 20,
    padding: 10,
    color: '#FFFFFF',
  },
  button: {
    marginVertical: 10,
    width: '80%',
    height: 70,
    borderRadius: 10,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 40,
  },
});

export default FunFactScreen;
