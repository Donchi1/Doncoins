import React, { useState } from 'react'

import { LogoutAction } from '../Auths/Action'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'

function UserNav1() {
  const firebase = useFirebase()
  const dispatch = useDispatch()

  const userProfile = useSelector((state) => state.firebase.profile)
  const [openToggle, setOpenToggle] = useState(false)

  useFirestoreConnect([
    {
      collection: 'users',
    },
    {
      collection: 'payments',

      doc: userProfile.uid,
    },
    {
      collection: 'withdrawals',

      doc: userProfile.uid,
    },
  ])

  const handleLogoutRoute = () => window.location.assign('/')
  const handleLogout = () => {
    LogoutAction(firebase, dispatch, handleLogoutRoute)
  }
  return (
    <>
      <header
        className="header_wrap fixed-top  "
        style={{ position: 'sticky' }}
      >
        <div
          className="container-fluid darkblue py-2 "
          style={{ position: 'absolute', top: 0 }}
        >
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand animation" href="/">
              <span>
                <span className="btn-default backtext">
                  <h3 className="sub-heading little-add">
                    <span style={{ fontSize: '3rem' }}>U</span>
                    ltimateCoins
                  </h3>
                </span>
              </span>
            </a>
            <button
              className="navbar-toggler animation"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto align-items-center">
                <li>
                  <a className="user-anchor nav-link " href="/user">
                    Dashboard
                  </a>
                </li>

                <li>
                  <a className="user-anchor nav-link" href="/withdrawals">
                    Withdrawals
                  </a>
                </li>

                <li>
                  <a className="user-anchor nav-link" href="/payments">
                    Payments
                  </a>
                </li>
                <li>
                  <a className="user-anchor nav-link" href="/investments">
                    Invest
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav nav_btn align-items-center">
                <li className="mr-4 ">
                  <a
                    className="btn history-info "
                    onClick={() => window.location.assign('/profile')}
                  >
                    {userProfile.initial}
                  </a>
                </li>
                <li className="ml-4">
                  <button className="btn history-info " onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default UserNav1
