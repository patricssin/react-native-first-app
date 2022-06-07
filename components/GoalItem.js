import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native'

export const GoalItem = ({text, id, onDeleteItem}) => {
  return (
    <View style={styles.goalItem}> 
      <Pressable android_ripple={{color: '#210644'}} style={({pressed}) => pressed && styles.pressItem} onPress={onDeleteItem.bind(this, id)}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 5,
  },
  pressItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#fff',
    padding: 8,
  }
})