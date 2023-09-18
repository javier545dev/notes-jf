import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Size } from '../constant/Constant'

export default function EmptyNotes({ text }) {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: Size.text_xxl,
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
  },
})
