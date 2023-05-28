import React from 'react'
import { StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import StartGameScreen from './screen/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
})
