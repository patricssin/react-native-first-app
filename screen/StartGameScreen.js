import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}> 
      <TextInput 
        style={styles.numberInput} 
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
