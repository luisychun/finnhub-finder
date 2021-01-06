import React, { useContext, useEffect, useState, Fragment } from 'react'
import NewsItem from './NewsItem'
import NewsContext from '../../context/news/newsContext'
import { Row, Col, CardGroup }  from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import PaginationPage from '../layout/Pagination'
import Spinner from '../layout/Spinner'
import axios from 'axios'
import newsContext from '../../context/news/newsContext'

const NewsContainer = () => {
  // const newsContext = useContext(NewsContext)

  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const [loading, setLoading] = useState(false)

  useEffect(() => {    
    const getStockNews = async () => {      
      setLoading(true)
      const res = await axios.get('https://finnhub.io/api/v1/news?category=general&token=bvo4ohv48v6rbvarlhsg')
      setPosts(res.data)
      setLoading(false)
    }

    getStockNews()

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
        <Row className="mt-5">
          <PaginationPage postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </Row>
      </Fragment>
      
    )
  }
}

export default NewsContainer
