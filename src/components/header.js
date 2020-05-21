import PropTypes from "prop-types"
import React from "react"
import Logo from "./../svg/logo-white.svg"

import Navbar from 'react-bootstrap/Navbar'

const Header = ({ siteTitle }) => (
  <header> 
    <Navbar className="navbar navbar-dark">
      <Navbar.Brand href="#home">
      <Logo className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="#est" className="lang font-weight-bold">EST</a>
          <a href="#eng" className="lang">ENG</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
