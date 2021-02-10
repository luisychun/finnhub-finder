import React, { useEffect, useState, Fragment } from 'react'
import { Row, Col, CardGroup } from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import axios from 'axios'
import Spinner from '../layout/Spinner'
import PaginationPage from '../layout/Pagination'
import NewsItem from './NewsItem'

const NewsContainer = (props) => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const [loading, setLoading] = useState(false)

  let finnhubtoken = process.env.REACT_APP_FINNHUB_TOKEN

  useEffect(() => {
    // Get recent two days news
    let currentDt = getDate(0)
    let previousDt = getDate(2)

    const getStockNews = async () => {
      setLoading(true)
      const res = await axios.get(
        `https://finnhub.io/api/v1/news?category=general&token=${finnhubtoken}`
        // `https://finnhub.io/api/v1/news?category=general&from=${previousDt}&to=${currentDt}&token=${finnhubtoken}`
      )
      setPosts(res.data)
      setLoading(false)
    }

    const getProfileNews = async () => {
      setLoading(true)
      console.log(previousDt, currentDt)
      const resNews = await axios.get(
        `https://finnhub.io/api/v1/company-news?symbol=${props.news}&from=${previousDt}&to=${currentDt}&token=${finnhubtoken}`
      )
      setPosts(resNews.data)
      setLoading(false)
    }

    if (props.news === 'common') {
      getStockNews()
    } else {
      getProfileNews()
    }
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (e) => {
    setCurrentPage(e)
    window.scrollTo(0, 0)
  }

  const getDate = (dt) => {
    let today = new Date()
    today.setDate(today.getDate() - dt)
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yy = today.getFullYear().toString()
    dd = parseInt(dd) >= 10 ? dd : `0${dd}`
    mm = parseInt(mm) >= 10 ? mm : `0${mm}`
    return `${yy}-${mm}-${dd}`
  }

  if (loading) {
    return <Spinner />
  } else {
    return (
      <Fragment>
        <Row className="justify-content-start">
          <Col>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 1280: 3 }}
            >
              <Masonry>
                {currentPosts.map((newItem) => (
                  <CardGroup key={newItem.id}>
                    <NewsItem newsItem={newItem}></NewsItem>
                  </CardGroup>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Col>
        </Row>
        <Row className="mt-5 d-none d-lg-block">
          <PaginationPage
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            activePost={currentPage}
            paginate={paginate}
          />
        </Row>
      </Fragment>
    )
  }
}

export default NewsContainer
