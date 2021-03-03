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
  const [paymentAmount, setPaymentAmount] = useState('')

  const handleLoad = () => setOpenLoader(false)

  useEffect(() => {
    axios
      .get(
        `https://blockchain.info/tobtc?currency=USD&value=${paymentInfo.paymentAmountData}`,
      )
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => {})
  }, [paymentInfo.paymentAmountData])

  const [userProve, setUserProve] = useState('')

  const handleAmountPay = (e) => {
    e.preventDefault()
    dispatch({
      type: 'PAYMENT_SET',
      amount: paymentAmount,
      qrcode: true,
    })

    setPaymentAmount('')
  }

  const handleOpen = () => {
    return (
      <div className="userTextColor">
        {' '}
        <p>
          You want to invest ${paymentInfo.paymentAmountData} to our platform
        </p>
        <p>Bitcoin : {newAmount && newAmount}</p>
      </div>
    )
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
          <section className="sub-page-banner site-bg parallax" id="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-12 wow fadeInUp">
                  <div className="page-banner text-center">
                    <h1 className="sub-banner-title userTextColor">Payments</h1>

                    <ul>
                      <li>
                        <a href="/user">Dashboard</a>
                      </li>
                      <li>Payments</li>
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

            <Snackbar
              open={openError}
              onClose={() => setopenError(false)}
              message={transSuccess}
              autoHideDuration={9000}
              ContentProps={{ className: classes.content }}
              anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            />
            <div className=" height-100vh site-bg">
              <div>
                <div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-8 col-lg-6 col-xl-5 pt-2 ">
                        <div className="card mb-3">
                          <div className="text-center">
                            <h4 className="wow userTextColor py-1">
                              Choose your investment method
                            </h4>
                          </div>
                          <div className="card-body p-4">
                            <div className="field_form authorize_form">
                              <div>
                                <div className="form-group col-md-12 text-center wow">
                                  <button
                                    className="btn  btn-radius w-100 history-info"
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
                                    {handleOpen()}
                                    <form onSubmit={handleAmountPay}>
                                      <div className="form-group col-md-12 wow">
                                        <input
                                          type="number"
                                          className="form-control"
                                          placeholder="Amount"
                                          required
                                          label="Input Amount"
                                          value={paymentAmount}
                                          onChange={(e) => {
                                            setPaymentAmount(e.target.value)
                                          }}
                                        />
                                      </div>
                                      <div className="form-group col-md-12 text-center wow ">
                                        <button
                                          type="submit"
                                          className="btn w-50 history-info mb-2"
                                        >
                                          submit
                                        </button>
                                      </div>
                                    </form>
                                    {paymentInfo.qrCode && (
                                      <>
                                        <h4 className="userTextColor">
                                          Make payment with the above btc wallet
                                          and upload Prove
                                        </h4>
                                        <div>
                                          <img
                                            src={require('../../assets/qrcode.jpg')}
                                            width="300px"
                                            alt="Code"
                                          />
                                          <p className="userTextColor">
                                            31keT3WdcgNwo5cThrMW9s9e4jQbGTqpTh
                                          </p>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                )}
                                <div
                                  className="form-group col-md-12 text-center animation btn-radius"
                                  data-animation="fadeInUp"
                                  data-animation-delay="0.7s"
                                >
                                  <button
                                    className="btn history-info  btn-radius w-100"
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
                                    <div className="pt-2">
                                      <h4 className="text-warning">
                                        Unavailable at the moment
                                      </h4>
                                    </div>
                                  )}
                                </div>

                                <div
                                  className="form-group col-md-12 text-center animation btn-radius"
                                  data-animation="fadeInUp"
                                  data-animation-delay="0.8s"
                                >
                                  <button
                                    className="btn history-info btn-radius w-100"
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
                                  className="form-group col-md-12 text-center animation  "
                                  data-animation="fadeInUp"
                                  data-animation-delay="0.8s"
                                >
                                  <button
                                    className="btn history-info btn-radius w-100"
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
                                  className="form-group col-md-12 animation"
                                  data-animation="fadeInUp"
                                  data-animation-delay="0.7s"
                                >
                                  <h5>Upload prove</h5>
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
                                  className="form-group col-md-12 text-center animation"
                                  data-animation="fadeInUp"
                                  data-animation-delay="0.8s"
                                >
                                  <button
                                    type="submit"
                                    className="btn history-info btn-radius w-100"
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
          <section className="mt-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="action-content res_md_mb_20">
                    <h3 className="wow">
                      Let Us Help You to Find a Solution That Meets Your Needs
                    </h3>
                    <p className="m-0 wow">
                      contact our team for more investment methods
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 text-lg-right">
                  <a
                    href="/contacts"
                    className="btn btn-default btn-radius wow history-info"
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
              <div className="col-md-6">
                <p className="copyright">
                  Copyright &copy; UltimateCoins {new Date().getFullYear()} All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Payments
