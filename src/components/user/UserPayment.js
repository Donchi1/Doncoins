import React, { useState } from 'react'
import { Modal, Button, Form, FormGroup, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import * as Icons from 'react-bootstrap-icons'
import PayCalc from './PayCalc'
import { paymentAction } from '../Auths/Action'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'

function UserPayment({ show, setclose, amount, setAmount, open, setOpen }) {
  const [paymentData, setpaymentData] = useState({
    file: '',
    validity: false,
    amountCheck: false,
  })

  const [amountQrcode, setamountQrcode] = useState(false)

  const { push } = useHistory()
  const firebase = useFirebase()
  const dispatch = useDispatch()

  const handleAmount = () => {
    if (amount === '') {
      return
    }
    setclose(false)
    //setamountQrcode(true)
    setOpen(true)
  }

  const sure = () => {
    const res = prompt('Are you sure you want to cancel transaction')
    if (res) {
      setclose(false)
      push('/user')
    }
  }

  const handleProve = () => {
    paymentAction(amount, paymentData.file, firebase, dispatch)
  }

  return (
    <>
      <Modal onHide={() => setclose(false)} show={show}>
        <Modal.Header onClick={() => setclose(false)}>
          <Modal.Title>Input amount or Choose a plan to continue</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
              onChange={(e) => setAmount(e.target.value)}
            />
            {paymentData.amountCheck && <p>Amount Required</p>}
          </FormGroup>

          <Modal.Footer>
            <Button onClick={sure} variant="danger">
              Cancel
            </Button>
            <Button onClick={handleAmount}>Proceed</Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>

      <Modal show={amountQrcode} onHide={() => setamountQrcode(false)}>
        <Modal.Header>
          <Modal.Title>
            <p style={{ color: 'green' }}> Pending...</p>
            Make payment with the wallet address and upload prove
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={require('../../assets/qrcode.jpg')} alt="Code" />
          <p>3HTAECsSnW3tjVHkEynoDkgpWL6nvf19qB</p>
          <Form onSubmit={handleProve}>
            <FormGroup>
              <Form.Label htmlFor="file">Waiting for prove</Form.Label>
              <Form.File
                type="file"
                id="file"
                label="upload prove"
                custom
                required
                size="lg"
                onChange={(e) => {
                  const newFile = e.target.value
                  setpaymentData({ ...paymentData, file: newFile.toString() })
                }}
              />
            </FormGroup>

            <Modal.Footer>
              <Button variant="danger" onClick={() => setamountQrcode(false)}>
                Close
              </Button>

              <Button type="submit">Upload</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <PayCalc
        setQrcode={setamountQrcode}
        setOpencode={setOpen}
        isOpen={open}
        setclose={setclose}
        amount={amount}
        setAmount={setAmount}
      />
    </>
  )
}

export default UserPayment
