import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { Colors, Size } from '../constant/Constant'

const height = Dimensions.get('window').height

export default function FloatingButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.black,
    borderRadius: 100,
    bottom: 20,
    height: height * 0.07,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.7,
    width: height * 0.07,
  },
  text: {
    color: Colors.white,
    fontSize: Size.text_xxxl,
    fontWeight: 'bold',
  },
})
