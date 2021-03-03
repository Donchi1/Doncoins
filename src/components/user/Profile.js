import React, { useState } from 'react'

import { useFirebase } from 'react-redux-firebase'

import { updateProfileAction } from '../Auths/Action'
import { useSelector, useDispatch } from 'react-redux'
import UserNav1 from './UserNav1'

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
    phone: '',
    country: '',
    fileUpload: '',
    oldPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (
      userData.firstname === '' &&
      userData.lastname === '' &&
      userData.phone === '' &&
      userData.country === '' &&
      userData.fileUpload === ''
    )
      return

    updateProfileAction(userData, firebase, dispatch, setuserData)
  }

  return (
    <>
      <UserNav1 />
      <section className="sub-page-banner site-bg parallax" id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeInUp">
              <div className="page-banner text-center">
                <h1 className="sub-banner-title userTextColor">Profile</h1>

                <ul>
                  <li>
                    <a href="/user">Dashboard</a>
                  </li>
                  <li>Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="authentication-bg  pb-4">
        <div className="home-btn d-none d-sm-block">
          <a href="/">
            <i className="mdi mdi-home h2 text-white"></i>
          </a>
        </div>

        <div className=" height-100vh site-bg">
          <div>
            <div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-5 pt-2 ">
                    <div className="card mb-3">
                      <div className="text-center">
                        <h4 className="wow userTextColor pt-1">
                          <h4 className="wow">
                            Welcome {userProfile.firstname}
                          </h4>
                          <p className="wow">Update your profile</p>
                        </h4>
                      </div>
                      <div className=" text-center">
                        <h6 className="text-light history-info">
                          {profile.uploadError && profile.uploadError}
                        </h6>

                        <h6 className="text-light history-info">
                          {profile.uploadSuccess ? profile.uploadSuccess : ''}
                        </h6>
                      </div>
                      <div className="card-body p-4">
                        <div className="text-center mb-4"></div>
                        <div className="field_form authorize_form">
                          <div>
                            <form onSubmit={handleSubmit}>
                              <div
                                className="form-group text-center col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.6s"
                              >
                                <div className="text-center">
                                  <label
                                    htmlFor="img"
                                    style={{
                                      fontSize: '1.4rem',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <img
                                      src={
                                        userProfile.image ||
                                        require('../../assets/avater.png')
                                      }
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
                                  title="Upload picture"
                                  size="sm"
                                  placeholder=" update profile "
                                  style={{
                                    border: 'none',
                                    outline: 'none',
                                    visibility: 'hidden',
                                  }}
                                  onChange={(e) =>
                                    setuserData({
                                      ...userData,
                                      fileUpload: e.target.files[0],
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group col-md-12 animation">
                                <input
                                  type="text"
                                  name="firstname"
                                  id="name"
                                  size="sm"
                                  defaultValue={userProfile.firstname}
                                  placeholder="Enter firstname "
                                  className="form-control"
                                  min="2"
                                  autoCorrect="true"
                                  onChange={(e) =>
                                    setuserData({
                                      ...userData,
                                      firstname: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group col-md-12 animation">
                                <input
                                  type="text"
                                  name="lastname"
                                  id="lastname"
                                  size="sm"
                                  placeholder="Enter lastname "
                                  min="2"
                                  className="form-control"
                                  autoCorrect="true"
                                  defaultValue={userProfile.lastname}
                                  onChange={(e) =>
                                    setuserData({
                                      ...userData,
                                      lastname: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group col-md-12 animation">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  size="sm"
                                  className="form-control"
                                  placeholder="Enter Email "
                                  defaultValue={userProfile.email}
                                  onChange={(e) =>
                                    setuserData({
                                      ...userData,
                                      email: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group col-md-12 animation">
                                <input
                                  type="tel"
                                  name="phone"
                                  id="phone"
                                  size="sm"
                                  minLength="2"
                                  defaultValue={userProfile.phone}
                                  placeholder="Enter phone"
                                  autoCorrect="true"
                                  className="form-control"
                                  autoComplete="true"
                                  onChange={(e) => {
                                    const data = e.target.value
                                    setuserData({
                                      ...userData,
                                      phone: data.trim(),
                                    })
                                  }}
                                />
                              </div>
                              <div className="form-group col-md-12 wow">
                                <input
                                  type="text"
                                  name="country"
                                  id="country"
                                  size="sm"
                                  minLength="2"
                                  defaultValue={userProfile.country}
                                  placeholder="Enter country"
                                  autoCorrect="true"
                                  className="form-control"
                                  autoComplete="true"
                                  onChange={(e) => {
                                    const data = e.target.value
                                    setuserData({
                                      ...userData,
                                      country: data.trim(),
                                    })
                                  }}
                                  required
                                />
                              </div>
                              <h4 className="text-center userTextColor">
                                CHANGE PASSWORD
                              </h4>
                              <div className="form-group col-md-12 wow">
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  size="sm"
                                  min="2"
                                  defaultValue="******"
                                  className="form-control"
                                  security="true"
                                  autoComplete="true"
                                  placeholder="Enter old password "
                                  onChange={(e) => {
                                    const data = e.target.value
                                    setuserData({
                                      ...userData,
                                      oldPassword: data.trim(),
                                    })
                                  }}
                                />
                              </div>
                              <div className="form-group col-md-12 animation">
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  size="sm"
                                  title="password must be 6 characters or more and contain at least 1 lower case letter"
                                  min="2"
                                  className="form-control"
                                  defaultValue="******"
                                  security="true"
                                  autoComplete="true"
                                  placeholder="Enter new password "
                                  onChange={(e) => {
                                    const data = e.target.value
                                    setuserData({
                                      ...userData,
                                      password: data.trim(),
                                    })
                                  }}
                                />
                              </div>

                              <div
                                className="form-group col-md-12 text-center animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.8s"
                              >
                                <button
                                  className="btn history-info"
                                  type="submit"
                                >
                                  Save
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
          </div>
        </div>
      </div>

      <section className="mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="action-content res_md_mb_20">
                <h3 className="wow">
                  Let Us Help You to Find a Solution That Meets Your Needs
                </h3>
                <p className="m-0 wow">
                  contact our team for any more information
                </p>
              </div>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a
                href="/contacts"
                className="btn btn-default btn-radius wow history-info"
              >
                Contact Us <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="copyright">
              Copyright &copy; UltimateCoins {new Date().getFullYear()} All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
