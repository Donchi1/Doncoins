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
      <section className="1-column undefined  page-animated svg-wrapper ">
        <section className="container pt-5 ">
          <div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="page-banner text-center">
                  <h2
                    className=" animated banner-content title pt-5 text-uppercase text-bold "
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Profile
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="  pb-4">
          <div className="home-btn d-none d-sm-block">
            <a href="/">
              <i className="mdi mdi-home h2 text-white"></i>
            </a>
          </div>

          <div className=" height-100vh ">
            <div>
              <div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5 pt-2 ">
                      <div className="card mb-3 to-action-bg">
                        <div className="text-center">
                          <h4 className="btn-gradient-purple nav-color pt-1">
                            <h4 className="wow">
                              Welcome {userProfile.firstname}
                            </h4>
                            <p className="wow">Update your profile</p>
                          </h4>
                        </div>
                        <div className=" text-center">
                          <h6 className="text-light btn-gradient-purple nav-color">
                            {profile.uploadError && profile.uploadError}
                          </h6>

                          <h6 className="text-light btn-gradient-purple nav-color">
                            {profile.uploadSuccess ? profile.uploadSuccess : ''}
                          </h6>
                        </div>
                        <div className="card-body p-4">
                          <div className="text-center mb-4"></div>
                          <div className="field_form authorize_form">
                            <div>
                              <form onSubmit={handleSubmit}>
                                <div
                                  className="form-group text-center col-md-12 animated"
                                  data-animation="fadeInUp"
                                  data-animation-delay="0.6s"
                                >
                                  <div
                                    className="text-center"
                                    title="Upload profile picture"
                                  >
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
                                    className="form-control text-light"
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
                                    className="form-control text-light"
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
                                    className="form-control text-light"
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
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    size="sm"
                                    minLength="2"
                                    defaultValue={userProfile.phone}
                                    placeholder="Enter phone"
                                    autoCorrect="true"
                                    className="form-control text-light"
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
                                    className="form-control text-light"
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
                                <h4 className="text-center btn-gradient-purple nav-color">
                                  CHANGE PASSWORD
                                </h4>
                                <div className="form-group col-md-12 wow">
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    size="sm"
                                    min="2"
                                    value={userData.oldPassword}
                                    className="form-control text-light"
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
                                    className="form-control text-light"
                                    value={userData.password}
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
                                  className="form-group col-md-12 text-center animated"
                                  data-animation="fadeInUp"
                                  data-animation-delay="0.8s"
                                >
                                  <button
                                    className="btn btn-round btn-gradient-purple"
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

        <section className="mt-5 container">
          <div
            className=" to-action-bg d-flex justify-content-center align-items-center px-2"
            style={{ height: '40vh' }}
          >
            <div className="row align-items-center">
              <div className="col-lg-9">
                <div className="action-content res_md_mb_20">
                  <h3
                    className="animated btn-gradient-purple nav-color"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Let Us Help You to Find a Solution That Meets Your Needs
                  </h3>
                  <p
                    className="m-0 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    contact our team for more investment methods
                  </p>
                </div>
              </div>
              <div className="col-lg-3 text-lg-right">
                <a
                  href="/contacts"
                  className="btn btn-round btn-gradient-purple"
                  data-animation="fadeInUp"
                  data-animation-delay="0.45"
                >
                  Contact Us <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="copyright">
                  Copyright &copy; Doncoins {new Date().getFullYear()} All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Profile
