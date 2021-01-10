import React, { useContext, useEffect, useState, Fragment } from 'react'
import SymbolItem from './SymbolItem'
import { Row, Col, CardGroup }  from 'react-bootstrap'
import Spinner from '../layout/Spinner'
import SymbolsContext from '../../context/symbols/symbolsContext'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const SymbolContainer = () => {
  const symbolsContext = useContext(SymbolsContext)
  const { symbols, loading } = symbolsContext

  if(loading) {
    return (
      <Spinner />
    )   
  }else {
    return (
      <Fragment>
        <Row className="justify-content-start mt-2 mt-lg-4">
          <Col>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1280: 3}}>
              <Masonry>
                {symbols && symbols.map(symbol => (                             
                  <SymbolItem symbol={symbol} key={symbols}/>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Col>
        </Row>      
      </Fragment>
    )
  }
}

export default SymbolContainer
