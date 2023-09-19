import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
export default function ModalNote({ modalVisible, setModalVisible, noteModal }) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={[
              styles.frame,
              {
                backgroundColor: noteModal.colorPriority,
              },
            ]}
          />
          <Text
            style={[
              styles.modalText,
              {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 15,
              },
            ]}>
            {noteModal.title}
          </Text>
          <View style={styles.header}>
            <Text style={styles.modalText}>{noteModal.creator}</Text>
            <Text style={styles.modalText}>{noteModal.date}</Text>
          </View>
          <Text
            style={[
              styles.modalText,
              {
                textAlign: 'justify',
              },
            ]}>
            {noteModal.body}
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
            <AntDesign name="closecircleo" size={26} color="black" />
          </TouchableOpacity>
          <View
            style={[
              styles.frame,
              {
                backgroundColor: noteModal.colorPriority,
                bottom: 0,
              },
            ]}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    elevation: 2,
    padding: 10,
    position: 'absolute',
    right: 20,
    top: 25,
  },
  centeredView: {
    alignItems: 'center',
    elevation: 5,
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  frame: {
    height: 20,
    position: 'absolute',
    width: '150%',
  },
  header: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
  },
  modalText: {
    marginBottom: 15,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    overflow: 'hidden',
    padding: 35,
    position: 'relative',
  },
})
