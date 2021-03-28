import React, { useState } from 'react'
import { forgetAction } from '../Auths/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { makeStyles, Snackbar } from '@material-ui/core'
import NavBar from './NavBar'
import Footer from '../body/Footer'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
  success: {
    backgroundColor: 'green',
  },
}))

function ForgetPassword() {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const [openErrorSnacks, setOpenErrorSnacks] = useState(false)
  const [openSuccessSnacks, setOpenSuccessSnacks] = useState(false)

  const resetError = useSelector((state) => state.authReducer.passResetError)
  const resetSuccess = useSelector((state) => state.authReducer.passResetSuccss)
  const [resetEmail, setResetEmail] = useState('')

  const classes = useStyles()

  const handleReset = (e) => {
    e.preventDefault()
    forgetAction(
      dispatch,
      firebase,
      resetEmail,
      setResetEmail,
      setOpenSuccessSnacks,
      setOpenErrorSnacks,
    )
  }
  return (
    <>
      <NavBar />
      <section className="1-column undefined  page-animated svg-wrapper  ">
        <section className="container pt-5 ">
          <div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="page-banner text-center">
                  <h2
                    className=" animated banner-content pt-5 title text-uppercase text-bold "
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    {' '}
                    Password Reset
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Snackbar
          onClose={() => setOpenErrorSnacks(false)}
          open={openErrorSnacks}
          message={resetError}
          autoHideDuration={9000}
          ContentProps={{ className: classes.content }}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        />
        <Snackbar
          onClose={() => setOpenSuccessSnacks(false)}
          open={openSuccessSnacks}
          message={resetSuccess}
          autoHideDuration={9000}
          ContentProps={{ className: classes.success }}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        />
        <div className=" height-100vh site-bg">
          <div>
            <div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-5 pt-2 ">
                    <div className="card ">
                      <div className="card-body p-4">
                        <div className="text-center mb-4">
                          <h4 className="text-uppercase mt-0 userTextColor">
                            Input an email for your password reset instruction
                          </h4>
                        </div>
                        <form onSubmit={handleReset}>
                          <div className="form-group form-focus mb-4">
                            <input
                              className="form-control"
                              type="email"
                              id="emailaddress"
                              required
                              placeholder="Enter your email"
                              value={resetEmail}
                              onChange={(e) => setResetEmail(e.target.value)}
                            />
                          </div>

                          <div className="form-group mb-0 text-center">
                            <button
                              className="btn btn-gradient-purple btn-round btn-block"
                              type="submit"
                            >
                              {' '}
                              Submit{' '}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default ForgetPassword
