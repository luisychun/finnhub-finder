import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FormPage from '../layout/FormPage'
import SymbolContainer from '../symbols/SymbolContainer'

const Home = () => {
  return (
    <div className="my-2 my-lg-4">
      <Row>
        <Col xs lg={8}>
          <FormPage />
        </Col>
      </Row>
      <Row>
        <Col>
          <SymbolContainer />
        </Col>
      </Row>
    </div>
  )
}

export default Home
