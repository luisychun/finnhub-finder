import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const NewsItem = ( {newItem: {image, headline, summary}} ) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{headline}</Card.Title>
        <Card.Text>
          {summary}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
