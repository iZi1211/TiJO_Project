import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import returnDefoultValues from '../Function/DefoultsValues';

// Import obrazków zwierząt
const animalImages = [
  require('../Imgs/bear.jpg'),
  require('../Imgs/bird.jpg'),
  require('../Imgs/cat.jpg'),
  require('../Imgs/chinchilla.jpg'),
  require('../Imgs/dog.jpg'),
  require('../Imgs/elephant.jpg'),
  require('../Imgs/kangaroo.jpg'),
  require('../Imgs/sealion.jpg'),
  require('../Imgs/shark.jpg'),
  require('../Imgs/whale.jpg'),
];
const backImg = require('../Imgs/zoo.jpg');

const GameScreen = ({ navigation, route }) => {
  const [score, setScore] = useState(returnDefoultValues.gameStartScore);
  const [timer, setTimer] = useState(returnDefoultValues.gameTimer);
  const [lives, setLives] = useState(returnDefoultValues.gameLives);
  const [tiles, setTiles] = useState([]);
  const [infiniteGameMode, setGameMode] = useState(route.infiniteGameMode);

  const gameOver = () => {
    navigation.navigate("Score", {score: score});
  }

  // Funkcja do mieszania tablicy
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Funkcja do generowania kafelków
  const generateTiles = () => {
    const animalImagesCopy = [...animalImages, ...animalImages]; // Podwójna ilość obrazków
    const shuffledImages = shuffleArray(animalImagesCopy); // Potasowanie obrazków
    const newTiles = shuffledImages.map((image, index) => ({
      id: index,
      image: image,
      isFlipped: false,
    }));
    setTiles(newTiles);
  };

  useFocusEffect(
    useCallback(() => {
      setScore(returnDefoultValues.gameStartScore);
      setLives(returnDefoultValues.gameLives);
      setTimer(returnDefoultValues.gameTimer);
      setGameMode(route.infiniteGameMode);

      generateTiles(); // Wywołanie funkcji generującej kafelki
      
      return () => {
        
      };
    }, [])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          gameOver();
          return prevTimer;
        }
        return prevTimer - 1;
      });
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  const handleTilePress = id => {
    const flippedTiles = tiles.filter(tile => tile.isFlipped && !tile.matched); // Wybierz odwrócone, ale nie dopasowane kafelki
    const currentTile = tiles.find(tile => tile.id === id);
  
    // Jeśli żadne inne kafelki nie są odwrócone, odwróć bieżący kafelek
    if (flippedTiles.length === 0) {
      const updatedTiles = tiles.map(tile =>
        tile.id === id ? { ...tile, isFlipped: true } : tile
      );
      setTiles(updatedTiles);
    } else if (flippedTiles.length === 1) { // Jeśli jest jeden inny odwrócony kafelek
      const matchingTile = flippedTiles[0];
      
      // Sprawdź, czy obecny kafelek pasuje do innego odwróconego kafelka
      if (currentTile.image === matchingTile.image) {
        // Dopasowane kafelki nie są ponownie odwracane
        const updatedTiles = tiles.map(tile =>
          tile.id === id || tile.id === matchingTile.id ? { ...tile, isFlipped: true, matched: true } : tile
        );
        
        setTiles(updatedTiles);
        setScore(prevScore => prevScore + 1); // Zwiększ wynik
      } else {
        // Jeśli kafelki nie pasują, odwróć obecny kafelek i zresetuj pozostałe po 1 sekundzie
        const updatedTiles = tiles.map(tile =>
          tile.id === id ? { ...tile, isFlipped: true } : tile
        );
        setTiles(updatedTiles);
        setTimeout(() => {
          const resetTiles = tiles.map(tile =>
            tile.isFlipped && !tile.matched ? { ...tile, isFlipped: false } : tile
          );
          setTiles(resetTiles);
          setLives(prevLives => prevLives - 1); // Zmniejsz liczbę żyć
          if (lives <= 1) {
            setLives(0);
            gameOver();
          }
        }, 1000);
      }
    }
  
    // Sprawdź, czy wszystkie pary zostały dopasowane
    const matchedPairs = tiles.filter(tile => tile.matched).length / 2;
    if (matchedPairs === animalImages.length) {
      console.log('aaaa ' + route.params.infiniteGameMode);
      if (route.params.infiniteGameMode === true) {
        setLives(prevLives => prevLives + 3);
        generateTiles();
      } else{
        gameOver();
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.timerText}>Timer: {timer}s</Text>
        <Text style={styles.livesText}>Lives: {lives}</Text>
      </View>
      <View style={styles.grid}>
        {tiles.map(tile => (
          <TouchableOpacity
            key={tile.id}
            style={styles.tile}
            onPress={() => handleTilePress(tile.id)}
          >
            {tile.isFlipped ? (
              <Image source={tile.image} style={styles.tileImage} />
            ) : (
              <Image source={backImg} style={styles.tilePlaceholder} />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const RECTANGLE_SIZE = 80; // Nowy rozmiar prostokąta

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F069D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  timerText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  livesText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tile: {
    width: RECTANGLE_SIZE,
    height: RECTANGLE_SIZE,
    margin: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tilePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CCCCCC',
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

export default GameScreen;
