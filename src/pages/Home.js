import React, { useState } from 'react'
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import Layout from '../layout/Home'
import { Colors, Size } from '../constant/Constant'
import FloatingButton from '../components/FloatingButton'
import Carousel from '../components/Carousel'

export default function Home() {
  const { width } = useWindowDimensions()
  const [orientation, setOrientation] = useState(false)

  return (
    <Layout>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>NotesJF</Text>
          <TouchableOpacity onPress={() => setOrientation(!orientation)}>
            <Text style={styles.title}>Change</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.containerCard,
            {
              width: width,
            },
          ]}>
          <Carousel orientation={orientation} />
        </View>
        <FloatingButton />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  header: {
    flex: 1,
    position: 'relative',
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: Size.text_xxl,
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
  },
})
