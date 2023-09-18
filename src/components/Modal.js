import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
export default function ModalNote({ modalVisible, setModalVisible, noteModal }) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{noteModal.title}</Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <Text style={styles.modalText}>{noteModal.creator}</Text>
            <Text style={styles.modalText}>{noteModal.date}</Text>
          </View>
          <Text style={styles.modalText}>{noteModal.body}</Text>

          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
            <AntDesign name="closecircleo" size={24} color="black" />
          </TouchableOpacity>
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
    top: 20,
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    margin: 20,
    padding: 35,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
})
