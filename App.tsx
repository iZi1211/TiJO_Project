import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import FunFactScreen from './Screen/FunFactScreen';
import AboutScreen from './Screen/AboutScreen';
import ScoreScreen from './Screen/ScoreScreen';
import LeaderBoardScreen from './Screen/LeaderBoardScreen';
import GameScreen from './Screen/GameScreen'


const Stack = createStackNavigator();

const App = () => {

SplashScreen.hide();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Leader" component={LeaderBoardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Score" component={ScoreScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="FunFact" component={FunFactScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Game" component={GameScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//
export default App;
