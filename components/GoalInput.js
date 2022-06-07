import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'

export const GoalInput = ({onAddGoal, visible, onCancel}) => {
  const [goalText, setGoalText] = useState('')
  function goalInputHandler(enteredText) {
    setGoalText(enteredText)
  }

  function addGoalHandler() {
    onAddGoal(goalText)
    setGoalText('')
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/icon.png')} />
        <TextInput value={goalText} style={styles.textInput} onChangeText={goalInputHandler} placeholder='Your course goal!' />
        <View style={styles.buttonContainer}> 
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title='Add Goal' color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#311b6b',
  },
  image: {
    width:100,
    height: 100,
    margin: 20,
    borderRadius: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
})
