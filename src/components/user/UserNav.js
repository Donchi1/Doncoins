import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

import { LogoutAction } from '../Auths/Action'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, Link } from 'react-router-dom'

function UserNav() {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const { push } = useHistory()

  const userProfile = useSelector((state) => state.firebase.profile)
  const user = useSelector((state) => state.firebase.profile)

  useFirestoreConnect([
    {
      collection: 'users',
    },
    { collection: 'payments', doc: userProfile.uid },
    { collection: 'withdrawals', doc: userProfile.uid },
  ])

  const data = useSelector((state) => state)

  const handleLogout = () => {
    LogoutAction(firebase, dispatch)
    push('/')
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: 'black' }}
      variant="dark"
      sticky="top"
    >
      <Link to="/">
        <Navbar.Brand
          className="text-uppercase font-weight-bold ml-4 profilenav"
          style={{
            fontSize: '2rem',
            alignItems: 'center',
          }}
        >
          Crypto
          <span className="text-primary">genus</span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="bg-primary userdrop"
      />
      <Navbar.Collapse id="responsive-navbar-nav" className="mynav  text-light">
        <Nav className="text-uppercase d-flex justify-content-around align-items-center">
          <NavLink to="/user" className="userlink">
            dashboard
          </NavLink>

          <NavLink to="/profile" className="userlink">
            profile
          </NavLink>

          <div
            className="d-flex align-items-center justify-content-center userlink"
            style={{
              height: '40px',
              width: '40px',
              marginTop: '0.3rem',
              border: '1px solid lightblue',
              borderRadius: '50%',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                paddingTop: '0.5rem',
              }}
              className="text-primary"
            >
              {userProfile.initial}
            </p>
          </div>

          <div className="userlink">
            <Button
              color="white"
              size="lg"
              style={{
                background: '#002699',
                textTransform: 'uppercase',
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UserNav
