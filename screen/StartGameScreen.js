import React, { useState } from 'react'
import {TextInput, View, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

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
    <View style={styles.inputContainer}> 
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
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    backgroundColor: '#3b021f',
    marginHorizontal: 24,
    borderRadius: 8,
    // android boxshadow
    elevation: 4,
    // ios boxshadow
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    shadowRadius: 6,
    shadowOpacity: 0.24,
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  numberInput: {
    height:50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
