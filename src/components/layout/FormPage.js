import React, { Fragment, useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import SymbolContext from '../../context/symbol/symbolContext'

const FormPage = () => {
  const symbolContext = useContext(SymbolContext)
  const { symbols } = symbolContext

  const [symbol, setSymbol] = useState('')

  const onChange = (e) => {
    setSymbol([e.target.value])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (symbol === '') {
    } else {
      symbolContext.getSymbols(symbol)
      setSymbol('')
    }
  }

  const clearAllSymbols = (e) => {
    symbolContext.clearSymbols()
  }

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter Symbol"
            value={symbol}
            onChange={onChange}
            required
          />
          <Form.Text className="text-muted">
            Example: tesla, apple, oracle and etc
          </Form.Text>
        </Form.Group>
        <Button
          variant="outline-dark"
          type="submit"
          style={{ boxShadow: 'none' }}
        >
          Search
        </Button>
        {symbols && symbols.length > 0 && (
          <Button
            variant="light"
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
