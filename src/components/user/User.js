import React, { useState } from 'react'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {
  Card,
  Container,
  Col,
  Button,
  Row,
  Navbar,
  Carousel,
  CarouselItem,
} from 'react-bootstrap'
import * as Icons from 'react-bootstrap-icons'

import { Link } from 'react-router-dom'

import Chart from './Chart'

import UserPayment from './UserPayment'
import UserWithdrawal from './UserWithdrawal'
import { useSelector } from 'react-redux'

function User() {
  const [showModalpay, setCloseModalpay] = useState(false)
  const [showModalWithdraw, setCloseModalwithdraw] = useState(false)

  const userProfile = useSelector((state) => state.firebase.profile)

  const [amount, setAmount] = useState('')
  const [open, setopen] = useState(false)

  const percentage = userProfile.totalBalance

  return (
    <section
      className="text-light "
      style={{ backgroundColor: 'rgb(7, 7, 80)', minHeight: '100vh' }}
    >
      <div className="text-center text-uppercase ">
        <h1>Dashboard</h1>
      </div>
      <div className="row text-center mb-3 d-flex justify-content-around mx-2">
        <div>
          <Card className=" text-light bg-dark mt-3" style={{ width: '20rem' }}>
            <Card.Body style={{ backgroundColor: 'darkblue' }}>
              <Card.Title>Welcome {userProfile.firstname}</Card.Title>
              <Card.Subtitle> To CryptoGenus Int</Card.Subtitle>
              <Card.Text>
                We are happy you have gone this far. Invest here and never
                regret. Invest and get the best from our platform.
              </Card.Text>
              <Card.Header>
                You can edit your profile for data update.
              </Card.Header>
              <Card.Header>Your Information is save with us.</Card.Header>
              <Link to="/profile">
                <Button>Profile</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className=" text-light mt-3 " style={{ width: '17rem' }}>
          <CircularProgressbarWithChildren background value={percentage}>
            <div className="text-primary">
              <h3>Total Balance</h3>
              <h1>
                <strong>${percentage ? percentage : '0000'}</strong>
              </h1>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className=" text-light mt-3 " style={{ width: '17rem' }}>
          <CircularProgressbarWithChildren
            value={userProfile.initialDeposite}
            background
          >
            <div className="text-primary">
              <h3>Initial Deposite</h3>
              <h1>
                <strong>
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
              background
            >
              <div className="text-primary">
                <h3>Bonus Balance</h3>
                <h1>
                  <strong>
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
        <h2>
          Transaction <span className="text-primary">Update</span>{' '}
        </h2>
      </div>
      <div className="row mb-3 d-flex justify-content-around mt-4">
        <Card style={{ width: '18rem' }} className=" text-light bg-dark mt-3">
          <div className="d-flex justify-content-around align-items-center">
            <Icons.Envelope size={80} style={{ color: '#3bccff' }} />
            <div>
              <h2>
                $
                {userProfile.totalBalance
                  ? Number(userProfile.totalBalance) + Number(userProfile.bonus)
                  : '0000'}
              </h2>
              <p>Total income</p>
            </div>
          </div>
          <Chart />
          <Card.Footer
            style={{ backgroundColor: 'darkblue' }}
            className="d-flex justify-centent-center align-items-center "
          >
            <Icons.Calendar2Date className="mr-3" />
            <Card.Text>Today so far</Card.Text>
          </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }} className=" text-light mt-3 bg-dark">
          <div className="d-flex justify-content-around align-items-center">
            <Icons.Wallet size={80} style={{ color: '#3bccff' }} />
            <div>
              <h2>
                ${userProfile.totalBalance ? userProfile.totalBalance : '0000'}
              </h2>
              <p>Account balance</p>
            </div>
          </div>
          <Chart />
          <Card.Footer
            className="d-flex justify-centent-center align-items-center "
            style={{ backgroundColor: 'darkblue' }}
          >
            <Icons.Calendar2Date className="mr-3" />

            <Card.Text> This month so far</Card.Text>
          </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }} className=" text-light mt-3 bg-dark">
          <div className="d-flex justify-content-around align-items-center">
            <Icons.Bag size={80} style={{ color: '#3bccff' }} />
            <div>
              <h2>95%</h2>
              <p>Rate of Return</p>
            </div>
          </div>
          <Chart />
          <Card.Footer
            style={{ backgroundColor: 'darkblue' }}
            className="d-flex justify-centent-center align-items-center "
          >
            <Icons.Calendar2Date className="mr-3" />
            <Card.Text>This month so far</Card.Text>
          </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }} className=" text-light mt-3 bg-dark">
          <div className="d-flex justify-content-around align-items-center">
            <Icons.Calendar size={80} style={{ color: '#3bccff' }} />
            <div>
              <h2>
                ${userProfile.bonus ? Number(userProfile.bonus) + 2 : '0000'}
              </h2>
              <p>Bonus rate</p>
            </div>
          </div>
          <Chart />
          <Card.Footer
            style={{ backgroundColor: 'darkblue' }}
            className="d-flex justify-centent-center align-items-center "
          >
            <Icons.Calendar2Date className="mr-3" />
            <Card.Text>This month </Card.Text>
          </Card.Footer>
        </Card>
      </div>

      <div className="text-center">
        <img
          src={require('../../assets/bigcoin.png')}
          alt="Goldcoin"
          width="300px"
          height="300px"
        />
      </div>

      <Carousel controls={false} id="cplan">
        <CarouselItem>
          <Container fluid className=" pb-5 ">
            <Card.Title
              as="h1"
              className=" text-light text-center text-uppercase pt-4 "
            >
              Beginer <span className="text-primary">plans</span>
            </Card.Title>

            <Row>
              <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
                <Card className="bg-dark">
                  <Card.Header
                    className="text-bold bg-primary text-light "
                    style={{
                      fontFamily: 'fantasy',

                      fontSize: '1.5rem',
                      borderRadius: '0 0 1.2rem 1.2rem',
                    }}
                  >
                    Starter
                  </Card.Header>

                  <Card.Text className="cardtext mt-2">$200.00</Card.Text>

                  <Card.Text className="cardtext">Initial Deposit</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $200.00
                  </Card.Text>
                  <Card.Text className="cardtext">Initial Witdrawal</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $3500.00
                  </Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.5rem' }}
                  >
                    $50 Bonus Fund
                  </Card.Text>
                  <Link to="/user" className="pb-3">
                    <Button
                      className="p-3 text-uppercase"
                      size="lg"
                      onClick={() => {
                        setAmount(200)
                        setopen(true)
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
                <Card className="bg-dark">
                  <Card.Header
                    className="text-bold bg-primary text-light "
                    style={{
                      fontFamily: 'fantasy',

                      fontSize: '1.5rem',
                      borderRadius: '0 0 1.2rem 1.2rem',
                    }}
                  >
                    Basic
                  </Card.Header>
                  <Card.Text
                    className="cardtext mt-2"
                    style={{ fontSize: '1.7rem' }}
                  >
                    $300.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial deposit</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $300.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial Witdrawal</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $4999.00
                  </Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.5rem' }}
                  >
                    $70 Bonus fund
                  </Card.Text>

                  <Link to="/user" className="pb-3">
                    <Button
                      className="p-3 text-uppercase"
                      size="lg"
                      onClick={() => {
                        setAmount(300)
                        setopen(true)
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
                <Card className="bg-dark">
                  <Card.Header
                    className="bg-primary text-light"
                    style={{
                      fontFamily: 'fantasy',

                      fontSize: '1.5rem',
                      borderRadius: '0 0 1.2rem 1.2rem',
                    }}
                  >
                    Standard
                  </Card.Header>
                  <Card.Text
                    className="cardtext mt-2"
                    style={{ fontSize: '1.7rem' }}
                  >
                    $400.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial deposit</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $6999.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial Witdrawal</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $6999.00
                  </Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.5rem' }}
                  >
                    $100 Bonus fund
                  </Card.Text>
                  <Link to="/user" className="pb-3">
                    <Button
                      className="p-3 text-uppercase"
                      size="lg"
                      onClick={() => {
                        setAmount(400)
                        setopen(true)
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
                <Card className="bg-dark">
                  <Card.Header
                    className="text-bold bg-primary text-light "
                    style={{
                      fontFamily: 'fantasy',

                      fontSize: '1.5rem',
                      borderRadius: '0 0 1.2rem 1.2rem',
                    }}
                  >
                    Advanced
                  </Card.Header>
                  <Card.Text
                    className="cardtext mt-2"
                    style={{ fontSize: '1.7rem' }}
                  >
                    $500.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial deposit</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $500.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial Witdrawal</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $8999.00
                  </Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.5rem' }}
                  >
                    $150 Bonus fund
                  </Card.Text>
                  <Link to="/user" className="pb-3">
                    <Button
                      className="p-3 text-uppercase"
                      size="lg"
                      onClick={() => {
                        setAmount(500)
                        setopen(true)
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
        </CarouselItem>
        <CarouselItem>
          <Container fluid className=" pb-5">
            <Card.Title
              as="h1"
              className="text-bold text-light text-center text-uppercase pt-4 "
            >
              Special <span className="text-primary"> plans</span>
            </Card.Title>
            <Row>
              <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
                <Card className="bg-dark">
                  <Card.Header
                    className="text-bold bg-primary text-light "
                    style={{
                      fontFamily: 'fantasy',

                      fontSize: '1.5rem',
                      borderRadius: '0 0 1.2rem 1.2rem',
                    }}
                  >
                    Standard plus
                  </Card.Header>
                  <Card.Text
                    className="cardtext mt-2"
                    style={{ fontSize: '1.7rem' }}
                  >
                    $1,000.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial deposit</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $1,000.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial Witdrawal</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $15,000.00
                  </Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.5rem' }}
                  >
                    $200 Bonus fund
                  </Card.Text>
                  <Link to="/user" className="pb-3">
                    <Button
                      className="p-3 text-uppercase"
                      size="lg"
                      onClick={() => {
                        setAmount(1000)
                        setopen(true)
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
                <Card className="bg-dark">
                  <Card.Header
                    className="text-bold bg-primary text-light "
                    style={{
                      fontFamily: 'fantasy',

                      fontSize: '1.5rem',
                      borderRadius: '0 0 1.2rem 1.2rem',
                    }}
                  >
                    Premium
                  </Card.Header>
                  <Card.Text
                    className="cardtext mt-2"
                    style={{ fontSize: '1.7rem' }}
                  >
                    $2,000.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial deposit</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $2,000.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial Witdrawal</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $20,000.00
                  </Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.5rem' }}
                  >
                    $300 Bonus fund
                  </Card.Text>
                  <Link to="/user" className="pb-3">
                    <Button
                      className="p-3 text-uppercase"
                      size="lg"
                      onClick={() => {
                        setAmount(2000)
                        setopen(true)
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
                <Card className="bg-dark">
                  <Card.Header
                    className="text-bold bg-primary text-light "
                    style={{
                      fontFamily: 'fantasy',

                      fontSize: '1.5rem',
                      borderRadius: '0 0 1.2rem 1.2rem',
                    }}
                  >
                    Premium plus
                  </Card.Header>
                  <Card.Text
                    className="cardtext mt-2"
                    style={{ fontSize: '1.7rem' }}
                  >
                    $3,000.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial deposit</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $3,000.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial Witdrawal</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $25,000.00
                  </Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.5rem' }}
                  >
                    $800 Bonus fund
                  </Card.Text>
                  <Link to="/user" className="pb-3">
                    <Button
                      className="p-3 text-uppercase"
                      size="lg"
                      onClick={() => {
                        setAmount(3000)
                        setopen(true)
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
                <Card className="bg-dark">
                  <Card.Header
                    className="text-bold bg-primary text-light "
                    style={{
                      fontFamily: 'fantasy',

                      fontSize: '1.5rem',
                      borderRadius: '0 0 1.2rem 1.2rem',
                    }}
                  >
                    Ultimate
                  </Card.Header>
                  <Card.Text
                    className="cardtext mt-2"
                    style={{ fontSize: '1.7rem' }}
                  >
                    $5,000.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial deposit</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $5,000.00
                  </Card.Text>
                  <Card.Text className="cardtext">initial Witdrawal</Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.2rem' }}
                  >
                    $35,000.00
                  </Card.Text>
                  <Card.Text
                    className="cardtext"
                    style={{ fontSize: '1.5rem' }}
                  >
                    $1000 Bonus fund
                  </Card.Text>
                  <div className="pb-3">
                    <Button
                      className="p-3 text-uppercase"
                      size="lg"
                      onClick={() => {
                        setAmount(5000)
                        setopen(true)
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </CarouselItem>
      </Carousel>
      <div className="text-center mt-2">
        <img
          src={require('../../assets/moneyBag.png')}
          alt="moneybag"
          width="300px"
          height="300px"
        />
      </div>
      <div className="text-center  pb-3 ">
        <h1 className=" text-light pt-2 pb-2 text-bold text-uppercas">
          <span className="text-primary">Trade with us now</span> and never
          regret
        </h1>

        <Button
          size="lg"
          className="text-uppercase mb-3 ml-2"
          onClick={() => setCloseModalpay(true)}
        >
          Make payment
        </Button>
        <span className="mx-2" />
        <Button
          size="lg"
          className="text-uppercase mb-3"
          onClick={() => setCloseModalwithdraw(true)}
          disabled={userProfile.disbleWithdrawal}
        >
          Make Withdrawal
        </Button>
      </div>
      <UserPayment
        show={showModalpay}
        setclose={setCloseModalpay}
        amount={amount}
        setAmount={setAmount}
        open={open}
        setOpen={setopen}
      />
      <UserWithdrawal
        show={showModalWithdraw}
        setShow={setCloseModalwithdraw}
      />

      <div className="text-center text-light pt-3">
        <span>©copywrite CryptoGenus 2020 all right reserved</span>
        <Navbar.Brand
          className="text-uppercase ml-5 mt-4 font-weight-bold"
          style={{
            fontSize: '2rem',
            alignItems: 'center',
          }}
        >
          Crypto<span className="text-primary">genus</span>
        </Navbar.Brand>
      </div>
    </section>
  )
}

export default User
