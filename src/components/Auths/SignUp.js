import React, { useState } from 'react'

//import { RegionDropdown, CountryDropdown } from 'react-country-region-selector'

import { useFirebase } from 'react-redux-firebase'

import { registerAction } from './Action'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar, makeStyles, CircularProgress } from '@material-ui/core'

import Footer from '../body/Footer'
import NavBar from '../navigation/NavBar'

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
    checked: false,
    loading: false,
    disableBtn: false,
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

    setuserData({ ...userData, loading: true, disableBtn: true })

    registerAction(userData, firebase, dispatch, checkAuth, setuserData)
  }

  return (
    <>
      <NavBar />

      <section className=" 1-column undefined  page-animated svg-wrapper ">
        <section className="container pt-5 ">
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

          <div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="page-banner text-center">
                  <h1
                    className="banner-content pt-5 nav-color text-uppercase text-bold btn-gradient-purple animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    Register
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="account-register" className="flexbox-container">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0">
              <div
                className="card animated border-grey to-action-bg border-lighten-3 m-0 box-shadow-1 card-account-right height-400"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                <div className="card-content">
                  <div className="card-body p-3">
                    <p className="text-center h5 text-capitalize  text-light">
                      Get Started with Doncoins
                    </p>
                    <p className="mb-3 text-center text-light">
                      Create your free account
                    </p>
                    <form
                      className="form-horizontal form-signin"
                      onSubmit={handleSubmit}
                    >
                      <fieldset className="form-label-group">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          placeholder="Your Firstname"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              firstname: e.target.value,
                            })
                          }
                        />
                      </fieldset>
                      <fieldset className="form-label-group">
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          placeholder="Your Lastname"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              lastname: e.target.value,
                            })
                          }
                        />
                      </fieldset>
                      <fieldset className="form-label-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              email: e.target.value,
                            })
                          }
                        />
                      </fieldset>
                      <fieldset className="form-label-group">
                        <input
                          type="password"
                          autoCorrect="true"
                          className="form-control"
                          id="user-password"
                          placeholder="Your Password"
                          security="true"
                          autoComplete="true"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              password: e.target.value,
                            })
                          }
                        />
                      </fieldset>
                      <fieldset className="form-label-group">
                        <input
                          type="tel"
                          autoCorrect="true"
                          className="form-control"
                          id="phone"
                          placeholder="Your Mobile Number"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              phone: e.target.value,
                            })
                          }
                        />
                      </fieldset>
                      <fieldset className="form-label-group">
                        <input
                          type="text"
                          autoCorrect="true"
                          className="form-control"
                          id="country"
                          placeholder="Your Country"
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              country: e.target.value,
                            })
                          }
                        />
                      </fieldset>
                      <div className="form-group row">
                        <div className="col-12 text-center text-sm-left">
                          <fieldset>
                            <input
                              type="checkbox"
                              id="remember-me"
                              className="chk-remember"
                              checked={userData.checked}
                              onChange={() =>
                                setuserData({
                                  ...userData,
                                  checked: !userData.checked,
                                })
                              }
                            />
                            <label htmlFor="remember-me" className="text-light">
                              {' '}
                              I agree to Doncoins terms
                            </label>
                          </fieldset>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-lg btn-gradient-purple btn-glow btn-round mb-2 animated w-100"
                        disabled={userData.disableBtn}
                      >
                        {userData.loading && (
                          <CircularProgress
                            variant="indeterminate"
                            color="primary"
                            size={20}
                            style={{ marginRight: '5px' }}
                          />
                        )}
                        Sign Up
                      </button>
                      <p className="text-center">
                        <a href="/login" className="card-link">
                          Log In
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  )
}

export default SignUp
