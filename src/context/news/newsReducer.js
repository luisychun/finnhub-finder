import {
  SET_LOADING,
  GET_NEWS
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false
      }
    default:
      return state;
  }
}