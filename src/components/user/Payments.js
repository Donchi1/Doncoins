import { makeStyles, Snackbar } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

import Loading from './Loading'

import { paymentAction } from '../Auths/Action'
import UserNav1 from './UserNav1'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
}))

function Payments() {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const classes = useStyles()
  const transSuccess = useSelector(
    (state) => state.projectReducer.paymentSuccess,
  )
  const profileInfo = useSelector((state) => state.firebase.profile)
  console.log(profileInfo)
  const paymentInfo = useSelector((state) => state.projectReducer)
  const [openLoader, setOpenLoader] = useState(false)
  const [openPay, setOpenPay] = useState({
    btc: false,
    etheruim: false,
    litecoin: false,
    bank: false,
  })

  const checkData = () => setopenError(true)
  const [openError, setopenError] = useState(false)

  const [newAmount, setNewAmount] = useState(1)
  const [newAmount1, setNewAmount1] = useState(1)
  const [paymentAmount, setPaymentAmount] = useState('')
  const [paymentAmount1, setPaymentAmount1] = useState('')

  const handleLoad = () => setOpenLoader(false)

  const fetchForBtc = () => {
    axios
      .get(
        `https://blockchain.info/tobtc?currency=USD&value=${paymentInfo.paymentAmountData}`,
      )
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => {})
  }
  const fetchForEthe = () => {
    axios
      .get(
        `https://blockchain.info/toeth?currency=USD&value=${paymentInfo.paymentAmountData1}`,
      )
      .then((res) => {
        setNewAmount1(res.data)
      })
      .catch((err) => {})
  }

  useEffect(() => {
    fetchForEthe()
    fetchForBtc()
  }, [paymentInfo.paymentAmountData1, paymentInfo.paymentAmountData])

  const [userProve, setUserProve] = useState('')

  const handleAmountPay = (e) => {
    e.preventDefault()
    dispatch({
      type: 'PAYMENT_SET',
      amount: paymentAmount,
      qrcode: true,
      qrcode1: false,
    })

    setPaymentAmount('')
  }
  const handleAmountPay1 = (e) => {
    e.preventDefault()
    dispatch({
      type: 'PAYMENT_SET',
      amount1: paymentAmount1,
      qrcode1: true,
      qrcode: false,
    })

    setPaymentAmount('')
  }

  const handleProve = (e) => {
    e.preventDefault()
    if (userProve === '') {
      return
    }
    setOpenPay({
      ...openPay,
      etheruim: false,
      btc: false,
      bank: false,
      litecoin: false,
    })
    setOpenLoader(true)

    paymentAction(
      paymentInfo.paymentAmountData,
      profileInfo,
      userProve,
      firebase,
      dispatch,
      checkData,
      handleLoad,
    )
  }

  return (
    <div>
      {openLoader ? (
        <Loading />
      ) : (
        <>
          <UserNav1 />
          <section className="1-column undefined  page-animated svg-wrapper flex-align-center">
            <section className="container pt-5 ">
              <div>
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="page-banner text-center">
                      <h2
                        className=" animated banner-content pt-5  text-uppercase text-bold title"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.2s"
                      >
                        Payments
                      </h2>
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

              <Snackbar
                open={openError}
                onClose={() => setopenError(false)}
                message={transSuccess}
                autoHideDuration={9000}
                ContentProps={{ className: classes.content }}
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
              />
              <div className=" height-100vh ">
                <div>
                  <div>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5 pt-2 ">
                          <div className="card mb-3 to-action-bg">
                            <div className="text-center">
                              <h4 className="animated btn-gradient-purple py-1 nav-color">
                                Choose your investment method
                              </h4>
                            </div>
                            <div className="card-body p-4">
                              <div className="field_form authorize_form">
                                <div>
                                  <div className="form-group col-md-12 text-center animated">
                                    <button
                                      className="btn  btn-round w-100 btn-gradient-purple"
                                      onClick={() =>
                                        setOpenPay({
                                          ...openPay,
                                          btc: !openPay.btc,
                                          bank: false,
                                          etheruim: false,
                                          litecoin: false,
                                        })
                                      }
                                    >
                                      Bitcoin
                                    </button>
                                  </div>
                                  {openPay.btc && (
                                    <div className="text-center">
                                      <div className="text-light ">
                                        {' '}
                                        <p>
                                          You want to invest $
                                          {paymentInfo.paymentAmountData} to our
                                          platform
                                        </p>
                                        <p>
                                          Bitcoin : {newAmount && newAmount}
                                        </p>
                                      </div>
                                      <form onSubmit={handleAmountPay}>
                                        <div className="form-group col-md-12 animated">
                                          <input
                                            type="number"
                                            className="form-control text-light"
                                            placeholder="Amount"
                                            required
                                            label="Input Amount"
                                            value={paymentAmount}
                                            onChange={(e) => {
                                              setPaymentAmount(e.target.value)
                                            }}
                                          />
                                        </div>
                                        <div className="form-group col-md-12 text-center animated ">
                                          <button
                                            type="submit"
                                            className="btn w-50 btn-round btn-gradient-purple mb-2"
                                          >
                                            submit
                                          </button>
                                        </div>
                                      </form>
                                      {paymentInfo.qrCode && (
                                        <>
                                          <h4 className="text-light">
                                            Make payment with the above btc
                                            wallet and upload Prove
                                          </h4>
                                          <div>
                                            <img
                                              src={require('../../assets/qrcode1.png')}
                                              width="300px"
                                              alt="Code"
                                            />
                                            <p className="text-light">
                                              36nxqxLUnYQZ8cNTKVbQFND2Bpi3bHopE3
                                            </p>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  )}
                                  <div
                                    className="form-group col-md-12 text-center animated btn-radius"
                                    data-animation="fadeInUp"
                                    data-animation-delay="0.7s"
                                  >
                                    <button
                                      className="btn btn-round btn-gradient-purple w-100"
                                      onClick={() =>
                                        setOpenPay({
                                          ...openPay,
                                          etheruim: !openPay.etheruim,
                                          bank: false,
                                          litecoin: false,
                                          btc: false,
                                        })
                                      }
                                    >
                                      Etherium
                                    </button>
                                    {openPay.etheruim && (
                                      <div className="pt-2 text-center">
                                        <div className="text-light ">
                                          {' '}
                                          <p>
                                            You want to invest $
                                            {paymentInfo.paymentAmountData1} to
                                            our platform
                                          </p>
                                          <p>
                                            Etheruim :{' '}
                                            {newAmount1 && newAmount1}
                                          </p>
                                        </div>
                                        <form onSubmit={handleAmountPay1}>
                                          <div className="form-group col-md-12 animated">
                                            <input
                                              type="number"
                                              className="form-control text-light"
                                              placeholder="Amount"
                                              required
                                              label="Input Amount"
                                              value={paymentAmount1}
                                              onChange={(e) => {
                                                setPaymentAmount1(
                                                  e.target.value,
                                                )
                                              }}
                                            />
                                          </div>
                                          <div className="form-group col-md-12 text-center animated ">
                                            <button
                                              type="submit"
                                              className="btn w-50 btn-round btn-gradient-purple mb-2"
                                            >
                                              submit
                                            </button>
                                          </div>
                                        </form>
                                        {paymentInfo.qrCode1 && (
                                          <>
                                            <h4 className="text-light">
                                              Make payment with the above btc
                                              wallet and upload Prove
                                            </h4>
                                            <div>
                                              <img
                                                src={require('../../assets/qrcode.jpg')}
                                                width="300px"
                                                alt="Code"
                                              />
                                              <p className="text-light">
                                                0xF33b927debC41FEa97085825719CEA3129EbCe7B
                                              </p>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    )}
                                  </div>

                                  <div
                                    className="form-group col-md-12 text-center animated "
                                    data-animation="fadeInUp"
                                    data-animation-delay="0.8s"
                                  >
                                    <button
                                      className="btn btn-round btn-gradient-purple w-100"
                                      onClick={() =>
                                        setOpenPay({
                                          ...openPay,
                                          litecoin: !openPay.litecoin,
                                          bank: false,
                                          etheruim: false,
                                          btc: false,
                                        })
                                      }
                                    >
                                      Litecoin
                                    </button>

                                    {openPay.litecoin && (
                                      <div className="pt-2">
                                        <h4 className="text-warning">
                                          Unavailable at the moment
                                        </h4>
                                      </div>
                                    )}
                                  </div>
                                  <div
                                    className="form-group col-md-12 text-center animated  "
                                    data-animation="fadeInUp"
                                    data-animation-delay="0.8s"
                                  >
                                    <button
                                      className="btn btn-gradient-purple btn-round w-100"
                                      onClick={() =>
                                        setOpenPay({
                                          ...openPay,
                                          bank: !openPay.bank,
                                          litecoin: false,
                                          etheruim: false,
                                          btc: false,
                                        })
                                      }
                                    >
                                      Bank Deposit
                                    </button>
                                    {openPay.bank && (
                                      <div className="pt-2">
                                        <h4 className="text-warning">
                                          Unavailable at the moment
                                        </h4>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="divider small_divider"></div>
                                <form onSubmit={handleProve}>
                                  <div
                                    className="form-group col-md-12 animated"
                                    data-animation="fadeInUp"
                                    data-animation-delay="0.7s"
                                  >
                                    <h5 className="text-light">Upload prove</h5>
                                    <input
                                      type="file"
                                      className="form-control"
                                      required
                                      label="Upload Prove"
                                      onChange={(e) => {
                                        const newFile = e.target.files[0]
                                        setUserProve(newFile)
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="form-group col-md-12 text-center animated"
                                    data-animation="fadeInUp"
                                    data-animation-delay="0.8s"
                                  >
                                    <button
                                      type="submit"
                                      className="btn btn-gradient-purple btn-round  w-100"
                                    >
                                      Upload
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

            {/* START SECTION CALL TO ACTION- */}
            <section className="mt-5 container ">
              <div
                className=" to-action-bg d-flex justify-content-center align-items-center px-2"
                style={{ minHeight: '40vh' }}
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
            </section>
            <div className="container">
              <div className="row">
                <div className="text-center col-md-6">
                  <p className="copyright">
                    Copyright &copy; UltimateCoins {new Date().getFullYear()}{' '}
                    All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Payments
