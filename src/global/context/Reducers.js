import { initialState } from './InitialState'
export const buyReducer = (state, action) => {
  switch (action.type) {
    case 'newNote': {
      return {
        ...state,
        product: { ...state.notes, ...action.payload },
      }
    }
    case 'deleteNote':
      return {
        ...state,
        products: state.notes.filter((product) => product.id !== action.payload),
      }
    case 'resetNotes':
      return {
        ...initialState,
      }
    default:
      return state
  }
}
