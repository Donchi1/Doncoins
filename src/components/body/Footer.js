import React, { useState } from 'react'

import { newsLetterAction } from '../Auths/Action'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'

function Footer() {
  const [input, setInput] = useState({
    email: '',
    loading: false,
    disableBtn: false,
  })

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
    setInput({ ...input, loading: true, disableBtn: true })
    newsLetterAction(input, firebase, dispatch, setInput)
  }

  return (
    <>
      <footer
        className="footer static-bottom footer-dark footer-custom-class"
        data-midnight="white"
      >
        <div className="container">
          <div className="footer-wrapper">
            <div className="row">
              <div className="col-md-4">
                <div className="about">
                  <div
                    className="title animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <img
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/logo.png"
                      alt="Logo"
                    />
                    <span className="logo-text">Doncoins</span>
                  </div>
                  <div
                    className="about-text animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <p className="grey-accent2">
                      Doincoins is a blockchain platform that allows users to
                      make to make cryptocurrency investment for there future
                      and life establishments.
                    </p>
                  </div>
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
                        <label className="text-light" htmlFor="newsletter">
                          Subscribe to our Newsleter
                        </label>
                        <input
                          type="email"
                          id="newsletter"
                          className="form-control"
                          value={input.email}
                          placeholder="Enter your email Address"
                          required
                          onChange={(e) => {
                            setInput({ ...input, email: e.target.value })
                          }}
                        />
                        <button
                          type="submit"
                          disabled={input.disableBtn}
                          className="submit btn btn-gradient-purple btn-round mb-2 animated w-100"
                        >
                          {input.loading && (
                            <CircularProgress
                              variant="indeterminate"
                              color="primary"
                              size={20}
                              style={{ marginRight: '5px' }}
                            />
                          )}
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                  <ul className="social-buttons list-unstyled mb-5">
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      <Link to="#" title="Facebook" className="btn font-medium">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.5s"
                    >
                      <Link to="" title="Twitter" className="btn font-medium">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <Link to="#" title="LinkedIn" className="btn font-medium">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.7s"
                    >
                      <Link to="#" title="GitHub" className="btn font-medium">
                        <i className="fa fa-github"></i>
                      </Link>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.8s"
                    >
                      <Link to="#" title="Pintrest" className="btn font-medium">
                        <i className="fa fa-pinterest"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="links">
                  <h5
                    className="title animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.5s"
                  >
                    Useful Links
                  </h5>
                  <ul className="useful-links float-left mr-5">
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <a href="/">Home</a>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.7s"
                    >
                      <a href="/about">About</a>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.8s"
                    >
                      <a href="/features">Feature</a>
                    </li>
                  </ul>
                  <ul className="useful-links">
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.9s"
                    >
                      <a href="/contact">Contact</a>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.0s"
                    >
                      <a href="/team">Team</a>
                    </li>
                    <li
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.1s"
                    >
                      <a href="/login">Sign in</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feed">
                  <h5
                    className="title animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.8s"
                  >
                    Smart Feed
                  </h5>
                  <div className="tweets">
                    <span
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.0s"
                    >
                      More about Doncoin features, services and other crypto
                      related events:
                      <a href="https://doncoins.info" className="ml-2">
                        Here
                      </a>
                    </span>
                    <span
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.2s"
                    >
                      More infotamation about Doncoin CIC Coin,trading and
                      pricing
                      <a href="https://doncoins.info/pricing" className="ml-2">
                        Here
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy-right mx-auto text-center">
              <span className="copyright">
                Copyright © Doncoins {new Date().getFullYear()} all Rights
                Reserved.
                <a href="/" title="Doncoins" className="white">
                  Doncoins
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
