import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../constant/Constant'

export default function Other({ children }) {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    position: 'relative',
  },
})
