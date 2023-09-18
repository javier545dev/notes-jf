import { useContext } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { NotesContext } from '../global/context/Context'
import Card from './Card'

export default function Carousel({ orientation }) {
  const { notes } = useContext(NotesContext)

  return (
    <FlatList
      data={notes}
      renderItem={(item) => <Card item={item.item} />}
      horizontal={orientation}
      keyExtractor={(item) => item.id}
      scro
      contentContainerStyle={[
        styles.carousel,
        {
          paddingHorizontal: !orientation ? 0 : 40,
          maxHeight: orientation === true ? 300 : 'auto',
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  carousel: {
    gap: 30,
  },
})
