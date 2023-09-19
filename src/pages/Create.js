import { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Layout from '../layout/Other'
import Input from '../components/Input'
import Button from '../components/Button'
import SelectColor from '../components/SelectColor'

import { NotesContext } from '../global/context/Context'

export default function Create({ route }) {
  const navigation = useNavigation()
  const { setUpdateNote, setNewNote } = useContext(NotesContext)

  const [title, setTitle] = useState('')
  const [creator, setCreator] = useState('')
  const [date, setDate] = useState('')
  const [text, setText] = useState('')
  const [body, setBody] = useState('')
  const [colorPriority, setColorPriority] = useState('')
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    // if route.params.type === 'edit' then set the value of the input
    if (route?.params?.type === 'edit') {
      setTitle(route.params.item.title)
      setCreator(route.params.item.creator)
      setDate(route.params.item.date)
      setText(route.params.item.text)
      setBody(route.params.item.body)
      setColorPriority(route.params.item.colorPriority)
      setButtonDisable(false)
    }
  }, [route?.params?.type])

  useEffect(() => {
    // if all input is filled then set buttonDisable to false
    if (
      title !== '' &&
      creator !== '' &&
      date !== '' &&
      text !== '' &&
      body !== '' &&
      colorPriority !== ''
    ) {
      setButtonDisable(false)
    } else {
      setButtonDisable(true)
    }
  }, [title, creator, date, text, body, colorPriority])

  const Note = () => {
    if (route?.params?.type === 'edit') {
      // if route.params.type === 'edit' then navigate to Back else navigate to Home
      navigation.goBack()
      return setUpdateNote({
        id: route.params.item.id,
        title,
        creator,
        date,
        text,
        body,
        colorPriority,
      })
    }
    // if route.params.type === 'edit' then navigate to Back else navigate to Home
    navigation.navigate('Home')
    return setNewNote({
      id: Math.random(),
      title,
      creator,
      date,
      text,
      body,
      colorPriority,
    })
  }

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Input title="Title" value={title} onChange={setTitle} placeholder={'Title'} />
        <Input title="Creator" value={creator} onChange={setCreator} placeholder={'Creator'} />
        <Input title="Date" value={date} onChange={setDate} placeholder={'Date'} />
        <SelectColor colorPriority={colorPriority} setColorPriority={setColorPriority} />
        <Input title="Text" value={text} onChange={setText} placeholder={'Text'} />
        <Input
          title="Body"
          value={body}
          onChange={setBody}
          placeholder={'Body'}
          multiline={true}
          maxLength={120}
        />
        <Button disabled={buttonDisable} onPress={Note}>
          {route?.params?.type === 'edit' ? 'Confirm' : 'Create'}
        </Button>
      </ScrollView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
    paddingTop: 30,
  },
})
