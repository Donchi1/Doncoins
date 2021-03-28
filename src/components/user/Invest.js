import React from 'react'

import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import UserNav1 from './UserNav1'

function Invest() {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const handleReceivedPayment = (bool, price) => {
    dispatch({
      type: 'PAYMENT_SET',
      amount1: price,
      amount: price,
      qrcode: bool,
      qrcode1: bool,
    })
    push('/payments')
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
                    className=" animated banner-content title pt-5  text-uppercase text-bold "
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Investments
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <ul className="text-center list-unstyled text-light">
                      <li className="py-2  border">Normal Deposit</li>
                      <li className="py-2 mt-1 border">$200</li>
                      <li className="py-2 mt-1 border">Initial Withdrawal</li>
                      <li className="py-2 mt-1 border">$3900</li>
                      <li className="py-2 mt-1 border">Bonus</li>
                      <li className="py-2 mt-1 border">$50</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <Link
                      to="#"
                      className="btn btn-gradient-purple btn-round "
                      onClick={() => handleReceivedPayment(true, '200')}
                    >
                      Buy Now
                    </Link>
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
                      <li className="py-2 mt-1 border">Initial Withdrawal</li>
                      <li className="py-2 mt-1 border">$5900</li>
                      <li className="py-2 mt-1 border">Bonus</li>
                      <li className="py-2 mt-1 border">$100</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <Link
                      to="#"
                      className="btn btn-gradient-purple btn-round "
                      onClick={() => handleReceivedPayment(true, '400')}
                    >
                      Buy Now
                    </Link>
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
                    <ul className=" text-center list-unstyled text-light">
                      <li className="py-2 border">Normal Deposit</li>
                      <li className="py-2 mt-1 border">$1000</li>
                      <li className="py-2 mt-1 border">Initial Withdrawal</li>
                      <li className="py-2 mt-1 border">$7800</li>
                      <li className="py-2 mt-1 border">Bonus</li>
                      <li className="py-2 mt-1 border">$200</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <Link
                      to="#"
                      className="btn btn-gradient-purple btn-round "
                      onClick={() => handleReceivedPayment(true, '500')}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_dark title_border text-center">
                  <h2
                    className="animated py-4 title"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Special Plans
                  </h2>
                </div>
              </div>
            </div>
            <div className="row small_space">
              <div className="col-lg-4 col-md-4">
                <div
                  className="text-center card site-bg2 mb-2 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  <div className="card-header btn-gradient-purple">
                    <h3>Basic</h3>
                    <div className="price_tage">
                      <h3>$8000.00</h3>
                      <span>Token Price</span>
                    </div>
                  </div>
                  <div>
                    <ul className=" text-center list-unstyled text-light">
                      <li className="py-2 border">Normal Deposit</li>
                      <li className="py-2 border mt-1">$900</li>
                      <li className="py-2 border mt-1">Initial Withdrawal</li>
                      <li className="py-2 border mt-1">$9900</li>
                      <li className="py-2 border mt-1">Bonus</li>
                      <li className="py-2 border mt-1">$150</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <Link
                      to="#"
                      className="btn btn-gradient-purple btn-round  "
                      onClick={() => handleReceivedPayment(true, '900')}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div
                  className="text-center card site-bg2 mb-2 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  <div className="card-header btn-gradient-purple">
                    <h3>Standard</h3>
                    <div className="price_tage">
                      <h3>$12000.00</h3>
                      <span>Token Price</span>
                    </div>
                  </div>
                  <div>
                    <ul className=" text-center list-unstyled text-light">
                      <li className="py-2 border">Normal Deposit</li>
                      <li className="py-2 mt-1 border">$1000</li>
                      <li className="py-2 mt-1 border">Initial Withdrawal</li>
                      <li className="py-2 mt-1 border">$12900</li>
                      <li className="py-2 mt-1 border">Bonus</li>
                      <li className="py-2 mt-1 border">$250</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <Link
                      to="#"
                      className="btn btn-gradient-purple btn-round "
                      onClick={() => handleReceivedPayment(true, '1000')}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div
                  className="card text-center site-bg2 mb-2 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  <div className="card-header btn-gradient-purple">
                    <h3>Untimate</h3>
                    <div className="price_tage">
                      <h3>$15000.00</h3>
                      <span>Token Price</span>
                    </div>
                  </div>
                  <div>
                    <ul className=" text-center text-light list-unstyled ">
                      <li className="py-2  border">Normal Deposit</li>
                      <li className="py-2 mt-1 border">$1200</li>
                      <li className="py-2 mt-1 border">Initial Withdrawal</li>
                      <li className="py-2 mt-1 border">$12800</li>
                      <li className="py-2 mt-1 border">Bonus</li>
                      <li className="py-2 mt-1 border">$300</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <Link
                      to="#"
                      className="btn btn-gradient-purple btn-round "
                      onClick={() => handleReceivedPayment(true, '1200')}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ height: '5vh' }} />
        <section className="container">
          <div
            className=" to-action-bg d-flex justify-content-center align-items-center px-2"
            style={{ minHeight: '40vh' }}
          >
            <div className="row align-items-center mt-5">
              <div className="col-lg-9">
                <div className="action-content res_md_mb_20 ">
                  <h3
                    className="animated btn-gradient-purple nav-color"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Contact our teams for more investment methods
                  </h3>
                  <p
                    className="animated btn-gradient-purple nav-color m-0"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Let Us Help You to Find a Solution That Meets Your Needs
                  </p>
                </div>
              </div>
              <div className="col-lg-3 text-lg-right">
                <a
                  href="/contacts"
                  className="btn btn-round btn-gradient-purple"
                >
                  Contact Us <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <p className="copyright">
                    Copyright &copy; UltimateCoins {new Date().getFullYear()}{' '}
                    All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Invest
