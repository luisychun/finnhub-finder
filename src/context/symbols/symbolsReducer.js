import {
  GET_SYMBOLS, 
  SET_LOADING
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        loading: true
      }
    case GET_SYMBOLS:
      return {
        ...state,
        symbols: action.payload,
        loading: false
      }
    default:
      return state;
  }
}