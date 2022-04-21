import { LOADER } from '../constats'

const initialState = {
  loading: false,
}

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case LOADER:
      return {
        loading: action.payload,
      }
    default:
      return state
  }
}
