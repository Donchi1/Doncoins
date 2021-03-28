import React, { useState } from 'react'
import Footer from '../body/Footer'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { isEmpty, isLoaded, useFirebase } from 'react-redux-firebase'
import { contactAction } from '../Auths/Action'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Snackbar } from '@material-ui/core'
import AskedQuestions from '../body/AskedQuestions'

function Home() {
  const authState = useSelector((state) => state.firebase.auth)
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    phone: '',
    loading: false,
    diasbleBtn: false,
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
    setuserData({ ...userData, loading: true, diasbleBtn: true })
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
    <div
      className=" 1-column undefined  page-animated svg-wrapper"
      data-menu-open="hover"
      data-menu=""
    >
      <NavBar />
      <div className="content-wrapper">
        <div className="content-body">
          <main>
            {/* Header: 3D Animation */}
            <section className="head-area" id="head-area">
              <div id="particles-js"></div>
              <div className="head-content d-flex align-items-center">
                <div className="container">
                  <div className="banner-wrapper">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12">
                        <div className="banner-content pt-5">
                          <h1
                            className="best-template animated"
                            data-animation="fadeInUpShorter"
                            data-animation-delay="1.5s"
                          >
                            Welcome to doncoins{' '}
                            <br className="d-none d-xl-block" />
                            world best platform{' '}
                            <br className="d-none d-xl-block" />
                            for your crypto investments
                          </h1>
                          <h3
                            className="d-block white animated"
                            data-animation="fadeInUpShorter"
                            data-animation-delay="1.6s"
                          >
                            First decentralized marketing platform that allows{' '}
                            <br className="d-none d-xl-block" />
                            merchants and affiliates.
                          </h3>
                          <div className="mt-5">
                            {isLoaded(authState) && !isEmpty(authState) ? (
                              <a
                                href="/user"
                                className="btn btn-lg btn-round btn-gradient-purple btn-glow mr-4 mb-2 animated"
                                data-animation="fadeInUpShorter"
                                data-animation-delay="1.7s"
                              >
                                Dashboard
                              </a>
                            ) : (
                              <>
                                <a
                                  href="/signup"
                                  className="btn btn-lg btn-round btn-gradient-purple btn-glow mr-4 mb-2 animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="1.7s"
                                >
                                  Register
                                </a>
                                <a
                                  href="/login"
                                  className="btn btn-round btn-lg btn-gradient-purple btn-glow mb-2 animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="1.8s"
                                >
                                  Login
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 move-first">
                        <div id="svg-animation">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 857 807"
                            width="857"
                            height="807"
                            preserveAspectRatio="xMidYMid meet"
                            style={{ width: '100%', height: '100%' }}
                          >
                            <g clipPath="url(#svg_animation_mask)">
                              {/* Step 1 */}

                              {/* base */}
                              <g
                                transform="matrix(1,0,0,1,-1.93,468.7)"
                                opacity="1"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="1s"
                                  width="558px"
                                  height="339px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/base.svg"
                                ></image>
                              </g>

                              {/* btc-base-shadow */}
                              <g
                                transform="matrix(1,0,0,1,60,580)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2s"
                                  width="130px"
                                  height="130px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-shadow.svg"
                                ></image>
                              </g>

                              {/* btc-base */}
                              <g
                                transform="matrix(1,0,0,1,60.8,560.9)"
                                opacity="1"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="1.9s"
                                  width="130px"
                                  height="130px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-btc.svg"
                                ></image>
                              </g>

                              {/* eth-base-shadow */}
                              <g
                                transform="matrix(1,0,0,1,215,580)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2s"
                                  width="90px"
                                  height="90px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-shadow.svg"
                                ></image>
                              </g>

                              {/* eth-base */}
                              <g
                                transform="matrix(1,0,0,1,215,545)"
                                opacity="1"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="1.5s"
                                  width="90px"
                                  height="130px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-eth.svg"
                                ></image>
                              </g>

                              {/* neo-base-shadow */}
                              <g
                                transform="matrix(1,0,0,1,238,670)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2s"
                                  width="120px"
                                  height="120px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-shadow.svg"
                                ></image>
                              </g>

                              {/* neo-base */}
                              <g
                                transform="matrix(1,0,0,1,240.8,660.9)"
                                opacity="1"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="1.7s"
                                  width="120px"
                                  height="120px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-neo.svg"
                                ></image>
                              </g>

                              {/* btc */}
                              <g transform="matrix(1,0,0,1,97,560)" opacity="1">
                                <image
                                  className="animated svg-elements-2"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2s"
                                  width="60px"
                                  height="60px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/btc.svg"
                                ></image>
                              </g>

                              {/* eth */}
                              <g
                                transform="matrix(1,0,0,1,230,550)"
                                opacity="1"
                              >
                                <image
                                  className="animated svg-elements-1"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="1.6s"
                                  width="60px"
                                  height="60px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/eth.svg"
                                ></image>
                              </g>

                              {/* neo */}
                              <g
                                transform="matrix(1,0,0,1,270 ,645)"
                                opacity="1"
                              >
                                <image
                                  className="animated svg-elements-1"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="1.8s"
                                  width="70px"
                                  height="70px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/neo.svg"
                                ></image>
                              </g>

                              {/* Step-2 */}

                              {/* base-shaodw */}
                              <g
                                transform="matrix(1,0,0,1,152.1,445.61)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="1.4s"
                                  width="406px"
                                  height="274px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/base-shadow.svg"
                                ></image>
                              </g>
                              {/* base */}
                              <g
                                transform="matrix(1,0,0,1,151.07,301.7)"
                                opacity="0.95"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="1.4s"
                                  width="558px"
                                  height="339px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/base.svg"
                                ></image>
                              </g>

                              {/* logo-circle-path */}
                              <g
                                transform="matrix(1,0,0,1,428.5,403.5)"
                                opacity="1"
                              >
                                <g
                                  opacity="1"
                                  transform="matrix(1.0196,0,0,0.9676,-49.875,71.125)"
                                >
                                  <path
                                    className="animated"
                                    data-animation="path"
                                    data-animation-delay="1.4s"
                                    strokeLinecap="round"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(99,125,221)"
                                    strokeOpacity="1"
                                    strokeWidth="4"
                                    d=" M57.584999084472656,53.77799987792969 C41.18600082397461,60.93600082397461 21.354000091552734,65.125 0,65.125 C-56.362789154052734,65.125 -102.125,35.94248580932617 -102.125,0 C-102.125,-35.94248580932617 -56.362789154052734,-65.125 0,-65.125 C0,-65.125 0,-65.125 0,-65.125 C56.362789154052734,-65.125 102.125,-35.94248580932617 102.125,0 C102.125,22.325000762939453 84.47000122070312,42.04199981689453 57.584999084472656,53.77799987792969"
                                  ></path>
                                </g>
                              </g>

                              {/* neo-path */}
                              <g
                                transform="matrix(1,0,0,1,345,595)"
                                opacity="1"
                              >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    className="animated"
                                    data-animation="path-reverse"
                                    data-animation-delay="1.4s"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeDashoffset="20"
                                    fill="none"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(99,125,221)"
                                    strokeOpacity="1"
                                    strokeWidth="3"
                                    d="M0.26,101.431l65-45  c0,0,5.4-1.4,5-25l1-10c0,0-1.2-5.6,6-8l50-30c0,0,7.4-3.6,1-7l-65-38"
                                  ></path>
                                </g>
                              </g>

                              {/* eth-path */}
                              <g
                                transform="matrix(1,0,0,1,290,545)"
                                opacity="1"
                              >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    className="animated"
                                    data-animation="path-reverse"
                                    data-animation-delay="1.4s"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(99,125,221)"
                                    strokeOpacity="1"
                                    strokeWidth="3"
                                    d="M0.239,42.447l11-6  c0,0,5-1.2,4-25v-9c0,0-2-5.8,6-9l16-8"
                                  ></path>
                                </g>
                              </g>

                              {/* btc-path */}
                              <g
                                transform="matrix(1,0,0,1,175,430)"
                                opacity="1"
                              >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    className="animated"
                                    data-animation="path"
                                    data-animation-delay="2.4s"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(99,125,221)"
                                    strokeOpacity="1"
                                    strokeWidth="3"
                                    d="M101.68,24.545l-25-15  c0,0-6.14-6-14-1l-28,17c0,0-6.4,5.16-5-30v-20c0,0,0.8-5.6-4-5l-35,25c0,0-5.2,1.6-4,18v90c0,0-1.6,9.8,6,11l40,25c0,0,7,2.6,2,7  l-35,20"
                                  ></path>
                                </g>
                              </g>
                              {/* logo-base */}
                              <g
                                transform="matrix(1,0,0,1,255,345)"
                                opacity="0.5"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="1.4s"
                                  width="250px"
                                  height="260px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/logo-base.svg"
                                ></image>
                              </g>

                              {/* logo-shaodw */}
                              <g
                                transform="matrix(0.1385,0,0,0.1175,275,385)"
                                opacity="0.65"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2.2s"
                                  width="1500px"
                                  height="1500px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/logo-shadow.svg"
                                ></image>
                              </g>
                              {/* logo */}
                              <g
                                transform="matrix(1,0,0,1,310,410)"
                                opacity="1"
                              >
                                <image
                                  className="animated cic-logo"
                                  data-animation="fadeInUpShortest"
                                  data-animation-delay="2.4s"
                                  width="130px"
                                  height="89px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/logo.svg"
                                ></image>
                              </g>

                              {/* Step 3 */}
                              {/* base-shaodw */}
                              <g
                                transform="matrix(1,0,0,1,305.1,277.61)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="1.8s"
                                  width="406px"
                                  height="274px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/base-shadow.svg"
                                ></image>
                              </g>

                              {/* base- */}
                              <g
                                transform="matrix(1,0,0,1,301.07,133.7)"
                                opacity="0.95"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="1.8s"
                                  width="558px"
                                  height="339px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/base.svg"
                                ></image>
                              </g>

                              {/* car-path */}
                              <g
                                transform="matrix(1,0,0,1,320.5,330.5)"
                                opacity="1"
                              >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    className="animated"
                                    data-animation="path"
                                    data-animation-delay="2.4s"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(99,125,221)"
                                    stroke0pacity="1"
                                    strokeWidth="3"
                                    d="M32.208,82.43l-35-20  c0,0-6.714-2.571,1-7l26-15c0,0,4.857-1.143,8-8v-35c0,0,0.857-5.81,3-6l70-45"
                                  ></path>
                                </g>
                              </g>

                              {/* car-base-shadow */}
                              <g
                                transform="matrix(1,0,0,1,415,235)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="3s"
                                  width="100px"
                                  height="100px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-shadow.svg"
                                ></image>
                              </g>
                              {/* car-base */}
                              <g
                                transform="matrix(1,0,0,1,408.62,240.74)"
                                opacity="1"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2.1s"
                                  width="109px"
                                  height="68px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-car.svg"
                                ></image>
                              </g>

                              {/* car */}
                              <g
                                transform="matrix(1,0,0,1,420.8799,200.27)"
                                opacity="1"
                              >
                                <image
                                  className="animated svg-elements-1"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2.2s"
                                  width="80px"
                                  height="80px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/car.svg"
                                ></image>
                              </g>

                              {/* mobile-path */}
                              <g
                                transform="matrix(1,0,0,1,475,410)"
                                opacity="1"
                              >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    className="animated"
                                    data-animation="path"
                                    data-animation-delay="2.4s"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(99,125,221)"
                                    strokeOpacity="1"
                                    strokeWidth="3"
                                    d="M0.261,90.447l50,30  c0,0,4.15,5.17,14,0l12-6c0,0,6-2,5-8v-50c0,0-0.5-9,9-12l80-45c0,0,5.75-3.5,0-7l-32-16"
                                  ></path>
                                </g>
                              </g>

                              {/* mobile-base-shadow */}
                              <g
                                transform="matrix(1,0,0,1,565,300)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="3s"
                                  width="120px"
                                  height="120px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-shadow.svg"
                                ></image>
                              </g>

                              {/* mobile-base */}
                              <g
                                transform="matrix(1,0,0,1,565,310)"
                                opacity="1"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2.3s"
                                  width="122px"
                                  height="78px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-mobile.svg"
                                ></image>
                              </g>

                              {/* mobile */}
                              <g
                                transform="matrix(1,0,0,1,600,280)"
                                opacity="1"
                              >
                                <image
                                  className="animated svg-elements-1"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2.4s"
                                  width="51px"
                                  height="78px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/mobile.svg"
                                ></image>
                              </g>

                              {/* home-path */}
                              <g
                                transform="matrix(1,0,0,1,495,260)"
                                opacity="1"
                              >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    className="animated"
                                    data-animation="path-reverse"
                                    data-animation-delay="1.4s"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(99,125,221)"
                                    strokeOpacity="1"
                                    strokeWidth="3"
                                    d="M102.684,0v20  c0.666,7.167-9,11-9,11l-130,75c-11.25,4.5-9,13-9,13v50"
                                  ></path>
                                </g>
                              </g>

                              {/* home-base-shadow */}
                              <g
                                transform="matrix(1,0,0,1,570,150)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="3s"
                                  width="200px"
                                  height="200px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-shadow.svg"
                                ></image>
                              </g>
                              {/* home-base */}
                              <g
                                transform="matrix(1,0,0,1,570.8,140.9)"
                                opacity="1"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2.4s"
                                  width="200px"
                                  height="150px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/icon-base-home.svg"
                                ></image>
                              </g>
                              {/* home */}
                              <g transform="matrix(1,0,0,1,600,90)" opacity="1">
                                <image
                                  className="animated svg-elements-2"
                                  data-animation="fadeInUpShorter"
                                  data-animation-delay="2.5s"
                                  width="140px"
                                  height="140px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/home.svg"
                                ></image>
                              </g>

                              {/* step-1-text */}
                              <g
                                transform="matrix(1,0,0,1,734,400)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="2s"
                                  width="120px"
                                  height="26px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/physical.svg"
                                ></image>
                              </g>
                              {/* step-2-text */}
                              <g
                                transform="matrix(1,0,0,1,602,569)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="1.6s"
                                  width="180px"
                                  height="24px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/cic-blockchain.svg"
                                ></image>
                              </g>
                              {/* step-3-text */}
                              <g
                                transform="matrix(1,0,0,1,432,745)"
                                opacity="0.8"
                              >
                                <image
                                  className="animated"
                                  data-animation="fadeInLeftShorter"
                                  data-animation-delay="1.2s"
                                  width="80px"
                                  height="24px"
                                  preserveAspectRatio="xMidYMid slice"
                                  href="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/svg/svg-animation/digital.svg"
                                ></image>
                              </g>
                            </g>
                            <defs>
                              <clipPath id="svg_animation_mask">
                                <rect
                                  width="857"
                                  height="807"
                                  x="0"
                                  y="0"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Header: 3D Animation */}
            {/* About */}
            <section className="about section-padding" id="about">
              <div className="container">
                <div className="heading text-center">
                  <div
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <h6 className="sub-title">About</h6>
                    <h2 className="title">What is Doncoins</h2>
                  </div>
                  <p
                    className="content-desc animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    Doncoins ICO aims to disrupt the cryptotrading industry by
                    lowering the barrier
                    <br className="d-none d-xl-block" />
                    to creating algorithmic trading models.
                  </p>
                </div>
                <div className="content-area">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <h4
                        className="title animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.5s"
                      >
                        We built a platform for{' '}
                        <br className="d-none d-xl-block" /> The crypto trading
                        Industry
                      </h4>
                      <h6
                        className="pt-4 pb-2 animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.6s"
                      >
                        Cryptocurrency exchanges or digital currency exchanges
                        (DCE) are businesses that allow customers to trade
                        cryptocurrencies or digital currencies for other assets.
                      </h6>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.7s"
                      >
                        Cryptocurrency exchanges or digital currency exchanges
                        (DCE) are businesses that allow customers to trade
                        cryptocurrencies or digital currencies for other assets
                      </p>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.8s"
                      >
                        Creators of digital currencies are often independent of
                        the DCEs that trade the currency.[6] In one type of
                        system, digital currency providers (DCP), are businesses
                        that keep and administer accounts.
                      </p>
                    </div>
                    <div
                      className="col-md-12 col-lg-6 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.7s"
                    >
                      <div className="position-relative what-is-crypto-img float-xl-right">
                        <img
                          className="img-fluid"
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/what-is-crypto.png"
                          alt="What is Crypto?"
                        />
                        <div className="play-video text-center">
                          <Link
                            to="#"
                            className="play rounded-circle btn-gradient-purple btn-glow video-btn"
                            data-toggle="modal"
                            data-src="https://www.youtube.com/embed/UXAJu3zS4bU"
                            data-target="#ico-modal"
                          >
                            <i className="fa fa-play"></i>
                          </Link>
                          <span className="mt-2 d-none d-md-block">
                            How it works
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ About */}
            {/* Problems & Solutions */}
            <section
              id="problem-solution"
              className="problem-solution section-pro section-padding "
            >
              <div className="container">
                <div className="heading text-center">
                  <div
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <h6 className="sub-title">Solutions</h6>
                    <h2 className="title">
                      Problems &amp; <strong>Solutions</strong>
                    </h2>
                  </div>
                  <p
                    className="content-desc animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    More than $40 million in assets were placed under restraint
                    pending forfeiture, and more than 30
                    <br className="d-none d-xl-block" />
                    Liberty Reserve exchanger domain names were seized.
                  </p>
                </div>
                <div className="problems">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="heading mb-4">
                        <h4
                          className="title animated"
                          data-animation="fadeInUpShorter"
                          data-animation-delay="0.2s"
                        >
                          Problems
                        </h4>
                      </div>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.4s"
                      >
                        Different pieces of the new Internet are born as
                        building blocks, but there’s no way for them to work
                        together.
                      </p>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.6s"
                      >
                        Even interoperating new technologies with old
                        centralised resources can prove useful in making the
                        paradigm shift from Web 2 to Web 3 happen. Now we own
                        our data, we can prove that we own what we have and have
                        created it on different platforms, but how do we put it
                        together into a whole new cohesive framework.
                      </p>
                    </div>
                    <div className="col-md-12 col-lg-6 text-center">
                      <img
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/problems-graphic.png"
                        className="problems-img animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.5s"
                        alt="problems-graphic"
                      />
                    </div>
                  </div>
                </div>
                <div className="solutions mt-5">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 text-center">
                      <img
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/solutions-graphic.png"
                        className="solutions-img animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.5s"
                        alt="problems-graphic"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 move-first">
                      <div className="heading mb-4">
                        <h4
                          className="title animated"
                          data-animation="fadeInUpShorter"
                          data-animation-delay="0.2s"
                        >
                          Solutions
                        </h4>
                      </div>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.5s"
                      >
                        Decentralized cryptocurrency is produced by the entire
                        cryptocurrency system collectively, at a rate which is
                        defined when the system is created and which is publicly
                        known.
                      </p>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.7s"
                      >
                        In centralized banking and economic systems such as the
                        Federal Reserve System, corporate boards or governments
                        control the supply of currency by printing units of fiat
                        money or demanding additions to digital banking ledgers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Problems & Solutions */}

            {/* Pre-Sale & Mobile Apps */}
            <section
              id="token-sale-mobile-app"
              className="token-sale-mobile-app section-padding "
            >
              {/* Tokens Sale */}
              <div className="token-sale">
                <div className="container">
                  <div className="heading text-center">
                    <h6 className="sub-title">Pre-Sale &amp; Values</h6>
                    <h2 className="title">Tokens Sale</h2>
                    <p
                      className="content-desc animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      The first token sale (also known as an ICO) was held by
                      Mastercoin in
                      <br className="d-none d-xl-block" />
                      July 2013. Ethereum raised money with a token sale in
                      2014.
                    </p>
                  </div>
                  <div className="row align-items-center">
                    <div
                      className="col-xl-5 col-lg-6 col-md-12 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <div className="token-sale-counter">
                        <h5>ICO will start in</h5>
                        <div className="token-details text-center">
                          {/* ICO Counter */}
                          <div className="clock-counter mb-4">
                            <div className="clock ml-0 mt-5 d-flex justify-content-center"></div>
                            <div className="message"></div>
                          </div>
                          {/* ICO Counter */}
                          {/* Progressbar */}
                          <div className="loading-bar mb-2 position-relative">
                            <div className="progres-area pb-5">
                              <ul className="progress-top">
                                <li></li>
                                <li className="pre-sale">Pre-Sale</li>
                                <li>Soft Cap</li>
                                <li className="bonus">Bonus</li>
                                <li></li>
                              </ul>
                              <ul className="progress-bars">
                                <li></li>
                                <li>|</li>
                                <li>|</li>
                                <li>|</li>
                                <li></li>
                              </ul>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-custom"
                                  role="progressbar"
                                  style={{ width: '65%' }}
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <div className="progress-bottom">
                                <div className="progress-info">
                                  65% target raised
                                </div>
                                <div className="progress-info">
                                  1 ETH = $1000 = 3177.38 CIC
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*/ Progressbar */}
                          <a
                            href="/pricing"
                            className="btn btn-lg btn-glow btn-gradient-blue"
                          >
                            Purchase Token
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-7 col-lg-6 col-md-12 mt-5 pl-4 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <div className="row">
                        <p>
                          We have successfully reached the soft cap! Join now
                          and get a higher discount.
                          <br />
                          Get your tokens for the best price: We fixed the Ether
                          price at $800.
                        </p>
                        <div className="col-md-5">
                          <ul className="token-sale-info">
                            <li>
                              Public PRE-ITS starts{' '}
                              <strong className="white">13 March</strong>
                            </li>
                            <li>
                              Public ITS ends{' '}
                              <strong className="white">25 May</strong>
                            </li>
                            <li>
                              Public ITS starts{' '}
                              <strong className="white">25 April</strong>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-7 pr-0">
                          <ul className="token-sale-info">
                            <li>
                              Acceptable currencies{' '}
                              <strong className="white">ETH, BTC, LTC</strong>
                            </li>
                            <li>
                              Minimal transaction amount{' '}
                              <strong className="white">
                                1 ETH, 1 BTC, 1 LTC
                              </strong>
                            </li>
                            <li>
                              Number of tokens for sale{' '}
                              <strong className="white">
                                890,000 CIC (8%)
                              </strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Tokens Sale */}
              {/* Crypto ico App */}
              <div id="mobile-app" className="mobile-app">
                <div className="container">
                  <div className="heading text-center">
                    <h6 className="sub-title">Crypto ico App</h6>
                    <h2 className="title">Mobile App</h2>
                    <p
                      className="content-desc animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      A cryptocurrency wallet stores the public and private keys
                      which can be used to receive or spend
                      <br />
                      the cryptocurrency. A wallet can contain multiple public
                      and private key pairs.
                    </p>
                  </div>
                  <div className="row">
                    <div
                      className="col-lg-6 col-md-12 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <div className="heading mb-4">
                        <h4 className="title">Android &amp; ios app</h4>
                      </div>
                      <p>
                        Mobile app development is a term used to denote the act
                        or process by which a mobile app is developed for mobile
                        devices, such as personal digital assistants, enterprise
                        digital assistants or mobile phones. These applications
                        can be pre-installed on phones during manufacturing
                        platforms, or delivered as web application using
                        server-side or client-side processing to provide an
                        "application-like" experience within a Web browser.
                      </p>
                      <ul className="app-features">
                        <li className="dark-bg-text-color">
                          <i className="ti-pulse white mr-3"></i>Live crypto
                          rate
                        </li>
                        <li className="dark-bg-text-color">
                          <i className="ti-stats-up white mr-3"></i>Latest
                          cryptocurrency news
                        </li>
                        <li className="dark-bg-text-color">
                          <i className="ti-split-h white mr-3"></i>
                          Cryptocurrency exchange
                        </li>
                      </ul>
                      <Link
                        to="/"
                        className="android mobile-button btn btn-gradient-purple btn-glow mr-4"
                      >
                        <span>Android</span>{' '}
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/icon-android.png"
                          alt="android"
                        />
                      </Link>
                      <Link
                        to="/"
                        className="apple mobile-button btn btn-gradient-purple btn-glow"
                      >
                        <span>Apple</span>{' '}
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/icon-apple.png"
                          alt="apple"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-6 col-md-12 move-first">
                      <div className="mobile-app-imgs">
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/mobile-app-1.png"
                          alt="mobile-app"
                          className="mobile-app-img-1 animated"
                          data-animation="fadeInUpShorter"
                          data-animation-delay="0.9s"
                        />
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/mobile-app-2.png"
                          alt="mobile-app"
                          className="mobile-app-img-2 animated"
                          data-animation="zoomIn"
                          data-animation-delay="1.4s"
                        />
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/mobile-app-3.png"
                          alt="mobile-app"
                          className="mobile-app-img-3 animated"
                          data-animation="zoomIn"
                          data-animation-delay="1.9s"
                        />
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/mobile-app-4.png"
                          alt="mobile-app"
                          className="mobile-app-img-4 animated"
                          data-animation="zoomIn"
                          data-animation-delay="2.4s"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Crypto ico App */}
            </section>
            {/*/ Pre-Sale & Mobile Apps */}
            {/* Roadmap */}
            <section id="roadmap" className="roadmap section-padding">
              <div className="container">
                <div className="heading text-center">
                  <div
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <h6 className="sub-title">Implementation</h6>
                    <h2 className="title">Roadmap</h2>
                  </div>
                  <p
                    className="content-desc animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    This is a list of cryptocurrencies. The number of
                    cryptocurrencies available over
                    <br className="d-none d-xl-block" />
                    the internet as of 7 January 2018 is over 1384 and growing.
                  </p>
                </div>
                <div
                  className="row animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  <div className="col-12">
                    <div className="roadmap-container">
                      <div className="swiper-container">
                        <div className="swiper-wrapper timeline">
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp completed">
                                <span className="date">November 2017</span>
                              </div>
                              <div className="status completed">
                                <span>
                                  Crypto Ico <br />
                                  Platform idea
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp completed">
                                <span className="date">January 2018</span>
                              </div>
                              <div className="status completed">
                                <span>
                                  Technical &amp; strategy <br />
                                  devlopment
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide active">
                            <div className="roadmap-info">
                              <div className="timestamp active">
                                <span className="date">May 2018</span>
                              </div>
                              <div className="status active">
                                <span>Ico Realease</span>
                                <span className="live">Live Now</span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp remaining">
                                <span className="date">August 2018</span>
                              </div>
                              <div className="status remaining">
                                <span>
                                  Beta version of <br />
                                  Crypto Ico{' '}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp remaining">
                                <span className="date">November 2018</span>
                              </div>
                              <div className="status remaining">
                                <span>
                                  Software development kit <br />
                                  for integrations
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="roadmap-info">
                              <div className="timestamp remaining">
                                <span className="date">December 2018</span>
                              </div>
                              <div className="status remaining">
                                <span>
                                  Mobile apps for <br />
                                  iOS &amp; Android
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-control">
                        <span className="prev-slide"></span>
                        <span className="next-slide"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Roadmap */}
            {/* Our Coin */}
            <section id="our-coin" className="our-coin section-padding ">
              <div className="container">
                <div className="heading text-center">
                  <div
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <h6 className="sub-title">About coin</h6>
                    <h2 className="title">Our COIN</h2>
                  </div>
                  <p
                    className="content-desc animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    Decentralized cryptocurrency is produced by the entire
                    cryptocurrency system collectively
                    <br className="d-none d-xl-block" />
                    at a rate which is defined when the system is created and
                    which is publicly known.{' '}
                  </p>
                </div>
                <div className="row">
                  <div
                    className="col-lg-5 col-md-12 animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.6s"
                  >
                    <div className="coin-img">
                      <img
                        className="img-fluid"
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/our-coin.png"
                        alt="Coin"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12">
                    <div className="heading mb-4">
                      <h4
                        className="title animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.5s"
                      >
                        Doncoins CIC
                      </h4>
                    </div>
                    <p
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      The validity of each cryptocurrency's coins is provided by
                      a blockchain. A blockchain is a continuously growing list
                      of records, called blocks, which are linked and secured
                      using cryptography.Each block typically contains a hash
                      pointer as a link to a previous block, a timestamp and
                      transaction data. By design, blockchains are inherently
                      resistant to modification of the data. a blockchain is
                      typically managed by a peer-to-peer network collectively
                      adhering to a protocol for validating new blocks. Once
                      recorded
                    </p>
                    <p
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.7s"
                    >
                      The block time is the average time it takes for the
                      network to generate one extra block in the blockchain.[21]
                      Some blockchains create a new block as frequently as every
                      five seconds.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Our Coin */}
            {/* Token Stats */}
            <section
              id="token-distribution"
              className="token-distribution section-padding"
            >
              <div className="container">
                <div className="heading text-center">
                  <div
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <h6 className="sub-title">Token Stats</h6>
                    <h2 className="title">Token Distribution</h2>
                  </div>
                  <p
                    className="content-desc animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    The Token usually takes place before before or after
                    registration, and helps fund the expenses
                    <br className="d-none d-xl-block" />
                    Make sure your infomation in correct for accurate funding.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-6 pr-5">
                    <div className="content-area">
                      <h4
                        className="title animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.5s"
                      >
                        Details
                      </h4>
                      <p
                        className="mt-1 animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.6s"
                      >
                        To calculate the number of tokens you’ll receive, you
                        can follow the following formula. Note that this applies
                        to public presale contributions only. If you
                        participated through a syndicate or private presale,
                      </p>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.7s"
                      >
                        To calculate the number of tokens you’ll receive, you
                        can follow the following formula. Note that this applies
                        to public presale contributions only. If you
                        participated through a syndicate or private presale,
                      </p>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.8s"
                      >
                        <span>Symbol:</span>{' '}
                        <strong className="grey-accent2">CIC</strong>
                      </p>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.9s"
                      >
                        <span>Initial Value:</span>{' '}
                        <strong className="grey-accent2">
                          1 ETH = 3177.38 Token
                        </strong>
                      </p>
                      <p
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="1.0s"
                      >
                        <span>Type:</span>{' '}
                        <strong className="grey-accent2">ERC20</strong>
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-12 col-lg-6 move-first animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.8s"
                  >
                    <div className="token-img">
                      <img
                        className="img-fluid"
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/chart.png"
                        alt="token-distribution"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Token Stats */}

            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12 offset-lg-2">
                    <div
                      className=" text-center animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      <h2 className=" py-4 title">Choose Your Plan</h2>
                    </div>
                  </div>
                </div>
                <div className="row small_space">
                  <div className="col-lg-4 col-md-4">
                    <div
                      className=" text-center card site-bg2 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      <div className="card-header btn-gradient-purple">
                        <h3>Basic</h3>
                        <div className="price_tage">
                          <h3>$3000.00</h3>
                          <span>Token price</span>
                        </div>
                      </div>
                      <div className=" text-center">
                        <ul className="text-center list-unstyled text-light ">
                          <li className="py-2  border">Normal Deposit</li>
                          <li className="py-2  mt-1 border">$200</li>
                          <li className="py-2  mt-1 border">
                            Initial Withdrawal
                          </li>
                          <li className="py-2  mt-1 border">$3900</li>
                          <li className="py-2  mt-1 border">Bonus</li>
                          <li className="py-2  mt-1 border">$50</li>
                        </ul>
                      </div>
                      <div className="py-4">
                        <a
                          href="/login"
                          className="btn btn-gradient-purple btn-round "
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div
                      className=" text-center card site-bg2 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      <div className=" card-header btn-gradient-purple">
                        <h3>Standard</h3>
                        <div className="price_tage">
                          <h3>$4000.00</h3>
                          <span>Token plan</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <ul className="text-center list-unstyled text-light">
                          <li className="py-2 border">Normal Deposit</li>
                          <li className="py-2 mt-1 border">$400</li>
                          <li className="py-2 mt-1 border">
                            Initial Withdrawal
                          </li>
                          <li className="py-2 mt-1 border">$5900</li>
                          <li className="py-2 mt-1 border">Bonus</li>
                          <li className="py-2  mt-1 border">$100</li>
                        </ul>
                      </div>
                      <div className="py-4">
                        <a
                          href="/login"
                          className="btn btn-gradient-purple btn-round "
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div
                      className="text-center card site-bg2 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      <div className=" card-header btn-gradient-purple">
                        <h3>Untimate</h3>
                        <div className="price_tage">
                          <h3>$5000.00</h3>
                          <span>Token Price</span>
                        </div>
                      </div>
                      <div className="text-center ">
                        <ul className="list-unstyled text-center list-unstyled text-light">
                          <li className="py-2 border">Normal Deposit</li>
                          <li className="py-2  mt-1 border">$1000</li>
                          <li className="py-2  mt-1 border">
                            Initial Withdrawal
                          </li>
                          <li className="py-2 mt-1 border">$7800</li>
                          <li className="py-2 mt-1 border">Bonus</li>
                          <li className="py-2 mt-1 border">$200</li>
                        </ul>
                      </div>
                      <div className="py-4">
                        <a
                          href="/login"
                          className="btn btn-gradient-purple btn-round "
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Team */}
            <section id="team" className="team section-padding ">
              <div className="container">
                <div className="heading text-center">
                  <div
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <h6 className="sub-title">Creative</h6>
                    <h2 className="title">Team</h2>
                  </div>
                  <p
                    className="content-desc animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    A cryptocurrency (or crypto currency) is a digital asset
                    designed to work as a medium
                    <br className="d-none d-xl-block" />
                    of exchange that uses cryptography to secure its
                    transactions.
                  </p>
                </div>
                <div className="row team-intro justify-content-center text-center">
                  <div
                    className="col-12 col-md-4 col-lg-2 team-width animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.5s"
                  >
                    <span>18</span>
                    <p>
                      Creative and
                      <br />
                      Dedicated People
                    </p>
                  </div>
                  <div
                    className="col-12 col-md-4 col-lg-2 team-width animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.6s"
                  >
                    <span>125</span>
                    <p>Years of combined experience</p>
                  </div>
                  <div
                    className="col-12 col-md-4 col-lg-2 team-width animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.7s"
                  >
                    <span>10</span>
                    <p>Years of blockchain experience</p>
                  </div>
                </div>
                <div className="team-profile mt-5">
                  <div className="row mb-5">
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="flipInX"
                      data-animation-delay="0.8s"
                    >
                      <div className="d-flex team-member">
                        <div
                          className="team-img float-left mr-3"
                          data-toggle="modal"
                          data-target="#teamUser9"
                        >
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-9.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Logan S. Perez</div>
                          <div className="role">Machine Learning Engineer</div>
                          <div className="social-profile mt-3">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="flipInX"
                      data-animation-delay="0.9s"
                    >
                      <div className="d-flex team-member">
                        <div
                          className="team-img float-left mr-3"
                          data-toggle="modal"
                          data-target="#teamUser6"
                        >
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-6.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Susan J. Newsom</div>
                          <div className="role">Graphic Designer</div>
                          <div className="social-profile mt-3">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="flipInX"
                      data-animation-delay="1.0s"
                    >
                      <div className="d-flex team-member">
                        <div
                          className="team-img float-left mr-3"
                          data-toggle="modal"
                          data-target="#teamUser2"
                        >
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-2.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Mary J. Wardle</div>
                          <div className="role">Marketing Manager</div>
                          <div className="social-profile mt-3">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="flipInX"
                      data-animation-delay="1.1s"
                      data-toggle="modal"
                      data-target="#teamUser10"
                    >
                      <div className="d-flex team-member">
                        <div className="team-img float-left mr-3">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-10.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Nicholas M. Sharpe</div>
                          <div className="role">UI / UX Designer</div>
                          <div className="social-profile mt-3">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="flipInX"
                      data-animation-delay="1.2s"
                      data-toggle="modal"
                      data-target="#teamUser4"
                    >
                      <div className="d-flex team-member">
                        <div className="team-img float-left mr-3">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-4.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Cecelia T. Carter</div>
                          <div className="role">Accountant</div>
                          <div className="social-profile mt-3">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="flipInX"
                      data-animation-delay="1.3s"
                      data-toggle="modal"
                      data-target="#teamUser13"
                    >
                      <div className="d-flex team-member">
                        <div className="team-img float-left mr-3">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-13.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Terry T. Robinette</div>
                          <div className="role">Developer</div>
                          <div className="social-profile mt-3">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Team */}
            {/* Advisors */}
            <section id="advisor" className="advisor team section-padding">
              <div className="container">
                <div className="heading text-center">
                  <div
                    className="animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <h6 className="sub-title">helpful</h6>
                    <h2 className="title">Advisors</h2>
                  </div>
                  <p
                    className="content-desc animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    Digital currency is a money balance recorded electronically
                    on
                    <br className="d-none d-xl-block" />a stored-value card or
                    other device. Another form of electronic money is network
                    money.
                  </p>
                </div>
                <div className="team-profile mt-5">
                  <div className="row mb-5">
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="jello"
                      data-animation-delay="0.5s"
                    >
                      <div className="d-flex">
                        <div
                          className="team-img float-left mr-3"
                          data-toggle="modal"
                          data-target="#teamUser1"
                        >
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-1.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="team-icon">
                          <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Nadia Sidko</div>
                          <div className="role">Blockchain Entrepreneur</div>
                          <div className="crypto-profile">
                            <img
                              src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-1.png"
                              alt="Team User"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="jello"
                      data-animation-delay="0.6s"
                    >
                      <div className="d-flex">
                        <div
                          className="team-img float-left mr-3"
                          data-toggle="modal"
                          data-target="#teamUser8"
                        >
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-8.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="team-icon">
                          <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Pavel Volek</div>
                          <div className="role">Entrepreneur and Investor</div>
                          <div className="crypto-profile">
                            <img
                              src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-2.png"
                              alt="Team User"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="jello"
                      data-animation-delay="0.7s"
                      data-toggle="modal"
                      data-target="#teamUser3"
                    >
                      <div className="d-flex">
                        <div className="team-img float-left mr-3">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-3.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="team-icon">
                          <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Alyona Blakytna</div>
                          <div className="role">Fin-Tech Entrepreneur</div>
                          <div className="crypto-profile">
                            <img
                              src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-3.png"
                              alt="Team User"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="jello"
                      data-animation-delay="0.8s"
                      data-toggle="modal"
                      data-target="#teamUser11"
                    >
                      <div className="d-flex">
                        <div className="team-img float-left mr-3">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-11.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="team-icon">
                          <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Martin Solarik</div>
                          <div className="role">Fin-Tech Investor</div>
                          <div className="crypto-profile">
                            <img
                              src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-4.png"
                              alt="Team User"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="jello"
                      data-animation-delay="0.9s"
                      data-toggle="modal"
                      data-target="#teamUser7"
                    >
                      <div className="d-flex">
                        <div className="team-img float-left mr-3">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-7.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="team-icon">
                          <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Kate Fisenko</div>
                          <div className="role">Fin-Tech Investor</div>
                          <div className="crypto-profile">
                            <img
                              src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-5.png"
                              alt="Team User"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                      data-animation="jello"
                      data-animation-delay="1.0s"
                      data-toggle="modal"
                      data-target="#teamUser12"
                    >
                      <div className="d-flex">
                        <div className="team-img float-left mr-3">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-12.png"
                            alt="team-profile-1"
                            className="rounded-circle"
                            width="128"
                          />
                        </div>
                        <div className="team-icon">
                          <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="profile align-self-center">
                          <div className="name">Michal Krajnansky</div>
                          <div className="role">Blockchain Entrepreneur</div>
                          <div className="crypto-profile">
                            <img
                              src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-1.png"
                              alt="Team User"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Advisors */}
            {/* FAQ */}
            <AskedQuestions />
            {/*/ FAQ */}
            {/* Contact */}
            <section id="contact" className="contact section-padding">
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
                        data-animation-delay="0.7s"
                      >
                        <i className="fa fa-map-marker"></i>
                        <span className="ml-1">
                          825 Afred Drive Bayside, NY 11361 United States
                        </span>
                      </li>
                    </ul>
                    <form
                      onSubmit={handleSubmit}
                      className="animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.1s"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name*"
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  name: e.target.value,
                                })
                              }
                              value={userData.name}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email*"
                              required
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  email: e.target.value,
                                })
                              }
                              value={userData.email}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Subject*"
                              required
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  subject: e.target.value,
                                })
                              }
                              value={userData.subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Phone*"
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  phone: e.target.value,
                                })
                              }
                              value={userData.phone}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Massage*"
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  message: e.target.value,
                                })
                              }
                              value={userData.message}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-gradient-purple btn-glow animated"
                            data-animation="fadeInUpShorter"
                            data-animation-delay="1.1s"
                            disabled={userData.diasbleBtn}
                          >
                            {userData.loading && (
                              <CircularProgress
                                variant="indeterminate"
                                color="primary"
                                size={20}
                                style={{ marginRight: '5px' }}
                              />
                            )}
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/*/ Contact */}
            {/* Exchange Listing Area */}
            <section className="exchange-listing" id="exchange-listing">
              <div className="container-fluid bg-color">
                <div className="container">
                  <div className="row listing list-unstyled">
                    <div
                      className="col d-none d-lg-block text-center animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      <img
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/icon-arrow.png"
                        alt="icon-arrow"
                      />
                      <p className="mt-1">
                        Exchange listing
                        <br />
                        to be announced
                      </p>
                    </div>
                    <div
                      className="col text-center animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.3s"
                    >
                      <h2>4.3/5</h2>
                      <img
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/ico-track.png"
                        alt="ico-track"
                      />
                    </div>
                    <div
                      className="col text-center animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      <h2>4.8/5</h2>
                      <img
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/ico-bench.png"
                        alt="ico-bench"
                      />
                    </div>
                    <div
                      className="col text-center animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.5s"
                    >
                      <h2>3.9/5</h2>
                      <img
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/ico-ranker.png"
                        alt="ico-ranker"
                      />
                    </div>
                    <div
                      className="col text-center animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.6s"
                    >
                      <h2>4.1/5</h2>
                      <img
                        src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/ico-bazaar.png"
                        alt="ico-bazaar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Exchange Listing Area */}
            <div>
              <div
                className="modal ico-modal fade"
                id="ico-modal"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-lg modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body p-0">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          className="embed-responsive-item"
                          id="video"
                          title="video"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal team-modal fade"
                id="teamUser9"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="teamUser9Title"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-lg modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                      <div className="row p-4">
                        <div className="col-12 col-md-5">
                          <img
                            className="img-fluid rounded"
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-9-lg.jpg"
                            alt="Logan S. Perez"
                          />
                        </div>
                        <div className="col-12 col-md-7 mt-sm-3">
                          <h5 id="teamUser9Title">Logan S. Perez</h5>
                          <small className="text-muted mb-0 ">
                            Machine Learning Engineer
                          </small>
                          <div className="social-profile">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                          <div className="my-4">
                            <p>
                              Experienced algorithmic machine learning engineer
                            </p>
                            <p>
                              An active and creative engineer with 18 years of
                              experience in machine learning. He creates secure,
                              user-friendly experiences for clients through
                              digital applications.
                            </p>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">SQL</small>{' '}
                            <small className="float-right">80%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '85%' }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">Python</small>{' '}
                            <small className="float-right">90%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '90%' }}
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">NLP</small>{' '}
                            <small className="float-right">85%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '75%' }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team user popup - teamUser6 */}
            <div
              className="modal team-modal fade"
              id="teamUser6"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="teamUser6Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div className="row p-4">
                      <div className="col-12 col-md-5">
                        <img
                          className="img-fluid rounded"
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-6-lg.jpg"
                          alt="Susan J. Newsom"
                        />
                      </div>
                      <div className="col-12 col-md-7 mt-sm-3">
                        <h5 id="teamUser6Title">Susan J. Newsom</h5>
                        <small className="text-muted mb-0 ">
                          Graphic Designer
                        </small>
                        <div className="social-profile">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                        <div className="my-4">
                          <p>Experienced graphic designer.</p>
                          <p>
                            A stable, experienced graphic designer for the last
                            12 years.She creates the graphics for published,
                            printed or electronic media for advertising. She
                            makes sure accessible and memorable information is
                            made available to our clients.
                          </p>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">InDesign</small>{' '}
                          <small className="float-right">85%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '85%' }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Photoshop</small>{' '}
                          <small className="float-right">90%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Illustrator</small>{' '}
                          <small className="float-right">85%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '75%' }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team user popup - teamUser2 */}
            <div
              className="modal team-modal fade"
              id="teamUser2"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="teamUser2Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div className="row p-4">
                      <div className="col-12 col-md-5">
                        <img
                          className="img-fluid rounded"
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-2-lg.jpg"
                          alt="Mary J. Wardle"
                        />
                      </div>
                      <div className="col-12 col-md-7 mt-sm-3">
                        <h5 id="teamUser2Title">Mary J. Wardle</h5>
                        <small className="text-muted mb-0 ">
                          Marketing manager
                        </small>
                        <div className="social-profile">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                        <div className="my-4">
                          <p>Experienced crypto Maketing manager</p>
                          <p>
                            An experienced marketing manager for the last 10
                            years. She estimates the demand for cryptocurrencies
                            and blockchainand compare values. Monitoring trends
                            and creating strategies to make our clients maximize
                            there profit.
                          </p>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Blockchain</small>{' '}
                          <small className="float-right">75%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '85%' }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Marketing</small>{' '}
                          <small className="float-right">90%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Business</small>{' '}
                          <small className="float-right">75%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '75%' }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team user popup - teamUser10 */}
            <div
              className="modal team-modal fade"
              id="teamUser10"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="teamUser10Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div className="row p-4">
                      <div className="col-12 col-md-5">
                        <img
                          className="img-fluid rounded"
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-10-lg.jpg"
                          alt="Nicholas M. Sharpe"
                        />
                      </div>
                      <div className="col-12 col-md-7 mt-sm-3">
                        <h5 id="teamUser10Title">Nicholas M. Sharpe</h5>
                        <small className="text-muted mb-0 ">
                          UI / UX Designer
                        </small>
                        <div className="social-profile">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                        <div className="my-4">
                          <p>Experienced crypto trader and a Ui Designer.</p>
                          <p>
                            Nicholas an experienced Ui and Ux designer for more
                            than 15year. He has used his skills to make a stable
                            and beatiful designs in our company. He is fast and
                            reliable in reaching to our clients in UI related
                            issues.
                          </p>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Blockchain</small>{' '}
                          <small className="float-right">85%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '85%' }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Photoshop</small>{' '}
                          <small className="float-right">90%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">
                            Microsoft office
                          </small>{' '}
                          <small className="float-right">75%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '75%' }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team user popup - teamUser4 */}
            <div
              className="modal team-modal fade"
              id="teamUser4"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="teamUser4Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div className="row p-4">
                      <div className="col-12 col-md-5">
                        <img
                          className="img-fluid rounded"
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-4-lg.jpg"
                          alt="Cecelia T. Carter"
                        />
                      </div>
                      <div className="col-12 col-md-7 mt-sm-3">
                        <h5 id="teamUser4Title">Cecelia T. Carter</h5>
                        <small className="text-muted mb-0 ">Accountant</small>
                        <div className="social-profile">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                        <div className="my-4">
                          <p>
                            Experienced algorithmic crypto trader and an
                            accountant.
                          </p>
                          <p>
                            Cecelia an enthuaistic,passionate and hard working
                            young man with a 10years experience in in financial
                            company. He has used his skilled to create stable
                            crypto routes and stable means crypto trading in
                            cryptogold platform
                          </p>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Blockchain</small>{' '}
                          <small className="float-right">85%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '85%' }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Accounting</small>{' '}
                          <small className="float-right">90%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">
                            Data analysis
                          </small>{' '}
                          <small className="float-right">75%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: ' 75%' }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team user popup - teamUser13 */}
            <div
              className="modal team-modal fade"
              id="teamUser13"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="teamUser13Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div className="row p-4">
                      <div className="col-12 col-md-5">
                        <img
                          className="img-fluid rounded"
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-13-lg.jpg"
                          alt="Terry T. Robinette"
                        />
                      </div>
                      <div className="col-12 col-md-7 mt-sm-3">
                        <h5 id="teamUser13Title">Terry T. Robinette</h5>
                        <small className="text-muted mb-0 ">Developer</small>
                        <div className="social-profile">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                        <div className="my-4">
                          <p>
                            Experienced algorithmic crypto trader and a
                            daveloper.
                          </p>
                          <p>
                            An Experienced and skilled developer with 10 years
                            experience in python and c++ programming languages,
                            using his developing skills to make out the best for
                            our team.
                          </p>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Blockchain</small>{' '}
                          <small className="float-right">85%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '85%' }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Python</small>{' '}
                          <small className="float-right">90%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">C++</small>{' '}
                          <small className="float-right">75%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '75%' }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Advisors Team Modal Pop-ups */}
            {/* Team user popup - teamUser1 */}
            <div
              className="modal team-modal fade"
              id="teamUser1"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="teamUser1Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div className="row p-4">
                      <div className="col-12 col-md-5">
                        <img
                          className="img-fluid rounded"
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-1-lg.jpg"
                          alt="Nadia Sidko"
                        />
                      </div>
                      <div className="col-12 col-md-7 mt-sm-3">
                        <h5 id="teamUser1Title">Nadia Sidko</h5>
                        <small className="text-muted mb-0 ">
                          Blockchain Entrepreneur
                        </small>
                        <div className="social-profile">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                        <div className="my-4">
                          <p>
                            Experienced algorithmic crypto trader and a
                            blockchain entrepreneur.
                          </p>
                          <p>
                            I’m focusing on the logic behind the combination of
                            blockchain analysis. An investor, contributor and
                            adviser to this great crypto investment platform
                            doncoins.
                          </p>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Blockchain</small>{' '}
                          <small className="float-right">85%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '85%' }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">
                            Contributions
                          </small>{' '}
                          <small className="float-right">90%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Investments</small>{' '}
                          <small className="float-right">75%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '75%' }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team user popup - teamUser8 */}
            <div
              className="modal team-modal fade"
              id="teamUser8"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="teamUser8Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div className="row p-4">
                      <div className="col-12 col-md-5">
                        <img
                          className="img-fluid rounded"
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-8-lg.jpg"
                          alt="Pavel Volek"
                        />
                      </div>
                      <div className="col-12 col-md-7 mt-sm-3">
                        <h5 id="teamUser8Title">Pavel Volek</h5>
                        <small className="text-muted mb-0 ">
                          Entrepreneur and Investor
                        </small>
                        <div className="social-profile">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                        <div className="my-4">
                          <p>
                            Experienced algorithmic crypto trader and a stable
                            entrepreneur.
                          </p>
                          <p>
                            The ceo and owner of min-now ltd a golds mining
                            company. A real time entrepreneur and a real time
                            investor in cryptography. He is an adviser,
                            contributor and an investor, investing both time and
                            money to make doincoins best crypto trading
                            platform.
                          </p>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Blockchain</small>{' '}
                          <small className="float-right">85%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '85%' }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">
                            Contributions
                          </small>{' '}
                          <small className="float-right">90%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <h6 className="mb-0">
                          <small className="text-uppercase">Investments</small>{' '}
                          <small className="float-right">75%</small>
                        </h6>
                        <div className="progress box-shadow-1 mb-4">
                          <div
                            className="progress-bar progress-orange"
                            role="progressbar"
                            style={{ width: '75%' }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Team user popup - teamUser3 */}
            <>
              <div
                className="modal team-modal fade"
                id="teamUser3"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="teamUser3Title"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-lg modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                      <div className="row p-4">
                        <div className="col-12 col-md-5">
                          <img
                            className="img-fluid rounded"
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-3-lg.jpg"
                            alt="Alyona Blakytna"
                          />
                        </div>
                        <div className="col-12 col-md-7 mt-sm-3">
                          <h5 id="teamUser3Title">Alyona Blakytna</h5>
                          <small className="text-muted mb-0 ">
                            Fin-Tech Entrepreneur
                          </small>
                          <div className="social-profile">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                          <div className="my-4">
                            <p>
                              Experienced algorithmic crypto trader and a
                              Fin-tec entrepreneur.
                            </p>
                            <p>
                              The ceo and owner of Alico gas ltd, experienced
                              crypto investor and a real time crypto evangelist.
                              An investor, contributor, adviser that invest both
                              time and money for the growth and standard ofour
                              company Doincoins.
                            </p>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">Blockchain</small>{' '}
                            <small className="float-right">85%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '85%' }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">
                              Contributions
                            </small>{' '}
                            <small className="float-right">90%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '90%' }}
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">
                              Investments
                            </small>{' '}
                            <small className="float-right">75%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '75%' }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal team-modal fade"
                id="teamUser11"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="teamUser11Title"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-lg modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                      <div className="row p-4">
                        <div className="col-12 col-md-5">
                          <img
                            className="img-fluid rounded"
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-11-lg.jpg"
                            alt="Martin Solarik"
                          />
                        </div>
                        <div className="col-12 col-md-7 mt-sm-3">
                          <h5 id="teamUser11Title">Martin Solarik</h5>
                          <small className="text-muted mb-0 ">
                            Fin-Tech Investor
                          </small>
                          <div className="social-profile">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                          <div className="my-4">
                            <p>
                              Experienced algorithmic crypto trader and a
                              fin-tec investor.
                            </p>
                            <p>
                              The best way to get maximum wealth is to work as a
                              team.Martin is a stable and a trusted adviser and
                              investor to our company. A devoted young man in
                              businesses. He has contributed both time and money
                              to make doincoins one top, stable crypto
                              investment company of the world.
                            </p>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">Blockchain</small>{' '}
                            <small className="float-right">85%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '85%' }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">
                              Contributions
                            </small>{' '}
                            <small className="float-right">90%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '90%' }}
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">
                              Investments
                            </small>{' '}
                            <small className="float-right">75%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '75%' }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal team-modal fade"
                id="teamUser7"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="teamUser7Title"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-lg modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                      <div className="row p-4">
                        <div className="col-12 col-md-5">
                          <img
                            className="img-fluid rounded"
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-7-lg.jpg"
                            alt="Kate Fisenko"
                          />
                        </div>
                        <div className="col-12 col-md-7 mt-sm-3">
                          <h5 id="teamUser7Title">Kate Fisenko</h5>
                          <small className="text-muted mb-0 ">
                            Fin-Tech Investor
                          </small>
                          <div className="social-profile">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                          <div className="my-4">
                            <p>
                              Experienced algorithmic crypto trader and a
                              fin-tec investor.
                            </p>
                            <p>
                              The owner of the leading tec company in US. An
                              adviser, investor, a trader and a real time
                              entrepreneur. She has contributed time, energy and
                              money for the growth and stability of Doncoins.
                            </p>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">Blockchain</small>{' '}
                            <small className="float-right">85%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '85%' }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">Cryto Tec</small>{' '}
                            <small className="float-right">90%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '90%' }}
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">
                              Investments
                            </small>{' '}
                            <small className="float-right">75%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '75%' }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal team-modal fade"
                id="teamUser12"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="teamUser12Title"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-lg modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                      <div className="row p-4">
                        <div className="col-12 col-md-5">
                          <img
                            className="img-fluid rounded"
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-12-lg.jpg"
                            alt="Michal Krajnansky"
                          />
                        </div>
                        <div className="col-12 col-md-7 mt-sm-3">
                          <h5 id="teamUser12Title">Michal Krajnansky</h5>
                          <small className="text-muted mb-0 ">
                            Blockchain Entrepreneur
                          </small>
                          <div className="social-profile">
                            <Link
                              to="/"
                              title="Linkedin"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Twitter"
                              className="font-medium grey-accent2 mr-2"
                            >
                              <i className="fa fa-twitter-alt"></i>
                            </Link>
                            <Link
                              to="/"
                              title="Github"
                              className="font-medium grey-accent2"
                            >
                              <i className="fa fa-github"></i>
                            </Link>
                          </div>
                          <div className="my-4">
                            <p>
                              Experienced algorithmic crypto trader and a
                              standard blockchain entrepreneur.
                            </p>
                            <p>
                              I’m focusing on the logic behind the stability of
                              blockchain analysis, a standard and able
                              blockchain entrepreneur, an investor and an
                              adviser.He is a real time entrepreneur
                              contribution time and energy for the stability and
                              growth of this company.
                            </p>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">Blockchain</small>{' '}
                            <small className="float-right">85%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '85%' }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">Python</small>{' '}
                            <small className="float-right">90%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '90%' }}
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <h6 className="mb-0">
                            <small className="text-uppercase">C++</small>{' '}
                            <small className="float-right">75%</small>
                          </h6>
                          <div className="progress box-shadow-1 mb-4">
                            <div
                              className="progress-bar progress-orange"
                              role="progressbar"
                              style={{ width: '75%' }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
