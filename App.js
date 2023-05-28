import React, { useState } from 'react'
import { StyleSheet, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import StartGameScreen from './screen/StartGameScreen';
import { GameScreen } from './screen/GameScreen';

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
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.jpg')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}
      >
        {screen}
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
