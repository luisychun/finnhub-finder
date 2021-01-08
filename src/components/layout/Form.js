import React, { Fragment, useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import SymbolsContext from '../../context/symbols/symbolsContext'

const FormPage = () => { 
  const symbolsContext = useContext(SymbolsContext)

  const [symbol, setSymbol] = useState('')

  const onChange = (e) => {    
    setSymbol(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(symbol === '') {

    }else {
      symbolsContext.getSymbols(symbol)
      setSymbol('')
    }
  }


  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Company Symbol</Form.Label>
          <Form.Control type="text" placeholder="Enter symbol" value={symbol} onChange={onChange}/>
          <Form.Text className="text-muted">
            Example: apple
          </Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit" style={{ boxShadow: 'none' }}>
          Search
        </Button>
      </Form>
    </Fragment>
  )
}

export default FormPage;