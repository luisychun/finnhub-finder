import {
  GET_SYMBOLS, 
  SET_LOADING,
  GET_PROFILE
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
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      }  
    default:
      return state;
  }
}