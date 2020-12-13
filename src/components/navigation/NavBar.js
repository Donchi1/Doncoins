import React from 'react'

import Button from 'react-bootstrap/Button'
import { Navbar, Nav } from 'react-bootstrap'
import { useLocation, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const bg = 'linear-gradient(to top right, #33ccff 11%, #ff99cc 100%)'
export const backgroundcolor = 'rgb(117, 40, 117)'
export const itemColor = 'rgba(97, 7, 100, 0.986)'

function NavBar() {
  const { pathname } = useLocation()
  const state = useSelector((state) => state)
  console.log(state)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: itemColor }}
      variant="dark"
      sticky="top"
      className={pathname === '/admin' ? 'dontshow' : 'shownow'}
    >
      <Navbar.Brand
        className="text-uppercase font-weight-bold ml-4"
        style={{
          fontSize: '2rem',
          alignItems: 'center',
        }}
        href="/"
      >
        Crypto
        <span className="text-primary">genus</span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="dropnav bg-primary"
      />
      <Navbar.Collapse id="responsive-navbar-nav" className="mynav text-white">
        <Nav
          className="mr-auto align-items-center text-white 
       "
        >
          <NavLink to="/" className="link mr-3">
            Home
          </NavLink>
          <NavLink to="/about" className="link mr-3">
            About
          </NavLink>

          <NavLink to="/pricing" className="link mr-3">
            Pricing
          </NavLink>

          <NavLink to="/contacts" className="link mr-3">
            Contacts
          </NavLink>
          <NavLink to="/login" className="link mr-3">
            <div className="text-center">
              <Button
                color="white"
                className="text-light bg-primary"
                size="lg"
                style={{
                  textTransform: 'uppercase',
                }}
              >
                Login
              </Button>
            </div>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
