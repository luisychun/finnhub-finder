import React, { useContext, useEffect, useState, Fragment } from 'react'
import SymbolsContext from '../../context/symbols/symbolsContext'
import Spinner from '../layout/Spinner'
import axios from 'axios'
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const SymbolProfile = ({ match }) => {
  // const symbolsContext = useContext(SymbolsContext)

  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProfile = async () => {      
      setLoading(true)
      const res = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${match.params.symbol}&token=bvo4ohv48v6rbvarlhsg`)
      setProfile(res.data)
      setLoading(false)
    }

    getProfile()    
  },[])

  const {
    country,
    currency,
    exchange,
    finnhubIndustry,
    ipo,
    logo,
    marketCapitalization,
    name,
    phone,
    shareOutstanding,
    ticker,
    weburl
  } = profile

  const abbreviate_number = (num, fixed) => {
    if (num === null) { return null; } // terminate early
    if (num === 0) { return '0'; } // terminate early
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (num).toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
        d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
        e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
    return e;
  }

  if(loading || !profile) {
    return (
      <Spinner />
    )
  } else if(!profile.name) {
    return (
      <div className="mt-2 mt-lg-4">
        <Link to='/' className="btn btn-light">
          Back To Search 
        </Link>
        <h1>Result Not Found</h1>
      </div>
    )
  } else {
    return (
      <Fragment>
        <Card style={ gridDisplay } className="mt-2 mt-lg-4">
          <div style={imgContainer}>            
            {logo && <Card.Img variant="top" src={ logo } style={roundImage} />}
          </div>
          <Card.Body>
            <Card.Title>
              <h2>{ name }</h2>              
            </Card.Title>            
            <div>
              <Badge pill variant={currency === 'USD'? 'dark': 'light'} style={{ marginBottom: '0.75rem', marginRight: '0.5rem' }}>
                {currency}
              </Badge>
              <Badge pill variant={finnhubIndustry === 'Technology'? 'success': 'danger'} style={{ marginBottom: '0.75rem', marginRight: '0.5rem' }}>
                {finnhubIndustry}
              </Badge>
              <Badge pill variant='info' style={{ marginBottom: '0.75rem', marginRight: '0.5rem' }}>
                {exchange}
              </Badge>
              <p>IPO: { ipo }</p>
              <p>Market Capitalization: { abbreviate_number(marketCapitalization, 0) }</p>              
            </div>            
            <a href={weburl} className="btn btn-dark my-1" target="_blank" style={{ boxShadow: 'none' }}>Visit Site</a>
          </Card.Body>
        </Card>
        <div style={imgContainer} className="mt-2 mt-lg-4">
          <Link to='/' className="btn btn-light">
            Back To Search 
          </Link>
        </div>
      </Fragment>
    )
  }
}

const gridDisplay = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridCap: '1rem'
}

const roundImage = {
  borderRadius: '50%',
  width: '150px',
}

const imgContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

export default SymbolProfile
