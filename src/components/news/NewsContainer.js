import React, { useContext, useEffect, useState, Fragment } from 'react'
import NewsItem from './NewsItem'
import NewsContext from '../../context/news/newsContext'
import { Row, Col, CardGroup }  from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import PaginationPage from '../layout/Pagination'
import Spinner from '../layout/Spinner'
import axios from 'axios'
import newsContext from '../../context/news/newsContext'

const NewsContainer = ( props ) => {
  // const newsContext = useContext(NewsContext)

  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const [loading, setLoading] = useState(false)

  useEffect(() => {    
    const getStockNews = async () => {      
      setLoading(true)
      const res = await axios.get(`https://finnhub.io/api/v1/news?category=general&token=${process.env.REACT_APP_FINNHUB_TOKEN}`)
      setPosts(res.data)
      setLoading(false)
    }

    const getProfileNews = async () => {
      setLoading(true)      
      const resNews = await axios.get(`https://finnhub.io/api/v1/company-news?symbol=${props.news}&from=2021-01-01&to=2021-01-05&token=${process.env.REACT_APP_FINNHUB_TOKEN}`)
      setPosts(resNews.data)
      setLoading(false)
    }

    if(props.news == 'common') {
      getStockNews()
    }else {
      getProfileNews()
    }    

    // newsContext.getStockNews()
    // setPosts(newsContext.news)

  },[])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (e) => {
    setCurrentPage(e)
    window.scrollTo(0, 0)
  }

  if(loading) {
    return (
      <Spinner />
    )   
  }else {
    return (
      <Fragment>
        <Row className="justify-content-start">
          <Col>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1280: 3}}>
              <Masonry>
                {currentPosts.map(newItem => (              
                  <CardGroup key={newItem.id}>
                    <NewsItem newsItem={newItem}></NewsItem>
                  </CardGroup>              
                ))}
                </Masonry>
            </ResponsiveMasonry>
          </Col>
        </Row>      
        <Row className="mt-5 d-none d-lg-block">
          <PaginationPage postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </Row>
      </Fragment>      
    )
  }
}

export default NewsContainer
