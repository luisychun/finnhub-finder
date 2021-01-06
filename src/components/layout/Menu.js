import React, { Fragment } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = ({ title }) => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/'>
            <Navbar.Brand>{title}</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">              
              <Link to='/' style={linkStyle} className="mr-3">Home</Link>
              <Link to='/about' style={linkStyle} className="mr-3">About</Link>
              <Link to='/news' style={linkStyle}>News</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Menu;
