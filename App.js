import React, { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {useFonts} from 'expo-font'

import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screen/GameOverScreen';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [pickednum, setPickednum] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [roundsNumber, setRoundsNumber] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/font/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/font/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) return <AppLoading />

  function pickedNumberHandler(num) {
    setPickednum(num)
    setGameIsOver(false)
  }
  let screen  = <StartGameScreen onPickedConfirm={pickedNumberHandler} />

  if (pickednum) {
    screen = <GameScreen userPickedNumber={pickednum} gameOverHandler={gameOverHandler} />
  }

  if (gameIsOver && pickednum) {
    screen = <GameOverScreen useNumber={pickednum} roundsNumber={roundsNumber} onStartNewGame={startNewStartGameHandler} />
  }

  function startNewStartGameHandler() {
    setPickednum(null)
    setRoundsNumber(0)
  }

  function gameOverHandler(numOfRounds) {
    setGameIsOver(true)
    setRoundsNumber(numOfRounds)
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.jpg')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15
  }
})
