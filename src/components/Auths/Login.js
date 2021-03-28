import React, { useState } from 'react'

import { useFirebase } from 'react-redux-firebase'
import { useSelector, useDispatch } from 'react-redux'
import { logginAction } from './Action'

import { Snackbar, makeStyles, CircularProgress } from '@material-ui/core'
import Footer from '../body/Footer'
import NavBar from '../navigation/NavBar'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
}))

function Login() {
  const [userData, setuserData] = useState({
    password: '',
    email: '',
    remember: '',
    validity: false,
    checked: false,
    loading: false,
    disableBtn: false,
  })

  const classes = useStyles()

  const firebase = useFirebase()
  const dispatch = useDispatch()

  const authError = useSelector((state) => state.authReducer.loginError)
  const [openSnack, setopenSnack] = useState(false)

  const checkAuth = () => setopenSnack(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    setuserData({ ...userData, loading: true, disableBtn: true })

    logginAction(userData, firebase, dispatch, checkAuth, setuserData)
  }

  return (
    <>
      <NavBar />
      <div className="1-column undefined  page-animated svg-wrapper ">
        <Snackbar
          onClose={() => setopenSnack(false)}
          open={openSnack}
          message={authError}
          autoHideDuration={9000}
          ContentProps={{ className: classes.content }}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
          className="transition"
        />
        <section className="container pt-5">
          <div>
            <div className="row">
              <div className="col-md-12 ">
                <div
                  className="page-banner text-center animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.3s"
                >
                  <h1 className="banner-content pt-5 nav-color text-bold text-uppercase btn-gradient-purple">
                    login
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="account-login" className="flexbox-container">
          <div className="col-12 d-flex align-items-center justify-content-center ">
            {/* login form */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 col-12 p-0">
              <div
                className="card border-grey to-action-bg animated border-lighten-3 m-0 box-shadow-0 card-account-right height-400"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                <div className="card-content">
                  <div className="card-body p-3">
                    <p className="text-center h5 text-capitalize text-light">
                      Welcome to Doncoins!
                    </p>
                    <p className="mb-3 text-center text-light">
                      Please enter your login details
                    </p>
                    <form
                      className="form-horizontal form-signin"
                      onSubmit={handleSubmit}
                    >
                      <fieldset className="form-label-group">
                        <input
                          type="text"
                          className="form-control"
                          id="userEmail"
                          placeholder="Your Email"
                          value={userData.email}
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
                          className="form-control"
                          autoComplete="true"
                          id="user-password"
                          placeholder="Enter Password"
                          value={userData.password}
                          required
                          onChange={(e) =>
                            setuserData({
                              ...userData,
                              password: e.target.value,
                            })
                          }
                        />
                      </fieldset>
                      <div className="form-group row">
                        <div className="col-md-6 col-12 text-center text-sm-left">
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
                              Remember
                            </label>
                          </fieldset>
                        </div>
                        <div className="col-md-6 col-12 float-sm-left text-center text-sm-right">
                          <a href="/passReset" className="card-link">
                            Forgot Password?
                          </a>
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
                        Log In
                      </button>
                      <p className="text-center">
                        <a href="/signup" className="card-link">
                          Register
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
      </div>
    </>
  )
}

export default Login
