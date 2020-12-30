import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { bg, itemColor } from '../navigation/NavBar'
import { Link } from 'react-router-dom'

function Plans() {
  return (
    <Container fluid className="testimony pb-5">
      <Card.Title
        as="h1"
        className="text-bold text-light text-center text-uppercase pt-4 "
      >
        Our Investment Plans
      </Card.Title>
      <div
        className=" mr-auto ml-auto mb-5 mt-5  "
        style={{ height: '0.3rem', width: '20%', background: bg }}
      />
      <Row>
        <Col sm="10" md="6" lg="3" className="text-center mt-5 plans">
          <Card style={{ backgroundColor: itemColor }}>
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
            <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
              $200.00
            </Card.Text>
            <Card.Text className="cardtext">Initial Witdrawal</Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
              $3500.00
            </Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.5rem' }}>
              $50 Bonus Fund
            </Card.Text>
            <Link to="/signup" className="pb-3">
              <Button
                className="p-3 text-uppercase bg-primary"
                size="lg"
                style={{ borderRadius: '1.2rem' }}
              >
                Get Started
              </Button>
            </Link>
          </Card>
        </Col>
        <Col sm="10" md="6" lg="3" className="text-center mt-5 plans">
          <Card style={{ backgroundColor: itemColor }}>
            <Card.Header
              className="text-bold bg-primary  text-light "
              style={{
                fontFamily: 'fantasy',

                fontSize: '1.5rem',
                borderRadius: '0 0 1.2rem 1.2rem',
              }}
            >
              Basic
            </Card.Header>
            <Card.Text className="cardtext mt-2" style={{ fontSize: '1.7rem' }}>
              $300.00
            </Card.Text>
            <Card.Text className="cardtext">initial deposit</Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
              $300.00
            </Card.Text>
            <Card.Text className="cardtext">initial Witdrawal</Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
              $4999.00
            </Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.5rem' }}>
              $70 Bonus fund
            </Card.Text>

            <Link to="/signup" className="pb-3">
              <Button
                className="p-3 bg-primary text-uppercase"
                size="lg"
                style={{ borderRadius: '1.2rem' }}
              >
                Get Started
              </Button>
            </Link>
          </Card>
        </Col>
        <Col sm="10" md="6" lg="3" className="text-center mt-5 plans">
          <Card style={{ backgroundColor: itemColor }}>
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
            <Card.Text className="cardtext mt-2" style={{ fontSize: '1.7rem' }}>
              $400.00
            </Card.Text>
            <Card.Text className="cardtext">initial deposit</Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
              $6999.00
            </Card.Text>
            <Card.Text className="cardtext">initial Witdrawal</Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
              $6999.00
            </Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.5rem' }}>
              $100 Bonus fund
            </Card.Text>
            <Link to="/signup" className="pb-3">
              <Button
                className="p-3 text-uppercase bg-primary"
                size="lg"
                style={{ borderRadius: '1.2rem' }}
              >
                Get Started
              </Button>
            </Link>
          </Card>
        </Col>
        <Col sm="10" md="6" lg="3" className="text-center mt-5 plans">
          <Card style={{ backgroundColor: itemColor }}>
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
            <Card.Text className="cardtext mt-2" style={{ fontSize: '1.7rem' }}>
              $500.00
            </Card.Text>
            <Card.Text className="cardtext">initial deposit</Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
              $500.00
            </Card.Text>
            <Card.Text className="cardtext">initial Witdrawal</Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
              $8999.00
            </Card.Text>
            <Card.Text className="cardtext" style={{ fontSize: '1.5rem' }}>
              $150 Bonus fund
            </Card.Text>
            <Link to="/signup" className="pb-3">
              <Button
                className="p-3 text-uppercase bg-primary"
                size="lg"
                style={{ borderRadius: '1.2rem' }}
              >
                Get Started
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Plans
