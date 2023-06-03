import React, { useEffect, useMemo, useState } from 'react'
import {Text, View, StyleSheet, SafeAreaView, Alert} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title  from '../components/ui/Title'
import InstructionText from '../components/ui/InstructionText';

function generateRandomBetween(min, max, exclude) {
  const ranNum = Math.floor(Math.random() * (max - min)) + min;

  // when there is no space to get a random number will cause maximum call stack
  if (ranNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return ranNum
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userPickedNumber, gameOverHandler}) {
  const initGuess = useMemo(() => generateRandomBetween(minBoundary, maxBoundary, userPickedNumber), []) 
  const [currentGuess, setCurrentGuess] = useState(initGuess)

  useEffect(() => {
    if (currentGuess === userPickedNumber) {
      gameOverHandler()
    }
  }, [currentGuess, userPickedNumber])

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userPickedNumber) || 
      (direction === 'higher' && currentGuess > userPickedNumber)
    ) {
      Alert.alert("Don't lie", 'You know that is wrong', [{text: 'Sorry!', style: 'cancel'}])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }

    setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary, currentGuess))
  }

  return (
    <View style={styles.screen}>
      <Title>Oppoent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons color={'white'} size={24} name="md-remove"/></PrimaryButton>
          </View>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}><Ionicons color={'white'} size={24} name="md-add"/></PrimaryButton>
          </View>
        </View>
      </Card>
      <View></View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  instructionText: {
    marginBottom: 10
  },
  screen: {
    flex: 1,
    padding: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
})