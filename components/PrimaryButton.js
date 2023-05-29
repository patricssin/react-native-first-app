import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'
import Colors from '../constants/colors'

function PrimaryButton({children, onPress}) {
  function pressHandler(e) {
    onPress && onPress()
  }

  return (
    // //this may cause issue, should move view out of pressable
    // <Pressable onPress={pressHandler} android_ripple={{color: '#620233'}}>
    //   <View style={style.buttonContainer}>
    //     <Text style={style.buttonText}>{children}</Text>
    //   </View>
    // </Pressable>
    // style can receive array
    <View style={style.buttonOuterContainer}>
      <Pressable style={({pressed}) => pressed ? [style.buttonContainer, style.pressed] : style.buttonContainer} onPress={pressHandler} android_ripple={{color: Colors.primary600}}>
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>

  )
}

const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, //only android
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75,

  }
})

export default PrimaryButton