import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const NewsItem = ( {newItem: {image, headline, summary}} ) => {  
  return (
    <Card className="mt-2">
      <Card.Img variant="top" src={image} style={{ height: '220px' }}/>
      <Card.Body>
        <Card.Title style={{ height: '100px' }}>{headline}</Card.Title>
        <Card.Text style={{ height: '120px' }}>
          {summary.length > 0 ? summary.substring(0, 200)+'...': ''}
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card>
  )
}
