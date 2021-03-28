import React, { useState } from 'react'
import Footer from '../body/Footer'

import NavBar from './NavBar'
import { contactAction } from '../Auths/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Snackbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Contacts() {
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    phone: '',
  })
  const contactSuccess = useSelector(
    (state) => state.projectReducer.contactMessageSuccess,
  )
  const contactError = useSelector(
    (state) => state.projectReducer.contactMessageError,
  )
  const [openSnack, setopenSnack] = useState(false)
  const [openSnackError, setopenSnackError] = useState(false)

  const dispatch = useDispatch()
  const firebase = useFirebase()

  const handleSubmit = (e) => {
    e.preventDefault()
    contactAction(
      userData,
      firebase,
      dispatch,
      setuserData,
      setopenSnack,
      setopenSnackError,
    )
  }

  return (
    <>
      <NavBar />
      <div className="1-column undefined  page-animated svg-wrapper flex-align-center">
        <section className="container pt-5 ">
          <div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="page-banner text-center">
                  <div
                    className=" animated banner-content pt-5 nav-color text-uppercase text-bold btn-gradient-purple"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Snackbar
          onClose={() => setopenSnack(false)}
          open={openSnack}
          message={contactSuccess}
          className="text-light text-warning"
          autoHideDuration={5000}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        ></Snackbar>
        <Snackbar
          onClose={() => setopenSnack(false)}
          open={openSnackError}
          message={contactError}
          className="text-light text-warning"
          autoHideDuration={5000}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        ></Snackbar>

        <section id="contact" className="contact ">
          <div className="container">
            <div className="heading text-center">
              <div
                className="animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                <h6 className="sub-title">JOIN US</h6>
                <h2 className="title">Contact</h2>
              </div>
              <p
                className="content-desc animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                Have questions? We’re happy to help.
              </p>
            </div>
            <div className="row">
              <div className="col-xl-8 col-md-12 mx-auto">
                <ul className="list-unstyled contact-info pb-5 mb-5">
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.5s"
                  >
                    <i className="fa fa-whatsapp"></i>
                    <span className="ml-1 ">
                      <Link className="text-light" to="#">
                        +1(520)367-0280
                      </Link>
                    </span>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.6s"
                  >
                    <i className="fa fa-envelope"></i>
                    <span className="ml-1">
                      <a
                        className=" text-light"
                        href="mailto:info@doncoins.info"
                      >
                        info@doncoins.info
                      </a>
                    </span>
                  </li>
                  <li
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.7s"
                  >
                    <i className="fa fa-map-marker"></i>
                    <span className="ml-1">
                      825 Afred Drive Bayside, NY 11361 United States
                    </span>
                  </li>
                </ul>
                <form onSubmit={handleSubmit} className="text-center">
                  <input
                    type="text"
                    className="form-control animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.8s"
                    name="name"
                    placeholder="Your Name"
                    required
                    onChange={(e) =>
                      setuserData({ ...userData, name: e.target.value })
                    }
                    value={userData.name}
                  />
                  <input
                    type="email"
                    className="form-control animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.9s"
                    name="mail"
                    placeholder="Your Email"
                    required
                    onChange={(e) =>
                      setuserData({ ...userData, email: e.target.value })
                    }
                    value={userData.email}
                  />
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone*"
                    onChange={(e) =>
                      setuserData({ ...userData, phone: e.target.value })
                    }
                    value={userData.phone}
                    required
                  />
                  <input
                    type="text"
                    className="form-control animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.0s"
                    name="message"
                    placeholder="Your Massage"
                    required
                    onChange={(e) =>
                      setuserData({ ...userData, message: e.target.value })
                    }
                    value={userData.message}
                  />
                  <button
                    type="submit"
                    className="btn btn-lg btn-gradient-purple btn-glow btn-round animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="1.1s"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row pt-100 mt-3">
            <div
              className="col-md-12 animated "
              data-animation="fadeInUpShorter"
              data-animation-delay="0.6s"
            >
              <div className="container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1812836849363!2d144.95343106869794!3d-37.81739907631358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sin!4v1562916623921!5m2!1sen!2sin"
                  height="500"
                  style={{ border: '0', width: '100%' }}
                  title="Doncoins Location"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Contacts
