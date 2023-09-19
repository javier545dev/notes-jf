import { View, Text, TextInput, StyleSheet, useWindowDimensions } from 'react-native'

export default function Input({
  title,
  value,
  onChange,
  placeholder,
  multiline = false,
  maxLength = 30,
}) {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(text)}
        multiline={multiline}
        maxLength={maxLength}
        style={[
          styles.input,
          {
            height: multiline ? 150 : 50,
            width: width * 0.8,
            textAlignVertical: multiline ? 'top' : undefined,
            paddingTop: multiline ? 15 : 0,
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  input: {
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingLeft: 20,
  },
})
