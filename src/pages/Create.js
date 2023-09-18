import { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Layout from '../layout/Other'
import Input from '../components/Input'
import Button from '../components/Button'
import { NotesContext } from '../global/context/Context'

export default function Create({ route }) {
  const { setUpdateNote, setNewNote } = useContext(NotesContext)

  const [title, setTitle] = useState('')
  const [creator, setCreator] = useState('')
  const [date, setDate] = useState('')
  const [text, setText] = useState('')
  const [body, setBody] = useState('')
  const [colorPriority, setColorPriority] = useState('')
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
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
      return UpdateNote()
    }
    return CreateNote()
  }

  const UpdateNote = () => {
    setUpdateNote({
      id: route.params.item.id,
      title,
      creator,
      date,
      text,
      body,
      colorPriority,
    })
  }

  const CreateNote = () => {
    setNewNote({
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
      <View style={styles.container}>
        <Input title="Title" value={title} onChange={setTitle} placeholder={'Title'} />
        <Input title="Creator" value={creator} onChange={setCreator} placeholder={'Creator'} />
        <Input title="Date" value={date} onChange={setDate} placeholder={'Date'} />
        <Input
          title="Color Priority"
          value={colorPriority}
          onChange={setColorPriority}
          placeholder={'Color Priority'}
        />
        <Input title="Text" value={text} onChange={setText} placeholder={'Text'} />
        <Input title="Body" value={body} onChange={setBody} placeholder={'Body'} multiline={true} />
        <Button disabled={buttonDisable} onPress={Note}>
          {route?.params?.type === 'edit' ? 'Confirm' : 'Create'}
        </Button>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
    paddingTop: 40,
  },
})
