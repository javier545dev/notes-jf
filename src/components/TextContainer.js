import { View, StyleSheet } from 'react-native'

export default function TextContainer({ children }) {
  return <View style={styles.container}>{children}</View>
}
const styles = StyleSheet.create({
  container: {
    gap: 20,
    justifyContent: 'flex-start',
    paddingHorizontal: 40,
    paddingTop: 20,
    width: '100%',
  },
})
