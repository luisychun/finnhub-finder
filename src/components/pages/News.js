import React, {useContext} from 'react'
import NewsContext from '../../context/news/newsContext'
import NewsContainer from '../news/NewsContainer'

export const News = () => {
  const newsContext = useContext(NewsContext)
  const { news } = newsContext
  return (
    <div>
     <NewsContainer />
    </div>
  )
}
export default News;
