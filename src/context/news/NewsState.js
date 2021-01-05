import React, {useReducer} from 'react';
import axios from 'axios';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import {
  GET_NEWS
} from '../types'

const NewsState = (props) => {
  const initialState = {
    news: []
  }

  //Get Stock News
  const getStockNews = async () => {
    const res = await axios.get('https://finnhub.io/api/v1/news?category=general&token=bvo4ohv48v6rbvarlhsg')    

    dispatch({
      type: GET_NEWS,
      payload: res.data
    })
  }

  const [state, dispatch] = useReducer(NewsReducer, initialState)

  return <NewsContext.Provider value={{news: state.news, getStockNews}}>
    {props.children}
  </NewsContext.Provider>
}

export default NewsState