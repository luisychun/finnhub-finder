import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SymbolItem = ({ symbol: { description, symbol, type } }) => {
  return (
    <div>
      <Card style={{ margin: '0.5rem' }}>
        <Card.Body>
          <Card.Title>{symbol}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>
          <h5>
            <Badge
              pill
              variant={type === 'Common Stock' ? 'dark' : 'warning'}
              style={{ marginBottom: '0.75rem' }}
            >
              {type}
            </Badge>
          </h5>
          <div>
            <Link to={`/symbol/${symbol}`} className="btn btn-light my-1">
              Read More
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SymbolItem
