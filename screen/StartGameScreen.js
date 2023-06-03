import React, { useState } from 'react'
import {TextInput, View, StyleSheet, Alert, Text} from 'react-native'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'
import InstructionText from '../components/ui/InstructionText'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

function StartGameScreen({onPickedConfirm}) {
  const [enternumber, setenternumber] = useState('')

  function numberInputHandler(value) {
    setenternumber(value)
  }

  function resetNumber() {
    setenternumber('')
  }

  function confirmInputHandler() {
    const chosenNum = parseInt(enternumber)

    if (isNaN(chosenNum) || chosenNum <= 0|| chosenNum >= 99) {
      //show alert
      // Alert.prompt()
      // Alert.alert('Title', 'Message', [buttons])
      Alert.alert(
        'Invalid number', 
      'Number has to be a number between 1 and 99', 
      [{text: 'Okay', style: 'destructive', onPress: resetNumber}]
      )

      return
    } 

    onPickedConfirm(chosenNum)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card> 
        <InstructionText>Enter a number:</InstructionText>
        <TextInput 
          style={styles.numberInput} 
          maxLength={3}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enternumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    marginTop: 100,
    alignItems: 'center'
  },
  
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24
  },
  numberInput: {
    height:50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
