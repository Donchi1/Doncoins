import React, { useState } from 'react'
import Footer from '../body/Footer'

import { Form, Button } from 'react-bootstrap'
import * as Icons from '@material-ui/icons'
import { itemColor, backgroundcolor } from './NavBar'

function Contacts() {
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    message: '',
    allData: [],
    validity: false,
  })

  const handleSubmit = (e) => {
    const varify = e.currentTarget
    if (varify.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    setuserData(() => {
      return { ...userData, allData: userData, validity: true }
    })
  }

  return (
    <div style={{ backgroundColor: backgroundcolor }}>
      <div style={{ height: '10vh' }}></div>
      <div>
        <h3 className="text-light text-center text-uppercase pt-3 mb-5">
          Contact us here if you have any dought or questions
        </h3>
        <Form
          className="container  pb-3 thumbnail"
          style={{ backgroundColor: itemColor }}
          onSubmit={handleSubmit}
          noValidate
          validated={userData.validity}
        >
          <Form.Group>
            <Form.Label
              htmlFor="name"
              className="text-light"
              style={{ fontSize: '1.4rem' }}
            >
              Full Name
            </Form.Label>
            <Form.Control
              type="text"
              id="name"
              size="lg"
              placeholder="Name"
              aria-describedby="inputname"
              required
              className="formstyle text-light"
              onChange={(e) =>
                setuserData({ ...userData, name: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Name is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label
              htmlFor="email"
              className="text-light"
              style={{ fontSize: '1.4rem' }}
            >
              Enter Email
            </Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Email"
              size="lg"
              aria-describedby="inputemail"
              required
              className="formstyle text-light"
              onChange={(e) =>
                setuserData({ ...userData, email: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Email is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label
              htmlFor="message"
              className="text-light"
              style={{ fontSize: '1.4rem' }}
            >
              Message Us
            </Form.Label>
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
            <Form.Control.Feedback type="invalid">
              Message field is required
            </Form.Control.Feedback>
          </Form.Group>
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
        </Form>
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
              <p>+061-757-12655</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <Icons.Email className=" mr-4" style={{ color: '#3bccff' }} />
            </div>
            <div className="text-light pt-5">
              <h3>Email ADDRESS</h3>
              <p>Email us on cryptogenus58@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contacts
