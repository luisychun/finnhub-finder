import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

const SymbolItem = ({ symbol: { description, displaySymbol, symbol, type } }) => {
  return (
    <div>
      <Card style={{ margin: '0.5rem' }}>
        <Card.Body>
          <Card.Title>{description}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{symbol}</Card.Subtitle>
          <h5>
          <Badge pill variant={type === 'Common Stock'? 'dark': 'warning'} style={{ marginBottom: '0.75rem' }}>
            {type}
          </Badge>
          </h5>
          <Button variant="outline-dark" href="" size="sm" style={{ boxShadow: 'none' }}>Read More</Button>          
        </Card.Body>
      </Card>
    </div>
  )
}

export default SymbolItem