import React, { useState } from 'react'

import { LogoutAction } from '../Auths/Action'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'

function UserNav() {
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
        className="transition  header-align "
        style={{ position: 'sticky' }}
      >
        <div
          className="container-fluid darkblue py-2 "
          style={{ position: 'absolute', top: 0 }}
        >
          <div className="row flex-align ">
            <div className="col-lg-4 col-md-3 col-8">
              <div className="logo">
                <a href="/">
                  <h3 className="sub-heading little-add">
                    <span style={{ fontSize: '3rem' }}>U</span>
                    ltimateCoins
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-9 col-4 text-right ">
              <div>
                <span
                  onClick={() => setOpenToggle((prev) => !prev)}
                  className="toggle-span"
                >
                  toggle
                </span>
              </div>

              <div className="toggle-menu d-flex justify-content-around align-items-center">
                <ul className="d-flex justify-content-around align-items-center w-50 ">
                  <li>
                    <a className="user-anchor" href="/user">
                      Dashboard
                    </a>
                  </li>

                  <li>
                    <a className="user-anchor" href="/withdrawals">
                      Withdrawals
                    </a>
                  </li>

                  <li>
                    <a className="user-anchor" href="/payments">
                      Payments
                    </a>
                  </li>
                  <li>
                    <a className="user-anchor" href="/investments">
                      Invest
                    </a>
                  </li>
                </ul>
                <ul className="d-flex justify-content-around align-items-center ">
                  <li className="mr-4 ">
                    <button
                      className="btn history-info"
                      onClick={() => window.location.assign('/profile')}
                    >
                      {userProfile.initial}
                    </button>
                  </li>
                  <li>
                    <button className="btn history-info" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default UserNav
