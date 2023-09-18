import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Icon({ setOrientation, orientation }) {
  return (
    <TouchableOpacity onPress={() => setOrientation(!orientation)}>
      <AntDesign name="swap" size={24} color="black" />
    </TouchableOpacity>
  )
}
