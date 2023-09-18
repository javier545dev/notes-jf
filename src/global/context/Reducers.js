import { initialState } from './InitialState'
export const NoteReducer = (state, action) => {
  switch (action.type) {
    case 'newNote': {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    }
    case 'updateNote': {
      const newNotes = state.notes.map((note) => {
        console.log(note.id, action.payload.id)
        if (note.id === action.payload.id) {
          return {
            ...note,
            ...action.payload,
          }
        }
        return note
      })
      return {
        ...state,
        notes: newNotes,
      }
    }
    case 'deleteNote':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      }
    case 'resetNotes':
      return {
        ...initialState,
      }
    case 'modalVisible':
      return {
        ...state,
        modalVisible: action.payload,
      }
    case 'noteModal': {
      return {
        ...state,
        noteModal: { ...action.payload },
      }
    }
    default:
      return state
  }
}
