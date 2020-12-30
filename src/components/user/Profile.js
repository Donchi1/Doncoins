import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useFirebase } from 'react-redux-firebase'
import 'react-datepicker/dist/react-datepicker.css'

import { updateProfileAction } from '../Auths/Action'
import { useSelector, useDispatch } from 'react-redux'

function Profile() {
  const userProfile = useSelector((state) => state.firebase.profile)
  const profile = useSelector((state) => state.projectReducer)

  const firebase = useFirebase()
  const dispatch = useDispatch()

  const [userData, setuserData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    state: '',
    phone: '',
    country: '',
    fileUpload: '',
    repeatPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (
      userData.firstname === '' &&
      userData.lastname === '' &&
      userData.phone === '' &&
      userData.country === '' &&
      userData.state === '' &&
      userData.fileUpload === ''
    )
      return

    setuserData({
      firstname: '',
      lastname: '',
      password: '',
      state: '',
      phone: '',
      country: '',
    })
    updateProfileAction(userData, firebase, dispatch)
  }

  return (
    <section
      style={{ backgroundColor: 'rgb(7, 7, 80)', minheight: '100vh' }}
      className="pb-4"
    >
      <h4 className="text-center p-4 text-light text-uppercase  ">
        <span className="text-primary">update</span> your profile
      </h4>

      <form onSubmit={handleSubmit} autoComplete="true">
        <div
          style={{
            borderRadius: '1.5rem',

            width: '80%',
          }}
          className="container text-light pb-4 pt-3 bg-primary "
        >
          <div className="form-group text-center">
            <div className="text-center">
              <label
                htmlFor="img"
                style={{ fontSize: '1.4rem', cursor: 'pointer' }}
              >
                <img
                  src={userProfile.image || require('../../assets/avater.png')}
                  alt="profileimg"
                  width="150"
                  height="150"
                  className="rounded-circle"
                />
              </label>
            </div>
            <input
              type="file"
              name="img"
              id="img"
              size="sm"
              placeholder=" update profile "
              style={{ border: 'none', outline: 'none', visibility: 'hidden' }}
              onChange={(e) =>
                setuserData({
                  ...userData,
                  fileUpload: e.target.files[0],
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" style={{ fontSize: '1.4rem' }}>
              firstName
            </label>
            <input
              type="text"
              name="firstname"
              id="name"
              size="sm"
              defaultValue={userProfile.firstname}
              placeholder="Enter firstname "
              min="2"
              autoCorrect="true"
              className="formstyle form-control text-light"
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
              defaultValue={userProfile.lastname}
              className="formstyle form-control text-light"
              onChange={(e) =>
                setuserData({ ...userData, lastname: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" style={{ fontSize: '1.4rem' }}>
              Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              size="sm"
              minLength="2"
              defaultValue={userProfile.phone}
              placeholder="Enter phone"
              autoCorrect="true"
              autoComplete="true"
              className="formstyle form-control text-light"
              onChange={(e) => {
                const data = e.target.value
                setuserData({ ...userData, phone: data.trim() })
              }}
            />
          </div>
          <div className="form-group row">
            <div className="col-6">
              <label htmlFor="country" style={{ fontSize: '1.4rem' }}>
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                size="sm"
                minLength="2"
                defaultValue={userProfile.country}
                placeholder="Enter country"
                autoCorrect="true"
                autoComplete="true"
                className="formstyle form-control text-light"
                onChange={(e) => {
                  const data = e.target.value
                  setuserData({ ...userData, country: data.trim() })
                }}
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="state" style={{ fontSize: '1.4rem' }}>
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                size="sm"
                minLength="2"
                defaultValue={userProfile.state}
                placeholder="Enter state"
                autoCorrect="true"
                autoComplete="true"
                className="formstyle form-control text-light"
                onChange={(e) => {
                  const data = e.target.value
                  setuserData({ ...userData, state: data.trim() })
                }}
                required
              />
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '1.5rem',

            width: '80%',
          }}
          className="container text-light pb-4 pt-3 bg-primary "
        >
          <h4 className="text-center text-light">CHANGE PASSWORD</h4>
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
              className="formstyle form-control text-light"
              min="2"
              defaultValue="******"
              security="true"
              autoComplete="true"
              placeholder="Enter password "
              onChange={(e) => {
                const data = e.target.value
                setuserData({ ...userData, password: data.trim() })
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeatpwd" style={{ fontSize: '1.4rem' }}>
              Repeat Password
            </label>
            <input
              type="password"
              name="repeatpwd"
              id="repeatpwd"
              security="true"
              placeholder="Repeat password "
              size="sm"
              min="2"
              defaultValue="******"
              autoComplete="true"
              className="formstyle form-control text-light"
              onChange={(e) => {
                const data = e.target.value
                setuserData({ ...userData, repeatPassword: data.trim() })
              }}
            />
            {userData.repeatIncorect ? <p>passord didn't match</p> : null}

            <Button
              type="submit"
              size="sm"
              className="text-uppercase text-light mt-2"
              style={{
                width: '30%',
                borderRadius: '1.2rem',
                backgroundColor: 'darkblue',
              }}
            >
              Save
            </Button>
          </div>
        </div>
        <h6 className="text-danger">
          {profile.uploadError && profile.uploadError}
        </h6>

        {profile.uploadSuccess ? alert(profile.uploadSuccess) : ''}
      </form>
    </section>
  )
}

export default Profile
