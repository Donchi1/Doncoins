import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import 'react-datepicker/dist/react-datepicker.css'

import { updateProfileAction } from '../Auths/Action'
import { useSelector } from 'react-redux'

function Profile() {
  const userProfile = useSelector((state) => state.firebase.profile)

  const [userData, setuserData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    repeatPassword: '',
    validaty: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setuserData({ ...userData, validity: true })
    updateProfileAction(userData)
  }

  return (
    <section
      style={{ backgroundColor: 'rgb(7, 7, 80)', minheight: '100vh' }}
      className="pb-4"
    >
      <h4 className="text-center p-4 text-light text-uppercase  ">
        <span className="text-primary">update</span> your profile
      </h4>

      <Form onSubmit={handleSubmit} autoComplete="true">
        <div
          style={{
            borderRadius: '1.5rem',

            width: '80%',
          }}
          className="container text-light pb-4 pt-3 bg-primary "
        >
          <Form.Group>
            <Form.Label htmlFor="name" style={{ fontSize: '1.4rem' }}>
              firstName
            </Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              id="name"
              size="sm"
              value={userProfile.firstname}
              placeholder="Enter firstname "
              min="2"
              autoCorrect="true"
              className="formstyle text-light"
              required
              onChange={(e) =>
                setuserData({ ...userData, firstname: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              field is required
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks nice
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="Lastname" style={{ fontSize: '1.4rem' }}>
              Lastname
            </Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              id="lastname"
              size="sm"
              value={userProfile.lastname}
              placeholder="Enter lastname "
              min="2"
              autoCorrect="true"
              className="formstyle text-light"
              onChange={(e) =>
                setuserData({ ...userData, lastname: e.target.value })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              field is required
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks nice
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email" style={{ fontSize: '1.4rem' }}>
              Email
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              size="sm"
              min="2"
              value={userProfile.email}
              placeholder="Enter email "
              autoCorrect="true"
              autoComplete="true"
              className="formstyle text-light"
              onChange={(e) => {
                const data = e.target.value
                setuserData({ ...userData, email: data.trim() })
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              field is required
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks nice
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div
          style={{
            borderRadius: '1.5rem',

            width: '80%',
          }}
          className="container text-light pb-4 pt-3 bg-primary "
        >
          <h4 className="text-center text-light">CHANGE PASSWORD</h4>
          <Form.Group>
            <Form.Label htmlFor="password" style={{ fontSize: '1.4rem' }}>
              password
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              size="sm"
              title="password must be 6 characters or more and contain at least 1 lower case letter"
              className="formstyle text-light"
              min="2"
              security="true"
              autoComplete="true"
              placeholder="Enter password "
              onChange={(e) => {
                const data = e.target.value
                setuserData({ ...userData, password: data.trim() })
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              field is required
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks nice
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="repeatpwd" style={{ fontSize: '1.4rem' }}>
              Repeat Password
            </Form.Label>
            <Form.Control
              type="password"
              name="repeatpwd"
              id="repeatpwd"
              security="true"
              placeholder="Repeat password "
              size="sm"
              min="2"
              autoComplete="true"
              className="formstyle text-light"
              required
              onChange={(e) => {
                const data = e.target.value
                setuserData({ ...userData, repeatPassword: data.trim() })
              }}
            />
            {userData.repeatIncorect ? <p>passord didn't match</p> : null}
            <Form.Control.Feedback type="invalid">
              field is required
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks nice
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            type="submit"
            size="sm"
            className="text-uppercase text-light "
            style={{
              width: '30%',
              borderRadius: '1.2rem',
              backgroundColor: 'darkblue',
            }}
          >
            Save
          </Button>
        </div>
      </Form>
    </section>
  )
}

export default Profile
