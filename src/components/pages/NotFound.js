import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="mt-3">
      <h1>The page you are looking for is not exist.</h1>
      <Link to='/' className="btn btn-light mt-3">
        Back To Home 
      </Link>
    </div>
  )
}

export default NotFound
