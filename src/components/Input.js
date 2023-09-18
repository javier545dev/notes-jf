import { View, Text, TextInput, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Input({ title, value, onChange, placeholder, multiline = false }) {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(text)}
        multiline={multiline}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          height: multiline ? 150 : 50,
          textAlignVertical: multiline ? 'top' : undefined,
          paddingTop: multiline ? 15 : 0,

          width: width * 0.8,
          position: 'relative',
          borderRadius: 30,
          paddingHorizontal: 20,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  text: {
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingLeft: 20,
  },
})
