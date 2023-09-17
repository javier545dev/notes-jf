import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors, Size } from '../constant/Constant'

export default function Card({ item }) {
  const { width, height } = useWindowDimensions()
  const navigation = useNavigation()

  const Navigate = ({ item }) => {
    navigation.navigate('Detail', { item })
  }

  return (
    <TouchableOpacity key={item.id} onPress={() => Navigate({ item })} style={styles.container}>
      <View
        style={[
          styles.card,
          {
            height: height / 4,
            width: width * 0.8,
          },
        ]}>
        <View
          style={[styles.cardHeader, { backgroundColor: item.colorPriority, height: height / 20 }]}>
          <Text style={styles.cardHeaderTitle}>{item.title}</Text>
          <TouchableOpacity>
            <Text style={styles.cardHeaderTitle}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.cardBody, { height: height / 5 }]}>
          <View style={styles.cardBodyContainer}>
            <Text>Creator: {item.creator}</Text>
            <Text>{item.date}</Text>
          </View>
          <Text style={styles.textBody}>{item.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 10,
    flex: 1,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 7,
  },
  cardBody: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  cardBodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cardHeader: {
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: 20,
    width: '100%',
  },
  cardHeaderTitle: {
    color: Colors.white,
    fontSize: Size.text_md,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  textBody: {
    fontSize: Size.text_sm,
    textAlign: 'justify',
  },
})
