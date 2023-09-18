import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Button({ disabled, onPress, children }) {
  const { width } = useWindowDimensions()
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[
        styles.button,
        {
          width: width * 0.8,
          backgroundColor: disabled ? 'grey' : 'blue',
        },
      ]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
