import React, { useState } from 'react'

import { useFirebase } from 'react-redux-firebase'
import { useSelector, useDispatch } from 'react-redux'
import { logginAction } from './Action'

import { Snackbar, makeStyles } from '@material-ui/core'
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
  })

  const classes = useStyles()

  const firebase = useFirebase()
  const dispatch = useDispatch()

  const authError = useSelector((state) => state.authReducer.loginError)
  const [openSnack, setopenSnack] = useState(false)

  const checkAuth = () => setopenSnack(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    logginAction(userData, firebase, dispatch, checkAuth, setuserData)
  }

  return (
    <>
      <NavBar />
      <section className="sub-page-banner site-bg parallax" id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeInUp">
              <div className="page-banner text-center">
                <h1 className="sub-banner-title userTextColor">Login</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="authentication-bg site-bg ">
        <div className="home-btn d-none d-sm-block">
          <a href="/">
            <i className="mdi mdi-home h2 text-white"></i>
          </a>
        </div>

        <Snackbar
          onClose={() => setopenSnack(false)}
          open={openSnack}
          message={authError}
          autoHideDuration={9000}
          ContentProps={{ className: classes.content }}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
          className="transition"
        />
        <div className=" height-100vh ">
          <div>
            <div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-5 pt-2 ">
                    <div className="card wow fadeInUp">
                      <div className="card-body p-4">
                        <div className="text-center mb-4">
                          <h4 className="text-uppercase mt-0 userTextColor">
                            Login to get started
                          </h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                          <div className="form-group form-focus mb-4">
                            <label
                              htmlFor="emailaddress "
                              className="text-dark text-bold"
                            >
                              Email address
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              id="emailaddress"
                              required
                              placeholder="Enter your email"
                              value={userData.email}
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="form-group mb-4">
                            <label htmlFor="password " className="text-dark ">
                              Password
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              required
                              security="true"
                              id="password"
                              placeholder="Enter your password"
                              value={userData.password}
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  password: e.target.value,
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
                                checked={userData.remember}
                                onChange={() =>
                                  setuserData({
                                    ...userData,
                                    remember: !userData.remember,
                                  })
                                }
                              />
                              <label
                                className="custom-control-label text-dark"
                                htmlFor="checkbox-signin"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>

                          <div className="form-group mb-0 text-center">
                            <button
                              className="btn  history-info w-100"
                              type="submit"
                            >
                              {' '}
                              Log In{' '}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-12 text-center link-resize pb-2 pt-2 ">
                        <p>
                          {' '}
                          <a href="/passReset" className="text-primary ml-1">
                            <i className="fa fa-lock mr-1"></i>Forgot your
                            password?
                          </a>
                        </p>
                        <p>
                          Don't have an account?{' '}
                          <a href="/signup" className=" ml-1">
                            <b className="text-primary">Sign Up</b>
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
      </div>
      <Footer />
    </>
  )
}

export default Login
