import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

const NewsItem = ( {newsItem: {image, headline, summary, url, category}} ) => {

  return (
    <Card style={{ margin: '0.5rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{headline}</Card.Title>
        <h5>
          <Badge pill variant={category === 'top news'? 'dark': 'light'} style={{ marginBottom: '0.75rem' }}>
            {category}
          </Badge>
        </h5>
        <Card.Text>
          {summary}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button variant="dark" href={url} target="_blank" style={{ boxShadow: 'none' }}>Read More</Button>
      </Card.Footer>
    </Card>
  )
}

export default NewsItem
