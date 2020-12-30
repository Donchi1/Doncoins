import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import PayCalc from './PayCalc'
import { paymentAction } from '../Auths/Action'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'

function UserPayment({ show, setclose, amount, setAmount, open, setOpen }) {
  const [paymentData, setpaymentData] = useState({
    file: '',
    validity: false,
    amountCheck: false,
  })

  const [amountQrcode, setamountQrcode] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const { push } = useHistory()
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const transSuccess = useSelector(
    (state) => state.projectReducer.paymentSuccess,
  )
  const profileInfo = useSelector((state) => state.firebase.profile)
  const [openError, setopenError] = useState(false)

  const checkData = () => setopenError(true)
  const handleLoading = () => setisLoading(false)

  const handleAmount = () => {
    if (amount === '') {
      return
    }
    setclose(false)
    setOpen(true)
  }

  const sure = () => {
    const res = prompt('Are you sure you want to cancel transaction')
    if (res) {
      setclose(false)
      push('/user')
    }
  }

  const handleProve = (e) => {
    e.preventDefault()
    if (paymentData.file === '') {
      return
    }
    setamountQrcode(false)
    setisLoading(true)

    paymentAction(
      amount,
      profileInfo,
      paymentData.file,
      firebase,
      dispatch,
      checkData,
      handleLoading,
    )
  }

  return (
    <>
      {isLoading && <Loading />}

      <Modal onHide={() => setclose(false)} show={show} centered>
        <Modal.Header onClick={() => setclose(false)}>
          <Modal.Title>Input amount or Choose a plan to continue</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-group">
            <label htmlFor="amount"> Amount </label>
            <input
              type="number"
              id="amount"
              name="number"
              size="lg"
              className="form-control"
              required
              minLength="2"
              placeholder="Enter Amount "
              onChange={(e) => setAmount(e.target.value)}
            />
            {paymentData.amountCheck && <p>Amount Required</p>}
          </div>

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
        <Modal.Body className="text-center">
          <img
            src={require('../../assets/qrcode.jpg')}
            width="300px"
            alt="Code"
          />
          <p>3HTAECsSnW3tjVHkEynoDkgpWL6nvf19qB</p>
          <form onSubmit={handleProve}>
            <div className="form-group">
              <label htmlFor="file">Waiting for prove</label>
              <input
                type="file"
                id="file"
                label="upload prove"
                className="form-control"
                required
                size="lg"
                onChange={(e) => {
                  const newFile = e.target.files[0]
                  setpaymentData({ ...paymentData, file: newFile })
                }}
              />
            </div>

            <Modal.Footer>
              <Button variant="danger" onClick={() => setamountQrcode(false)}>
                Close
              </Button>

              <Button type="submit">Upload</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <Modal
        show={openError}
        onHide={() => setopenError(false)}
        contentClassName="bg-info"
        centered
      >
        <Modal.Header closeButton={() => setopenError(false)}>
          <Modal.Title className="text-danger">Prove Reveiw</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-light">{transSuccess}</h6>
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
