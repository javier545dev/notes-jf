import { TouchableOpacity, StyleSheet } from 'react-native'

export default function ColorCircle({ colorPriority, setColorPriority, color }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          borderColor: colorPriority === color && 'gray',
          borderWidth: colorPriority === color && 3,
        },
      ]}
      onPress={() => setColorPriority(color)}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
})
