import React from 'react'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Card } from 'react-bootstrap'
import * as Icons from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

import Chart from './Chart'
import MarketPrice from './MarketPrice'
import UserNav1 from './UserNav1'

function User() {
  const userProfile = useSelector((state) => state.firebase.profile)

  const percentage = userProfile.totalBalance

  return (
    <>
      <UserNav1 />
      <section className="site-bg pt-5  pb-0 ">
        <div className="text-center  text-uppercase pt-5">
          <h1 className="text-light">Dashboard</h1>
        </div>
        <div className="divider small_divider"></div>
        <div className="row text-center container  mb-3 d-flex justify-content-around mx-auto">
          <div className=" text-light mt-3 " style={{ width: '17rem' }}>
            <CircularProgressbarWithChildren
              strokeWidth={3}
              value={percentage}
              styles={{
                path: {
                  stroke: 'rgb(146, 15, 146)',
                  strokeLinecap: 'square',
                },
              }}
            >
              <div className="text-primary">
                <h3 className="btn-default userTextColor">Total Balance</h3>
                <h1>
                  <strong className="text-light">
                    ${percentage ? percentage : '0000'}
                  </strong>
                </h1>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className=" text-light mt-3 " style={{ width: '17rem' }}>
            <CircularProgressbarWithChildren
              value={userProfile.initialDeposite}
              strokeWidth={3}
              styles={{
                path: {
                  stroke: 'rgb(146, 15, 146)',
                  strokeLinecap: 'square',
                },
              }}
            >
              <div className="text-primary">
                <h3 className="btn-default userTextColor">Initial Deposit</h3>
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
          <div className=" text-light mt-3 " style={{ width: '17rem' }}>
            <div>
              <CircularProgressbarWithChildren
                value={userProfile.bonus}
                strokeWidth={3}
                styles={{
                  path: {
                    stroke: 'rgb(146, 15, 146)',
                    strokeLinecap: 'square',
                  },
                }}
              >
                <div>
                  <h3 className="btn-default userTextColor">Bonus Balance</h3>
                  <h1>
                    <strong className="text-light">
                      ${userProfile.bonus ? userProfile.bonus : '0000'}
                    </strong>
                  </h1>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
        <div
          className=" text-center text-uppercase mx-auto mt-4"
          style={{ width: '50%', fontStyle: 'italic' }}
        >
          <h2 className="text-light">Transaction Update</h2>
        </div>
        <div className="row mb-3 d-flex justify-content-around mt-4 container mx-auto">
          <Card
            style={{ width: '18rem' }}
            className=" text-light site-bg2 mt-3"
          >
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Envelope size={80} className="btn-default userTextColor" />
              <div>
                <h2 className="btn-default userTextColor">
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
            style={{ width: '18rem' }}
            className=" text-light mt-3 site-bg2"
          >
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Wallet size={80} className="btn-default userTextColor" />
              <div>
                <h2 className="btn-default userTextColor">
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
            style={{ width: '18rem' }}
            className=" text-light mt-3 site-bg2"
          >
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Bag size={80} className="btn-default userTextColor" />
              <div>
                <h2 className="btn-default userTextColor">95%</h2>
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
            style={{ width: '18rem' }}
            className=" text-light mt-3 site-bg2"
          >
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Calendar size={80} className="btn-default userTextColor" />
              <div>
                <h2 className="btn-default userTextColor">
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
        <div className="divider small_divider"></div>
        <section className="site-bg pt-3">
          <div className="container">
            <div className="row align-items-center mt-5">
              <div className="col-lg-9">
                <div className="action-content res_md_mb_20 ">
                  <h3 className="wow userTextColor">
                    Contact our teams for more investment methods
                  </h3>
                  <p className="m-0 ">
                    Let Us Help You to Find a Solution That Meets Your Needs
                  </p>
                </div>
              </div>
              <div className="col-lg-3 text-lg-right">
                <a href="/contacts" className="btn history-info">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
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

export default User
