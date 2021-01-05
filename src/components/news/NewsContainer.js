import React, {useContext, useEffect, useState} from 'react'
import { NewsItem } from './NewsItem'
import NewsContext from '../../context/news/newsContext'
import {Row, Col} from 'react-bootstrap'
import { Fragment } from 'react'
import PaginationPage from '../layout/Pagination'
import Spinner from '../layout/Spinner'

const NewsContainer = () => {
  const newsContext = useContext(NewsContext)

  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    newsContext.getStockNews()
    setPosts(newsContext.news)    
  },[])

  const paginate = (e) => {
    setCurrentPage(e)
    window.scrollTo(0, 0)
  }

  console.log(newsContext.news.length)

  if(newsContext.loading || newsContext.news.length < 1) {
    return (
      <Spinner />
    )   
  }else {
    return (
      <Fragment>
        <Row className="justify-content-start text-center">      
            {currentPosts.map(newItem => (
              <Col sm={12} md={6} lg={4} key={newItem.id}>                
                <NewsItem key={newItem.id} newItem={newItem}></NewsItem>              
              </Col>
            ))}
        </Row>      
        <Row className="mt-5">
          <PaginationPage postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </Row>
      </Fragment>
    )
  }
}

export default NewsContainer
