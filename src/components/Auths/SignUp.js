import React, { useState } from 'react'
import MobileInput from './MobileInput'
import { Button } from 'react-bootstrap'

import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import { backgroundcolor, itemColor } from '../navigation/NavBar'
import { registerAction } from './Action'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar } from '@material-ui/core'

function SignUp() {
  const [userData, setuserData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    gender: '',
    email: '',
    state: '',
    phone: '',
    country: '',
    date: new Date(),
    validaty: false,
  })
  const [openSnack, setopenSnack] = useState(false)

  const firebase = useFirebase()
  const { push } = useHistory()
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.firebase.auth)
  const authError = useSelector((state) => state.authReducer.signupError)

  const checkAuth = () => setopenSnack(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    registerAction(userData, firebase, dispatch, checkAuth)
    setuserData({
      ...userData,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      date: new Date(),
      country: '',
      phone: '',
      state: '',
      gender: '',
    })

    if (isLoaded(authState) && !isEmpty(authState)) {
      return push('/login')
    } else {
      return <Redirect to="/signup" />
    }
  }

  return (
    <section
      style={{ backgroundColor: backgroundcolor, minheight: '100vh' }}
      className="pb-4"
    >
      <h4 className="text-center p-4 text-light text-uppercase  ">
        <span className="text-primary">Register</span> for membership
      </h4>
      <h3
        className="text-light text-center mb-3 "
        style={{ fontStyle: 'italic' }}
      >
        SignUp now <br />
        and enjoy our unlimited membership services
      </h3>
      <Snackbar
        onClose={() => setopenSnack(false)}
        open={openSnack}
        message={authError}
        autoHideDuration={9000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      ></Snackbar>
      <form
        className="container text-light pb-4 pt-3"
        onSubmit={handleSubmit}
        autoComplete="true"
        style={{
          borderRadius: '1.5rem',
          backgroundColor: itemColor,
          width: '80%',
        }}
      >
        <div className="form-group">
          <label htmlFor="name" style={{ fontSize: '1.4rem' }}>
            firstName
          </label>
          <input
            type="text"
            name="firstname"
            id="name"
            size="sm"
            placeholder="Enter firstname "
            min="2"
            autoCorrect="true"
            className="formstyle text-light form-control"
            required
            onChange={(e) =>
              setuserData({ ...userData, firstname: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="Lastname" style={{ fontSize: '1.4rem' }}>
            Lastname
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            size="sm"
            placeholder="Enter lastname "
            min="2"
            autoCorrect="true"
            className="formstyle text-light form-control"
            onChange={(e) =>
              setuserData({ ...userData, lastname: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" style={{ fontSize: '1.4rem' }}>
            Number
          </label>
          <MobileInput user={userData} changeUser={setuserData} />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{ fontSize: '1.4rem' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            size="sm"
            min="2"
            placeholder="Enter email "
            autoCorrect="true"
            className="formstyle text-light form-control"
            onChange={(e) => {
              const data = e.target.value
              setuserData({ ...userData, email: data.trim() })
            }}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We will never share your email with anyone
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{ fontSize: '1.4rem' }}>
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            size="sm"
            title="password must be 6 characters or more and contain at least 1 lower case letter"
            className="formstyle text-light form-control"
            min="2"
            autoComplete="true"
            security="true"
            placeholder="Enter password "
            onChange={(e) => {
              const data = e.target.value
              setuserData({ ...userData, password: data.trim() })
            }}
            required
          />
        </div>

        <h5>Gender</h5>
        <div className="form-group">
          <input
            type="radio"
            id="male"
            className="formstyle text-light "
            checked={userData.gender === 'male' ? true : false}
            onChange={(e) => setuserData({ ...userData, gender: 'male' })}
            required
          />
          <label htmlFor="male" className="form-check-label ml-2">
            Male
          </label>
        </div>
        <div className="form-group">
          <input
            type="radio"
            id="female"
            checked={userData.gender === 'female' ? true : false}
            className="formstyle text-light"
            value={userData.gender}
            onChange={() => setuserData({ ...userData, gender: 'female' })}
            required
          />
          <label htmlFor="female" className="form-check-label ml-2">
            Female
          </label>
        </div>

        <div>
          <h5>Date of birth</h5>
          <Datepicker
            selected={userData.date}
            onChange={(date) => setuserData({ ...userData, date: date })}
            adjustDateOnChange
            className="formstyle text-light"
          />
        </div>

        <div className="row">
          <div className="col-6 form-group">
            <label htmlFor="country" style={{ fontSize: '1.4rem' }}>
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              autoCorrect="true"
              size="sm"
              className="formstyle text-light form-control"
              required
              placeholder="Enter country "
              onChange={(e) => {
                const data = e.target.value
                setuserData({ ...userData, country: data.trim() })
              }}
            />
          </div>
          <div className="col-6 form-group">
            <label htmlFor="state" style={{ fontSize: '1.4rem' }}>
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              autoCorrect="true"
              size="sm"
              className="formstyle text-light form-control"
              required
              placeholder="Enter State "
              onChange={(e) => {
                const data = e.target.value
                setuserData({ ...userData, state: data.trim() })
              }}
            />
          </div>
        </div>
        <Button
          type="submit"
          size="sm"
          className="text-uppercase text-light bg-primary"
          style={{ width: '30%', borderRadius: '1.2rem' }}
        >
          Submit
        </Button>
        <p className="text-uppercase text-center mt-4 text-light">
          Already have an account?{' '}
          <Link to="/login" className="text-primary">
            Login now
          </Link>
        </p>
      </form>
    </section>
  )
}

export default SignUp
