import React, { useState } from 'react'
import Footer from '../body/Footer'

import { Form, Button } from 'react-bootstrap'
import * as Icons from '@material-ui/icons'
import { itemColor, backgroundcolor } from './NavBar'
import { contactAction } from '../Auths/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Snackbar } from '@material-ui/core'

function Contacts() {
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    message: '',
    allData: [],
    validity: false,
  })
  const contactSuccess = useSelector(
    (state) => state.projectReducer.contactMessageSuccess,
  )
  const [openSnack, setopenSnack] = useState(false)

  const dispatch = useDispatch()
  const firebase = useFirebase()

  const handleSubmit = (e) => {
    e.preventDefault()

    contactAction(userData, firebase, dispatch)
    setuserData(() => {
      return { ...userData, name: '', email: '', message: '' }
    })
    if (contactSuccess) {
      return setopenSnack(true)
    }
  }

  return (
    <div style={{ backgroundColor: backgroundcolor }}>
      <div style={{ height: '10vh' }}></div>
      <div>
        <h3 className="text-light text-center text-uppercase pt-3 mb-5">
          Contact us here if you have any dought or questions
        </h3>
        <form
          className="container  pb-3 thumbnail"
          style={{ backgroundColor: itemColor }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label
              htmlFor="name"
              className="text-light"
              style={{ fontSize: '1.4rem' }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              size="lg"
              placeholder="Name"
              aria-describedby="inputname"
              required
              className="formstyle form-control text-light"
              onChange={(e) =>
                setuserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="text-light"
              style={{ fontSize: '1.4rem' }}
            >
              Enter Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              size="lg"
              aria-describedby="inputemail"
              required
              className="formstyle form-control text-light"
              onChange={(e) =>
                setuserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="message"
              className="text-light"
              style={{ fontSize: '1.4rem' }}
            >
              Message Us
            </label>
            <Form.Control
              as="textarea"
              type="text"
              id="message"
              placeholder="Type your message"
              aria-describedby="inputmessage"
              rows="8"
              spellCheck
              minLength="1"
              maxLength="2000"
              required
              className=" text-light"
              style={{ backgroundColor: 'black' }}
              onChange={(e) =>
                setuserData({ ...userData, message: e.target.value })
              }
            />
          </div>
          <Button
            type="submit"
            className="text-light bg-primary"
            style={{
              width: '100%',
              textTransform: 'uppercase',

              borderRadius: '1.2rem',
            }}
            size="lg"
          >
            Submit Message
          </Button>
        </form>
        <Snackbar
          onClose={() => setopenSnack(false)}
          open={openSnack}
          message={contactSuccess}
          className="text-light text-warning"
          autoHideDuration={5000}
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        ></Snackbar>
      </div>
      <div
        className="d-flex  align-items-center container my-5"
        style={{ backgroundColor: itemColor }}
      >
        <div>
          <div className="d-flex align-items-center ">
            <div>
              <Icons.Home className=" mr-4" style={{ color: '#3bccff' }} />
            </div>
            <div className="text-light pt-5">
              <h3>ADDRESS</h3>
              <p>Schulstrasse st, House 24 Wittinsburg United Kingdom</p>
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <div>
              <Icons.Phone className=" mr-4" style={{ color: '#3bccff' }} />
            </div>
            <div className="text-light pt-5">
              <h3>PHONE NUMBER</h3>
              <p>+44(744)837-8394</p>
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <div>
              <Icons.WhatsApp className=" mr-4" style={{ color: '#3bccff' }} />
            </div>
            <div className="text-light pt-5">
              <h3>WHATSAPP NUMBER</h3>
              <p>+44(744)837-8394</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <Icons.Email className=" mr-4" style={{ color: '#3bccff' }} />
            </div>
            <div className="text-light pt-5">
              <h3>Email ADDRESS</h3>
              <p>Email us on contact@cryptogenus.org</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contacts
