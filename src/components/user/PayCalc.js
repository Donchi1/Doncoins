import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Axios from 'axios'

function PayCalc({
  setQrcode,
  setOpencode,
  isOpen,
  setclose,
  amount,
  setAmount,
}) {
  const [newAmount, setNewAmount] = useState(1)

  useEffect(() => {
    Axios.get(`https://blockchain.info/tobtc?currency=USD&value=${amount}`)
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => {})
  }, [amount])

  const handleCancel = () => {
    const cancel = prompt('Are you sure you want to cancel transaction')
    if (cancel) {
      setAmount('')
      setclose(false)
      setOpencode(false)
    }
  }

  const handleQrcode = () => {
    if (amount === '') {
      return
    }
    setQrcode(true)
    setclose(false)
  }

  return (
    <Modal show={isOpen} onHide={() => setOpencode(false)}>
      <Modal.Header>
        <Modal.Title>Confirm Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You want to invest ${amount} to our platform</p>
        <p>Bitcoin : {newAmount && newAmount}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleQrcode}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PayCalc
