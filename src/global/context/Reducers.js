import { initialState } from './InitialState'
export const NoteReducer = (state, action) => {
  switch (action.type) {
    case 'newNote': {
      return {
        ...state,
        notes: { ...state.notes, ...action.payload },
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
    default:
      return state
  }
}
