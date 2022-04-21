import { SET_LATEST_NEWS, SET_POPULAR_NEWS, LOCATION_CHANGE } from '../constats'

const initialState = {
  latestNews: [],
  popularNews: [],
  location: '',
}

export const news = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      }
    case SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: action.payload,
      }
    case SET_POPULAR_NEWS:
      return {
        ...state,
        popularNews: action.payload,
      }
    default:
      return state
  }
}
