import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { itemColor } from '../navigation/NavBar'
import Axios from 'axios'

function BtcCalculator() {
  const [currency, setcurrency] = useState('USD')

  const [loading, setloading] = useState(false)

  const [amount, setamount] = useState(1)

  const [output, setOutput] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault()
    setloading(true)
    Axios.get(
      `https://blockchain.info/tobtc?currency=${currency}&value=${amount}`,
    )
      .then((res) => {
        setOutput(res.data)
        setloading(false)
      })
      .catch((err) => {
        setloading(false)
        setOutput(new Error('data not found'))
      })
  }

  return (
    <div className="py-3">
      <div
        style={{ backgroundColor: itemColor, borderRadius: '1.2rem' }}
        className="mr-5 ml-5 pt-3"
      >
        <h2 className="text-center text-primary text-uppercase pt-4 pb-5 ">
          Use our free Bitcoin calculator
        </h2>
        <Form onSubmit={handlesubmit}>
          <Form.Group>
            <Form.Control
              type="number"
              id="amount"
              size="lg"
              value={amount}
              placeholder="Enter Amount"
              aria-describedby="inputemail"
              required
              className=" text-light formstyle"
              onChange={(e) => setamount(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              size="lg"
              custom
              disabled
              className=" text-light formstyle"
            >
              <option>BTC</option>
            </Form.Control>
          </Form.Group>
          <div style={{ fontSize: '1.5rem', textAlign: 'center' }}>
            <p className="cardtext">TO</p>
          </div>
          <Form.Group>
            <Form.Control
              size="lg"
              as="select"
              onChange={(e) => setcurrency(e.target.value)}
              className=" text-light formstyle"
            >
              <option>{currency}</option>
              <option>AUD</option>
              <option>BIR</option>
              <option>CHF</option>
              <option>CLP</option>
              <option>CNY</option>
              <option>DKK</option>
              <option>HKD</option>
              <option>INR</option>
              <option>ISK</option>
              <option>JPY</option>
              <option>KRW</option>
              <option>NZD</option>
              <option>PLN</option>
              <option>RUB</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>SEK</option>
              <option>SGD</option>
              <option>TRY</option>
              <option>TWD</option>
              <option>THB</option>
              <option>GBP</option>
            </Form.Control>
          </Form.Group>
          <Button
            type="submit"
            style={{
              width: '100%',
              textTransform: 'uppercase',
            }}
            size="lg"
            className=" bg-primary text-light"
          >
            {loading ? 'Converting ....' : 'Convert'}
          </Button>
          <div className="pb-3 mt-3">
            <h1 className="text-light  text-center ">{output ? output : ''}</h1>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default BtcCalculator
