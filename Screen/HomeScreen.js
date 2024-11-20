import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import UserState from '../Function/UserState';

const HomeScreen = ({ navigation }) => {

  const handleLogout = async () => {
    UserState.setUser({});
    navigation.navigate('Login');
  }
  return (
    <View style={[styles.container, { backgroundColor: '#3F069D' }]}>
      <View style={styles.logoContainer}>
        <Image source={require('./splash.png')} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('FunFact')}>
        <Text style={styles.button}>NewGame</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Leader')}>
        <Text style={styles.button}>Scoreboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('About')}>
        <Text style={styles.button}>AboutApp</Text>
      </TouchableOpacity>   
      
      <TouchableOpacity style={styles.backButton} onPress={ handleLogout }>
        <Text style={styles.button}>Logout</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  backButton: {
    
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '80%', // Szerokość kontenera przycisków
  },
  button: {
    height: 70,
    textAlign: 'center',
    width: '80%', // Szerokość tła przycisku (możesz zmienić na dowolną wartość)
    minWidth: 300,
    maxWidth: 500, // Maksymalna szerokość tła przycisku, jeśli chcesz ograniczyć maksymalną szerokość
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
    color: '#FFFFFF',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    paddingTop: 10,
    fontSize: 40
  },
});


export default HomeScreen;
