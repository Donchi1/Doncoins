import React from 'react'
import { Card } from 'react-bootstrap'

function Cashmodel() {
  return (
    <section className="p-4 pb-5">
      <h3 className=" text-center text-light mt-5  text-uppercase">
        our top currencies
      </h3>

      <div className="d-flex justify-content-around align-items-center flex-wrap  mt-5">
        <Card className="mt-3">
          <img
            src={require('../../assets/btcdirect.png')}
            width="200px"
            height="200px"
            alt="bitcoinDirect"
          />
        </Card>
        <Card className="mt-3">
          <img
            src={require('../../assets/bitcoinCash.jpg')}
            width="200px"
            height="200px"
            alt="bitcoinCash"
          />
        </Card>
        <Card className="mt-3">
          <img
            src={require('../../assets/ethereum.jpg')}
            width="200px"
            alt="payoneer"
            height="200px"
          />
        </Card>
        <Card className="mt-3">
          <img
            src={require('../../assets/paypal.jpg')}
            width="200px"
            alt="paypal"
            height="200px"
          />
        </Card>

        <Card className="mt-3">
          <img
            src={require('../../assets/litecoin.jpg')}
            width="200px"
            alt="litecoin"
            height="200px"
          />
        </Card>
        <Card className="mt-3">
          <img
            src={require('../../assets/ripple.jpg')}
            width="200px"
            alt="ripple"
            height="200px"
          />
        </Card>
      </div>
    </section>
  )
}

export default Cashmodel
