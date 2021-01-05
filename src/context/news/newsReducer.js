import {
  GET_NEWS
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload
      }
    default:
      return state;
  }
}