import React, { useState } from 'react'

import { newsLetterAction } from '../Auths/Action'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'
import Chat from './Chat'

function Footer() {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()
  const firebase = useFirebase()
  const letterSuccess = useSelector(
    (state) => state.projectReducer.subcriptionSuccess,
  )
  const letterError = useSelector(
    (state) => state.projectReducer.subcriptionError,
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    newsLetterAction(input, firebase, dispatch, setInput)
  }

  return (
    <>
      <footer className="bg-pattern site-bg2 ptb-100">
        <div className="container">
          <div className="footer">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-logo pb-25">
                  <a href="/">
                    <h3 className="sub-heading userTextColor">
                      <span style={{ fontSize: '3rem' }}>U</span>
                      ltimateCoins
                    </h3>
                  </a>
                </div>
                <div className="footer-icon">
                  <ul>
                    <li>
                      <Link to="/faq">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-link">
                  <ul className="nav-color">
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/teams">Teams</a>
                    </li>
                    <li>
                      <a href="/signup">Join Us</a>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>

                    <li>
                      <a href="/teams">Teams</a>
                    </li>
                    <li>
                      <a href="/faq">Faq</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="subscribe">
                  <form onSubmit={handleSubmit}>
                    {letterSuccess && (
                      <Typography color="info" component="h5">
                        letterSuccess
                      </Typography>
                    )}
                    {letterError && (
                      <Typography color="info" component="h5">
                        letterError
                      </Typography>
                    )}
                    <div className="form-group">
                      <label className="userTextColor" htmlFor="newsletter">
                        Subscribe to our Newsleter
                      </label>
                      <input
                        type="email"
                        id="newsletter"
                        className="form-control"
                        value={input}
                        placeholder="Enter your email Address"
                        required
                        onChange={(e) => {
                          setInput(e.target.value)
                        }}
                      />
                      <input
                        type="submit"
                        name="submit"
                        value="Subscribe"
                        className="submit history-info"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  © UltimateCoin {new Date().getFullYear()} all Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <Link to="#">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <a href="/contacts">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Chat />
      </footer>
      <div className="transition text-right ">
        <a href="#banner" className="history-info backtop scrollTo">
          <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
        </a>
      </div>
    </>
  )
}

export default Footer
