import React, { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import StartGameScreen from './screen/StartGameScreen';
import { GameScreen } from './screen/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [pickednum, setPickednum] = useState(null)

  function pickedNumberHandler(num) {
    setPickednum(num)
  }
  let screen  = <StartGameScreen onPickedConfirm={pickedNumberHandler} />

  if (pickednum) {
    screen = <GameScreen />
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
