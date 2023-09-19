import { View, Text, StyleSheet } from 'react-native'
import ColorCircle from './ColorCircle'

export default function SelectColor({ colorPriority, setColorPriority }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Color Priority</Text>
      <View style={styles.group}>
        <ColorCircle
          colorPriority={colorPriority}
          setColorPriority={setColorPriority}
          color="black"
        />
        <ColorCircle
          colorPriority={colorPriority}
          setColorPriority={setColorPriority}
          color="blue"
        />
        <ColorCircle
          colorPriority={colorPriority}
          setColorPriority={setColorPriority}
          color="red"
        />
        <ColorCircle
          colorPriority={colorPriority}
          setColorPriority={setColorPriority}
          color="purple"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  group: {
    borderColor: 'black',
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingLeft: 20,
  },
})
