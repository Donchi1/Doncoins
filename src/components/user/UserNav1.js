import React, { useEffect, useState } from 'react'

import { LogoutAction } from '../Auths/Action'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function UserNav1() {
  const firebase = useFirebase()
  const dispatch = useDispatch()

  const userProfile = useSelector((state) => state.firebase.auth)

  const [collections, setCollections] = useState({
    users: 'user',
    payments: 'withdrawal',
    withdrawals: 'payment',
  })

  useEffect(() => {
    setCollections({
      ...collections,
      users: 'users',
      payments: 'payments',
      withdrawals: 'withdrawals',
    })
  }, [])

  useFirestoreConnect([
    {
      collection: collections.users,
    },
    {
      collection: collections.payments,
      doc: userProfile.uid,
      subcollections: [
        { collection: 'paymentData', orderBy: ['date', 'desc'], limit: 5 },
      ],
      storeAs: 'paymentInDatabase',
    },
    {
      collection: collections.withdrawals,
      doc: userProfile.uid,
      subcollections: [
        { collection: 'withdrawalData', orderBy: ['date', 'desc'], limit: 5 },
      ],
      storeAs: 'withdrawalInDatabase',
    },
  ])

  const handleLogoutRoute = () => window.location.assign('/')
  const handleLogout = () => {
    LogoutAction(firebase, dispatch, handleLogoutRoute)
  }
  return (
    <header className="page-header ">
      <nav className="main-menu static-top navbar-dark collapse-color navbar navbar-expand-lg fixed-top mb-1">
        <div className="container">
          <a
            className="navbar-brand animated"
            data-animation="fadeInDown"
            data-animation-delay="1s"
            href="/"
          >
            <img
              src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/logo.png"
              alt="Crypto Logo"
            />
            <span className="brand-text">
              <span className="font-weight-bold">Doncoins</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse collapse-color"
            id="navbarCollapse"
          >
            <div id="navigation" className="navbar-nav ml-auto">
              <ul className="navbar-nav mt-1">
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.3s"
                >
                  <a className="nav-link" href="/user">
                    Dashboard
                  </a>
                </li>
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.3s"
                >
                  <a className="nav-link" href="/withdrawals">
                    Withdrawals
                  </a>
                </li>
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.3s"
                >
                  <a className="nav-link" href="/payments">
                    Payments
                  </a>
                </li>
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.4s"
                >
                  <a className="nav-link" href="/investments">
                    Investments
                  </a>
                </li>
              </ul>
              <span id="slide-line"></span>
              <form className="form-inline mt-2 mt-md-0">
                <Link
                  to="#"
                  className="btn btn-sm btn-gradient-purple btn-round btn-glow my-2 my-sm-0 animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.8s"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default UserNav1
