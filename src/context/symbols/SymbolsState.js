import React, { useReducer } from 'react';
import axios from 'axios';
import SymbolsContext from './symbolsContext';
import SymbolsReducer from './symbolsReducer';
import {
  GET_SYMBOLS, SET_LOADING
} from '../types'

const SymbolsState = (props) => {
  const initialState = {
    symbols: [],
    loading: false
  }

  // Get Symbols
  const getSymbols = async symbol => {
    setLoading()
    const res = await axios.get(`https://finnhub.io/api/v1/search?q=${symbol}&token=bvo4ohv48v6rbvarlhsg`)
    let data = res.data
    dispatch({
      type: GET_SYMBOLS,
      payload: data.result
    })
  }

  const setLoading = () => { dispatch({type: SET_LOADING}) }

  const [state, dispatch] = useReducer(SymbolsReducer, initialState)

  return <SymbolsContext.Provider 
  value={
    {
      symbols: state.symbols,
      loading: state.loading, 
      getSymbols
    }
  }>
  {props.children}
</SymbolsContext.Provider>
}

export default SymbolsState