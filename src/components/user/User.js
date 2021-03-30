import React from 'react'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Card } from 'react-bootstrap'
import * as Icons from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

import Chart from './Chart'
import MarketPrice from './MarketPrice'
import UserNav1 from './UserNav1'
import HistoryData from './HistoryData'

function User() {
  const userProfile = useSelector((state) => state.firebase.profile)

  const percentage = userProfile.totalBalance

  return (
    <>
      <UserNav1 />

      <section className="1-column undefined  page-animated svg-wrapper pt-5  pb-0 ">
        <div className="text-center  text-uppercase pt-5">
          <h4 className="text-light title">Dashboard</h4>
        </div>
        <div className="divider small_divider"></div>
        <div className="row text-center container  mb-3 d-flex justify-content-around mx-auto">
          <div
            className=" text-light mt-3 card site-bg2 "
            style={{ width: '17rem', height: '22rem' }}
          >
            <div className="pad-on-small">
              <h5 className="card-header profile-user-bg text-light ">
                Profile
              </h5>
              <span>
                <img
                  src={userProfile.image || require('../../assets/avater.png')}
                  width="80px"
                  height="80px"
                  className="border rounded-circle mt-3"
                  alt="profile"
                />
              </span>
              <p className="card-title pt-1">
                Welcome {userProfile.firstname} {userProfile.lastname}
              </p>
              <ul className="list-unstyled">
                <li>
                  <span className="btn-gradient-purple nav-color">
                    Country{' '}
                  </span>{' '}
                  : {userProfile.country}
                </li>
                <li>
                  <span className="btn-gradient-purple nav-color">Phone </span>:{' '}
                  {userProfile.phone}
                </li>
              </ul>

              <div>
                <a
                  href="/profile"
                  className="btn btn-round btn-gradient-purple btn-sm "
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
          <div
            className=" text-light mt-3 card site-bg2"
            style={{ width: '17rem' }}
          >
            <h5 className="card-header profile-user-bg text-light">
              Total Balance
            </h5>
            <CircularProgressbarWithChildren
              className="mt-2"
              strokeWidth={5}
              value={percentage}
              styles={{
                path: {
                  stroke: 'rgb(146, 15, 146)',
                  strokeLinecap: 'square',
                },
              }}
            >
              <div className="text-primary">
                <h1>
                  <strong className="text-light">
                    ${percentage ? percentage : '0000'}
                  </strong>
                </h1>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div
            className=" text-light mt-3 card site-bg2"
            style={{ width: '17rem' }}
          >
            <h5 className="card-header text-light profile-user-bg ">
              Initial Deposit
            </h5>
            <CircularProgressbarWithChildren
              className="mt-2"
              value={userProfile.initialDeposite}
              strokeWidth={5}
              styles={{
                path: {
                  stroke: 'rgb(146, 15, 146)',
                  strokeLinecap: 'square',
                },
              }}
            >
              <div className="text-primary">
                <h1>
                  <strong className="text-light">
                    $
                    {userProfile.initialDeposite
                      ? userProfile.initialDeposite
                      : '0000'}
                  </strong>
                </h1>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div
            className=" text-light mt-3 card site-bg2"
            style={{ width: '17rem' }}
          >
            <h5 className="card-header text-light profile-user-bg">
              Token Balance
            </h5>
            <div>
              <CircularProgressbarWithChildren
                className="mt-2"
                value={userProfile.token}
                strokeWidth={5}
                styles={{
                  path: {
                    stroke: 'rgb(146, 15, 146)',
                    strokeLinecap: 'square',
                  },
                }}
              >
                <div>
                  <h1>
                    <strong className="text-light">
                      ${userProfile.token ? userProfile.token : '0000'}
                    </strong>
                  </h1>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
        <div className=" text-center text-uppercase mx-auto mt-4">
          <h4 className="text-light title">Transaction Update</h4>
        </div>
        <div className="row mb-3 d-flex justify-content-around mt-4 container mx-auto">
          <Card
            style={{ width: '17rem' }}
            className=" text-light site-bg2 mt-3"
          >
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Envelope
                size={80}
                className="btn-default btn-gradient-purple nav-color"
              />
              <div>
                <h2 className="btn-default btn-gradient-purple nav-color">
                  $
                  {userProfile.totalBalance
                    ? Number(userProfile.totalBalance) +
                      Number(userProfile.bonus)
                    : '0000'}
                </h2>
                <p className="text-light">Total income</p>
              </div>
            </div>
            <Chart />
            <Card.Footer className="d-flex history-info justify-centent-center align-items-center btn-default">
              <Icons.Calendar2Date className="mr-3" />
              <Card.Text className="text-light">Today so far</Card.Text>
            </Card.Footer>
          </Card>
          <Card
            style={{ width: '17rem' }}
            className=" text-light mt-3 site-bg2"
          >
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Wallet
                size={80}
                className="btn-default btn-gradient-purple nav-color"
              />
              <div>
                <h2 className="btn-default btn-gradient-purple nav-color">
                  $
                  {userProfile.totalBalance ? userProfile.totalBalance : '0000'}
                </h2>
                <p className="text-light">Account balance</p>
              </div>
            </div>
            <Chart />
            <Card.Footer className="d-flex history-info justify-centent-center align-items-center btn-default ">
              <Icons.Calendar2Date className="mr-3" />

              <Card.Text className="text-light"> This month so far</Card.Text>
            </Card.Footer>
          </Card>
          <Card
            style={{ width: '17rem' }}
            className=" text-light mt-3 site-bg2"
          >
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Bag
                size={80}
                className="btn-default btn-gradient-purple nav-color"
              />
              <div>
                <h2 className="btn-default btn-gradient-purple nav-color">
                  95%
                </h2>
                <p className="text-light">Rate of Return</p>
              </div>
            </div>
            <Chart />
            <Card.Footer className="d-flex history-info justify-centent-center align-items-center btn-default ">
              <Icons.Calendar2Date className="mr-3" />
              <Card.Text className="text-light">This month so far</Card.Text>
            </Card.Footer>
          </Card>
          <Card
            style={{ width: '17rem' }}
            className=" text-light mt-3 site-bg2"
          >
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Calendar
                size={80}
                className="btn-default btn-gradient-purple nav-color"
              />
              <div>
                <h2 className="btn-default btn-gradient-purple nav-color">
                  ${userProfile.bonus ? Number(userProfile.bonus) + 2 : '0000'}
                </h2>
                <p className="text-light">Bonus rate</p>
              </div>
            </div>
            <Chart />
            <Card.Footer className="d-flex history-info justify-centent-center align-items-center btn-default">
              <Icons.Calendar2Date className="mr-3" />
              <Card.Text className="text-light">This month </Card.Text>
            </Card.Footer>
          </Card>
        </div>
        <div className="divider small_divider"></div>
        <MarketPrice />
        <HistoryData />
        <div className="divider small_divider mt-2"></div>
        <section className=" pt-3 container">
          <div
            className=" to-action-bg d-flex justify-content-center align-items-center px-2"
            style={{ minHeight: '40vh' }}
          >
            <div className="row align-items-center mt-5">
              <div className="col-lg-6">
                <div className="action-content res_md_mb_20 ">
                  <h4 className="animated btn-gradient-purple nav-color">
                    Contact our team for more information
                  </h4>
                  <p className="m-0 ">
                    Let Us Help You to Find a Solution That Meets Your Needs
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-lg-right">
                <a
                  href="/contacts"
                  className="btn btn-round btn-gradient-purple animated"
                >
                  Contact Us <i className="fa fa-long-arrow-right"></i>
                </a>
                <div className=" mt-4">
                  <h4 className="mb-2 text-light">Easy ways to crypto</h4>
                  <a
                    href="https://coinmama.com"
                    className="d-inline-block ml-1"
                  >
                    Coinmama
                  </a>
                  <a href="https://paxful.coin" className="d-inline-block ml-1">
                    Paxful
                  </a>
                  <a href="https://bitpay.com" className="d-inline-block ml-1">
                    Bitpay
                  </a>
                  <a
                    href="https://coinbase.com"
                    className="d-inline-block ml-1"
                  >
                    Coinbase
                  </a>
                  <a href="https://luno.com" className="d-inline-block ml-1">
                    Luno
                  </a>
                  <a
                    href="https://bitcoins.com"
                    className="d-inline-block ml-1"
                  >
                    Bitcoins
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="copyright">
                    Copyright &copy; Doincoins {new Date().getFullYear()} All
                    Rights Reserved.
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

export default User
