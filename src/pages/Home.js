import { useState, useContext } from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import Layout from '../layout/Home'
import { Colors, Size } from '../constant/Constant'
import FloatingButton from '../components/FloatingButton'
import Carousel from '../components/Carousel'
import { NotesContext } from '../global/context/Context'
import EmptyNotes from '../components/EmptyNotes'
import ModalNote from '../components/Modal'
import Icon from '../components/Icon'

export default function Home() {
  const { noteModal, notes, modalVisible, setModalVisible } = useContext(NotesContext)
  const { width } = useWindowDimensions()
  const [orientation, setOrientation] = useState(false)

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>NotesJF</Text>
        {notes.length > 1 && (
          <View
            style={{
              gap: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon setOrientation={setOrientation} orientation={orientation} />
          </View>
        )}
      </View>
      <View
        style={[
          styles.body,
          {
            width: width,
          },
        ]}>
        <ModalNote
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          noteModal={noteModal}
        />
        {notes.length === 0 && <EmptyNotes text="You don't have any notes, please add one" />}
        <Carousel orientation={orientation} />
      </View>
      <FloatingButton screen={'Create'}>
        <AntDesign name="plus" size={24} color="white" />
      </FloatingButton>
    </Layout>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 50,
    width: '100%',
  },
  title: {
    fontSize: Size.text_xxl,
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
  },
})
