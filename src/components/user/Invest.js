import React from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import UserNav1 from './UserNav1'

function Invest() {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const handleReceivedPayment = (bool, price) => {
    dispatch({ type: 'PAYMENT_SET', amount: price, qrcode: bool })
    push('/payments')
  }
  return (
    <>
      <UserNav1 />
      <section className="sub-page-banner site-bg parallax" id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-banner text-center wow fadeInUp">
                <h1 className="sub-banner-title">
                  <span className="userTextColor">Investment</span> Plans
                </h1>
                <ul>
                  <li>
                    <a href="/user">Dashboard</a>
                  </li>
                  <li>Investment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className=" text-center">
                <h4 className="wow py-4">Choose Your Plan</h4>
              </div>
            </div>
          </div>
          <div className="row small_space">
            <div className="col-lg-4 col-md-4">
              <div className=" text-center card site-bg">
                <div className="card-header history-info">
                  <h3>Basic</h3>
                  <div className="price_tage">
                    <h3>$3000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li className="py-2">Normal Deposit</li>
                    <li className="py-2">$200</li>
                    <li className="py-2">Initial Withdrawal</li>
                    <li className="py-2">$3900</li>
                    <li className="py-2">Bonus</li>
                    <li className="py-2">$50</li>
                  </ul>
                </div>
                <div className="py-4">
                  <button
                    onClick={() => handleReceivedPayment(true, '200')}
                    className="btn btn-default btn-radius-5 history-info"
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className=" text-center card site-bg">
                <div className=" card-header history-info">
                  <h3>Standard</h3>
                  <div className="price_tage">
                    <h3>$4000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li className="py-2">Normal Deposit</li>
                    <li className="py-2">$400</li>
                    <li className="py-2">Initial Withdrawal</li>
                    <li className="py-2">$5900</li>
                    <li className="py-2">Bonus</li>
                    <li className="py-2">$100</li>
                  </ul>
                </div>
                <div className="py-4">
                  <button
                    onClick={() => handleReceivedPayment(true, '400')}
                    className="btn btn-default btn-radius-5 history-info "
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="text-center card site-bg">
                <div className=" card-header history-info">
                  <h3>Untimate</h3>
                  <div className="price_tage">
                    <h3>$5000.00</h3>
                    <span>Token Plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li className="py-2">Normal Deposit</li>
                    <li className="py-2">$600</li>
                    <li className="py-2">Initial Withdrawal</li>
                    <li className="py-2">$7800</li>
                    <li className="py-2">Bonus</li>
                    <li className="py-2">$200</li>
                  </ul>
                </div>
                <div className="py-4">
                  <button
                    onClick={() => handleReceivedPayment(true, '600')}
                    className="btn btn-default btn-radius history-info"
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="site-bg pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_dark title_border text-center">
                <h4 className="wow py-4">Special Plans</h4>
              </div>
            </div>
          </div>
          <div className="row small_space">
            <div className="col-lg-4 col-md-4">
              <div className="text-center card site-bg mb-2">
                <div className="card-header history-info">
                  <h3>Basic</h3>
                  <div className="price_tage">
                    <h3>$8000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li className="py-2">Normal Deposit</li>
                    <li className="py-2">$900</li>
                    <li className="py-2">Initial Withdrawal</li>
                    <li className="py-2">$9900</li>
                    <li className="py-2">Bonus</li>
                    <li className="py-2">$150</li>
                  </ul>
                </div>
                <div className="py-4">
                  <button
                    onClick={() => handleReceivedPayment(true, '900')}
                    className="btn btn-default btn-radius-5 history-info"
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="text-center card site-bg mb-2">
                <div className="card-header history-info">
                  <h3>Standard</h3>
                  <div className="price_tage">
                    <h3>$12000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li className="py-2">Normal Deposit</li>
                    <li className="py-2">$1000</li>
                    <li className="py-2">Initial Withdrawal</li>
                    <li className="py-2">$12900</li>
                    <li className="py-2">Bonus</li>
                    <li className="py-2">$250</li>
                  </ul>
                </div>
                <div className="py-4">
                  <button
                    onClick={() => handleReceivedPayment(true, '1000')}
                    className="btn btn-default btn-radius-2 history-info"
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card text-center site-bg mb-2">
                <div className="card-header history-info">
                  <h3>Untimate</h3>
                  <div className="price_tage">
                    <h3>$15000.00</h3>
                    <span>Token Plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li className="py-2">Normal Deposit</li>
                    <li className="py-2">$1200</li>
                    <li className="py-2">Initial Withdrawal</li>
                    <li className="py-2">$12800</li>
                    <li className="py-2">Bonus</li>
                    <li className="py-2">$300</li>
                  </ul>
                </div>
                <div className="py-4">
                  <button
                    onClick={() => handleReceivedPayment(true, '1200')}
                    className="btn btn-default btn-radius-5 history-info"
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center mt-5">
            <div className="col-lg-9">
              <div className="action-content res_md_mb_20 ">
                <h3 className="animation">
                  Contact our teams for more investment methods
                </h3>
                <p className="m-0 animation">
                  Let Us Help You to Find a Solution That Meets Your Needs
                </p>
              </div>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a href="/contacts" className="btn history-info">
                Contact Us <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
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
        </div>
      </section>
    </>
  )
}

export default Invest
