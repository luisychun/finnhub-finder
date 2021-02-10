import React, { useContext, Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Spinner from '../layout/Spinner'
import SymbolItem from './SymbolItem'
import SymbolContext from '../../context/symbol/symbolContext'

const SymbolContainer = () => {
  const symbolContext = useContext(SymbolContext)
  const { symbols, loading } = symbolContext

  if (loading) {
    return <Spinner />
  } else {
    return (
      <Fragment>
        <Row className="justify-content-start mt-2 mt-lg-4">
          <Col>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 1280: 3 }}
            >
              <Masonry>
                {symbols &&
                  symbols.map((symbol) => (
                    <SymbolItem key={symbol.symbol} symbol={symbol} />
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
