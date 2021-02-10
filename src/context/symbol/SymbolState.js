import React, { useReducer } from 'react'
import axios from 'axios'
import SymbolsContext from './symbolContext'
import SymbolsReducer from './symbolReducer'
import { GET_SYMBOLS, CLEAR_SYMBOLS, GET_PROFILE, SET_LOADING } from '../types'

const SymbolsState = (props) => {
  const initialState = {
    symbols: [],
    profile: {},
    loading: false,
  }

  let finnhubtoken

  if (process.env.NODE_ENV !== 'production') {
    finnhubtoken = process.env.REACT_APP_FINNHUB_TOKEN
  } else {
    finnhubtoken = process.env.REACT_APP_FINNHUB_TOKEN
  }

  // Get Symbols
  const getSymbols = async (symbol) => {
    setLoading()
    const res = await axios.get(
      `https://finnhub.io/api/v1/search?q=${symbol}&token=${finnhubtoken}`
    )
    let data = res.data
    dispatch({
      type: GET_SYMBOLS,
      payload: data.result,
    })
  }

  // Clear Symbols
  const clearSymbols = () => {
    dispatch({ type: CLEAR_SYMBOLS })
  }

  // Get Profile
  const getProfile = async (symbol) => {
    setLoading()
    const res = await axios.get(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${finnhubtoken}`
    )

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })
  }

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  const [state, dispatch] = useReducer(SymbolsReducer, initialState)

  return (
    <SymbolsContext.Provider
      value={{
        symbols: state.symbols,
        loading: state.loading,
        profile: state.profile,
        getSymbols,
        clearSymbols,
        getProfile,
      }}
    >
      {props.children}
    </SymbolsContext.Provider>
  )
}

export default SymbolsState
