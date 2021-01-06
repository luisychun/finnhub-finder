import React, { useReducer } from 'react';
import axios from 'axios';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import {
  SET_LOADING,
  GET_NEWS
} from '../types'

const NewsState = (props) => {
  const initialState = {
    news: [],
    loading: false
  }

  const [state, dispatch] = useReducer(NewsReducer, initialState)

  //Get Stock News
  const getStockNews = async () => {
    setLoading()
    const res = await axios.get('https://finnhub.io/api/v1/news?category=general&token=bvo4ohv48v6rbvarlhsg')    

    dispatch({
      type: GET_NEWS,
      payload: res.data
    })
  }

  const setLoading = () => {
    dispatch({type: SET_LOADING})
  }

  return <NewsContext.Provider 
    value={
      {
        news: state.news, 
        getStockNews
      }
    }>
    {props.children}
  </NewsContext.Provider>
}

export default NewsState