import React, { useState } from 'react'

//import { RegionDropdown, CountryDropdown } from 'react-country-region-selector'

import { useFirebase } from 'react-redux-firebase'

import { registerAction } from './Action'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar, makeStyles } from '@material-ui/core'

import Footer from '../body/Footer'
import NavBar from '../navigation/NavBar'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
}))

function SignUp() {
  const classes = useStyles()
  const [userData, setuserData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    phone: '',
    country: '',
  })
  const [openSnack, setopenSnack] = useState(false)
  const firebase = useFirebase()

  const dispatch = useDispatch()

  const authError = useSelector((state) => state.authReducer.signupError)
  const [numberError, setNumberError] = useState(false)
  const [numberErrorMessage, setNumberErrorMessage] = useState('')

  const checkAuth = () => setopenSnack(true)

  const validity = () => {
    setNumberErrorMessage('Invalid number')
    setNumberError(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userData.phone.match(/12345/) || userData.phone.match(/1234/)) {
      return validity()
    }

    registerAction(userData, firebase, dispatch, checkAuth, setuserData)
  }

  return (
    <>
      <NavBar />
      <section className="sub-page-banner site-bg parallax" id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeInUp">
              <div className="page-banner text-center">
                <h1 className="sub-banner-title userTextColor">Register</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="account-pages site-bg height-100vh">
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5 ">
                  <Snackbar
                    onClose={() => setopenSnack(false)}
                    open={openSnack}
                    message={authError}
                    autoHideDuration={9000}
                    ContentProps={{ className: classes.content }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    className="transition"
                  ></Snackbar>
                  <Snackbar
                    onClose={() => setNumberError(false)}
                    open={numberError}
                    message={numberErrorMessage}
                    autoHideDuration={9000}
                    ContentProps={{ className: classes.content }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    className="transition"
                  ></Snackbar>
                  <div className="card wow fadeInUp">
                    <div className="card-body p-4 ">
                      <div className="text-center mb-4">
                        <h4 className="text-uppercase mt-0 userTextColor">
                          Register for membership
                        </h4>
                      </div>

                      <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group mb-4">
                          <label htmlFor="firstname " className="text-dark">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            className="form-control "
                            autoCorrect="true"
                            required
                            placeholder="Enter your firstname"
                            onChange={(e) =>
                              setuserData({
                                ...userData,
                                firstname: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="lastname" className="text-dark">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Enter your lastname"
                            className="form-control"
                            required
                            autoCorrect="true"
                            onChange={(e) =>
                              setuserData({
                                ...userData,
                                lastname: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="emailaddress" className="text-dark">
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="emailaddress"
                            className="form-control"
                            placeholder="Enter your email"
                            autoCorrect="true"
                            required
                            onChange={(e) =>
                              setuserData({
                                ...userData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="password" className="text-dark">
                            Password
                          </label>
                          <input
                            name="password"
                            autoCorrect="true"
                            className="form-control"
                            type="password"
                            required
                            security="true"
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) =>
                              setuserData({
                                ...userData,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="country" className="text-dark">
                            Country
                          </label>
                          <input
                            name="country"
                            autoCorrect="true"
                            className="form-control"
                            type="text"
                            id="country"
                            placeholder="Enter your country"
                            required
                            onChange={(e) =>
                              setuserData({
                                ...userData,
                                country: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="phone" className="text-dark">
                            Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="form-control"
                            autoCorrect="true"
                            placeholder="Enter your number"
                            required
                            onChange={(e) =>
                              setuserData({
                                ...userData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="form-group mb-4">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-signin"
                            />
                            <label
                              className="custom-control-label text-dark"
                              htmlFor="checkbox-signin"
                            >
                              I accept{' '}
                              <Link to="/signup" className="text-primary">
                                Terms and Conditions
                              </Link>
                            </label>
                          </div>
                        </div>

                        <div className="form-group mb-0 text-center">
                          <button
                            className="btn w-100 history-info"
                            type="submit"
                          >
                            {' '}
                            Sign Up{' '}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-12 text-center link-resize">
                      <p className="text-white">
                        Already have account?{' '}
                        <a href="/login" className="text-white ml-1">
                          <b>Sign In</b>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUp
