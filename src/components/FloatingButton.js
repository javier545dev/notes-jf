import { TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../constant/Constant'

export default function FloatingButton({ screen, children, params = {} }) {
  const { height, width } = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          height: height * 0.07,
          width: width * 0.15,
        },
      ]}
      onPress={() => navigation.navigate(screen, params)}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.black,
    borderRadius: 100,
    bottom: 40,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.7,
  },
})
