import React, { Fragment, useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import SymbolsContext from '../../context/symbol/symbolContext'

const FormPage = () => {
  const symbolsContext = useContext(SymbolsContext)
  const { symbols } = symbolsContext

  const [symbol, setSymbol] = useState('')

  const onChange = (e) => {
    setSymbol(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (symbol === '') {
    } else {
      symbolsContext.getSymbols(symbol)
      setSymbol('')
    }
  }

  const clearAllSymbols = (e) => {
    symbolsContext.clearSymbols()
  }

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Company Symbol</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter symbol"
            value={symbol}
            onChange={onChange}
            required
          />
          <Form.Text className="text-muted">
            Example: tesla, apple, oracle...
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit" style={{ boxShadow: 'none' }}>
          Search
        </Button>
        {symbols && symbols.length > 0 && (
          <Button
            variant="outline-dark"
            style={{ boxShadow: 'none' }}
            className="mx-2"
            onClick={clearAllSymbols}
          >
            Clear
          </Button>
        )}
      </Form>
    </Fragment>
  )
}

export default FormPage
