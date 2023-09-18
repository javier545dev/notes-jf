import { initialState } from './InitialState'
// reducer for notes
export const NoteReducer = (state, action) => {
  switch (action.type) {
    // create new note
    case 'newNote': {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    }
    // update note
    case 'updateNote': {
      const newNotes = state.notes.map((note) => {
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
    // delete note
    case 'deleteNote':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      }
    // reset notes
    case 'resetNotes':
      return {
        ...initialState,
      }
    // modal visible or not visible
    case 'modalVisible':
      return {
        ...state,
        modalVisible: action.payload,
      }
    // note for modal
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
