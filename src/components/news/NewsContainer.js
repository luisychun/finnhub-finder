import React, {useContext, useEffect} from 'react'
import { NewsItem } from './NewsItem'
import NewsContext from '../../context/news/newsContext'
import {Row, Col, Pagination} from 'react-bootstrap'

const NewsContainer = () => {
  const newsContext = useContext(NewsContext)

  useEffect(() => {
    newsContext.getStockNews()
  },[])

  const news = newsContext.news  
  for(let i=1; i<=5; i++) {
    
  }
  return (    
    <Row>      
        {news.map(newItem => (
          <Col sm={12} md={6} lg={4}>
            <NewsItem key={newItem.id} newItem={newItem}></NewsItem>
          </Col>
        ))}
    </Row>
  )
}

export default NewsContainer
