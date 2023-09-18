import { createContext, useReducer } from 'react'
import { initialState } from './InitialState'
import { NoteReducer } from './Reducers'

export const NotesContext = createContext({ ...initialState })

export default function ProviderNotes({ children }) {
  const [state, dispatch] = useReducer(NoteReducer, initialState)

  const UserData = {
    ...state,
    setNewNote: (payload) => dispatch({ type: 'newNote', payload }),
    setUpdateNote: (payload) => dispatch({ type: 'updateNote', payload }),
    setDeleteNote: (payload) => dispatch({ type: 'deleteNote', payload }),
    setResetNotes: () => dispatch({ type: 'resetNotes' }),
    setModalVisible: (payload) => dispatch({ type: 'modalVisible', payload }),
    setModal: (payload) => dispatch({ type: 'noteModal', payload }),
  }

  return <NotesContext.Provider value={UserData}>{children}</NotesContext.Provider>
}
