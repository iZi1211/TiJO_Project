import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
        The aim of the game is to connect all pairs of animals.
        {"\n\n"}
        Players have a limited number of lives on each screen.
        {"\n\n"}
        It is possible to add an infinite number of boards, each of which has a specific time to complete.
        </Text>
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
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#000000', // Kolor tła przycisku
    borderRadius: 10, // Zaokrąglenie krawędzi przycisku
    paddingHorizontal: 20,
    paddingVertical: 15,
    zIndex: 1,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AboutScreen;
