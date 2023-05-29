import React from 'react'
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'
import Title  from '../components/Title'

export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Oppoent's Guess</Title>
      <Text>GUESS</Text>
      <View>
        <Text>Higher or Lower</Text>
        <Text>+ -</Text>
      </View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12
  },
})