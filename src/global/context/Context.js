import React, { createContext, useReducer } from 'react'
import { initialState } from './InitialState'
import { reducer } from './Reducers'

export const NotesContext = createContext({})
export default function ProviderNotes({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setDispatch = (type, payload) => {
    dispatch({ type, payload })
  }

  const UserData = {
    ...state,
    setNote: (payload) => {
      setDispatch('newNote', payload)
    },
    setDeleteNote: (payload) => {
      setDispatch('deleteNote', payload)
    },
    setResetNotes: () => {
      setDispatch('resetNotes')
    },
  }

  return <NotesContext.Provider value={UserData}>{children}</NotesContext.Provider>
}
