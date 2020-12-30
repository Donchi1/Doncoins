import React, { useState } from 'react'
import { Form, FormGroup, Button, Modal } from 'react-bootstrap'

import Withdrawcalc from './Withdrawcalc.js'

import Loading from './Loading.js'

function UserWithdrawal({ show, setShow }) {
  const [amount, setamount] = useState('')

  const [address, setAddress] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [openModalCalc, setOpenModalCalc] = useState(false)

  const handleSubmit = () => {
    if (amount === '' || address === '') {
      return
    }
    setOpenModalCalc(true)
  }

  const handleCancel = () => {
    setShow(false)
  }

  return (
    <>
      {isLoading && <Loading />}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>WITHDRAWAL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FormGroup>
              <Form.Label htmlFor="amount"> Amount </Form.Label>
              <Form.Control
                type="number"
                id="amount"
                name="number"
                size="lg"
                required
                minLength="2"
                placeholder="Enter Amount "
                onChange={(e) => setamount(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Form.Label htmlFor="wallet">Wallet Address </Form.Label>
              <Form.Control
                type="text"
                id="wallet"
                name="number"
                size="lg"
                required
                minLength="2"
                placeholder="Enter Wallet"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
            <Modal.Footer>
              <Button
                className="text-uppercase text-light"
                onClick={handleCancel}
                variant="danger"
              >
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Proceed</Button>
            </Modal.Footer>
            <p>Causion: Input a correct wallet address</p>
          </div>
        </Modal.Body>
      </Modal>

      <Withdrawcalc
        amount={amount}
        address={address}
        openModal={openModalCalc}
        setOpenModal={setOpenModalCalc}
        setAddress={setAddress}
        setamount={setamount}
        setisloading={setisLoading}
        setShow={setShow}
      />
    </>
  )
}

export default UserWithdrawal
