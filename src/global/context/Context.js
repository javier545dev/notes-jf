import React, { createContext, useReducer } from 'react'
import { initialState } from './InitialState'
import { reducer } from './Reducers'

const Context = createContext({})
export default function ProviderNotes({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setDispatch = (type, payload) => {
    dispatch({ type, payload })
  }

  const UserData = {
    ...state,
    setNote: (payload) => {
      setDispatch('new', payload)
    },
  }

  return <Context.Provider value={UserData}>{children}</Context.Provider>
}
