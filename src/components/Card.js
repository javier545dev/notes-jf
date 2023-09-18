import { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import { Colors, Size } from '../constant/Constant'
import { NotesContext } from '../global/context/Context'

export default function Card({ item }) {
  const navigation = useNavigation()
  const { modalVisible, setDeleteNote, setModalVisible, setModal } = useContext(NotesContext)
  const { width, height } = useWindowDimensions()

  // navigate to Detail screen and send item as params
  const Navigate = ({ item }) => {
    navigation.navigate('Detail', { item })
  }

  // set modalVisible to true and set modal to item
  const PressCard = ({ item }) => {
    setModalVisible(!modalVisible)
    setModal(item)
  }

  // navigate to Edit screen and send item as params
  const Edit = ({ item }) => {
    navigation.navigate('Edit', { item, type: 'edit' })
  }

  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => PressCard({ item })}
      onLongPress={() => Navigate({ item })}
      style={styles.container}>
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
          <View style={{ flexDirection: 'row', gap: 30 }}>
            <TouchableOpacity onPress={() => Edit({ item })}>
              <AntDesign name="edit" size={22} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDeleteNote(item.id)}>
              <AntDesign name="delete" size={22} color={Colors.white} />
            </TouchableOpacity>
          </View>
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
