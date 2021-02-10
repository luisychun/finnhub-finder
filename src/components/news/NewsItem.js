import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

const NewsItem = ({ newsItem }) => {
  const { image, headline, summary, url, category, source } = newsItem

  return (
    <Card style={{ margin: '0.5rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{headline}</Card.Title>
        <Badge
          pill
          variant="info"
          style={{ marginBottom: '0.75rem', marginRight: '0.5rem' }}
        >
          {source}
        </Badge>
        <Badge
          pill
          variant={category === 'top news' ? 'primary' : 'warning'}
          style={{ marginBottom: '0.75rem' }}
        >
          {category}
        </Badge>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button
          variant="dark"
          href={url}
          target="_blank"
          style={{ boxShadow: 'none' }}
        >
          Read More
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default NewsItem
