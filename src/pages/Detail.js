import { StyleSheet, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import Layout from '../layout/Other'
import FloatingButton from '../components/FloatingButton'
import TextContainer from '../components/TextContainer'

export default function Detail({ route }) {
  const { item } = route.params
  return (
    <Layout>
      <TextContainer>
        <Text style={styles.title}>Creator / Date</Text>
        <Text style={styles.text}>{item.creator}</Text>
        <Text style={styles.text}>{item.date}</Text>
      </TextContainer>

      <TextContainer>
        <Text style={styles.title}>Resume</Text>
        <Text style={styles.text}>{item.text}</Text>
      </TextContainer>

      <TextContainer>
        <Text style={styles.title}>Body</Text>
        <Text style={styles.text}>{item.body}</Text>
      </TextContainer>

      <FloatingButton screen={'Create'} params={{ item, type: 'edit' }}>
        <AntDesign name="edit" size={24} color="white" />
      </FloatingButton>
    </Layout>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})
