import React from 'react'
import Footer from '../body/Footer'
import ReuseHero from './ReuseHero'
import Plans from '../body/Plans'
import { Row, Card, Button, Col, Container } from 'react-bootstrap'
import { itemColor, backgroundcolor } from './NavBar'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <div style={{ backgroundColor: backgroundcolor }}>
      <ReuseHero currentClass="services" />
      <Plans />
      <Container fluid className=" pb-5 testimony">
        <Card.Title
          as="h1"
          className="text-bold text-light text-center text-uppercase pt-4 "
        >
          Special plans
        </Card.Title>
        <Row>
          <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
            <Card style={{ backgroundColor: itemColor }}>
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
              <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
                $1,000.00
              </Card.Text>
              <Card.Text className="cardtext">initial Witdrawal</Card.Text>
              <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
                $15,000.00
              </Card.Text>
              <Card.Text className="cardtext" style={{ fontSize: '1.5rem' }}>
                $200 Bonus fund
              </Card.Text>
              <Link to="/user" className="pb-3">
                <Button
                  className="p-3 text-uppercase text-primary text-light"
                  size="lg"
                  style={{ borderRadius: '1.2rem' }}
                >
                  Get Started
                </Button>
              </Link>
            </Card>
          </Col>
          <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
            <Card style={{ backgroundColor: itemColor }}>
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
              <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
                $2,000.00
              </Card.Text>
              <Card.Text className="cardtext">initial Witdrawal</Card.Text>
              <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
                $20,000.00
              </Card.Text>
              <Card.Text className="cardtext" style={{ fontSize: '1.5rem' }}>
                $300 Bonus fund
              </Card.Text>
              <Link to="/user" className="pb-3">
                <Button
                  className="p-3 text-uppercase text-primary text-light"
                  size="lg"
                  style={{ borderRadius: '1.2rem' }}
                >
                  Get Started
                </Button>
              </Link>
            </Card>
          </Col>
          <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
            <Card style={{ backgroundColor: itemColor }}>
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
              <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
                $3,000.00
              </Card.Text>
              <Card.Text className="cardtext">initial Witdrawal</Card.Text>
              <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
                $25,000.00
              </Card.Text>
              <Card.Text className="cardtext" style={{ fontSize: '1.5rem' }}>
                $800 Bonus fund
              </Card.Text>
              <Link to="/user">
                <Button
                  className="p-3 text-uppercase text-primary text-light"
                  size="lg"
                  style={{ borderRadius: '1.2rem' }}
                >
                  Get Started
                </Button>
              </Link>
            </Card>
          </Col>
          <Col sm="10" md="6" lg="3" className="text-center mt-3 plans">
            <Card style={{ backgroundColor: itemColor }}>
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
              <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
                $5,000.00
              </Card.Text>
              <Card.Text className="cardtext">initial Witdrawal</Card.Text>
              <Card.Text className="cardtext" style={{ fontSize: '1.2rem' }}>
                $35,000.00
              </Card.Text>
              <Card.Text className="cardtext" style={{ fontSize: '1.5rem' }}>
                $1000 Bonus fund
              </Card.Text>
              <Link to="/user" className="pb-3">
                <Button
                  className="p-3 text-uppercase text-light text-primary"
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
      <Footer />
    </div>
  )
}

export default Pricing
