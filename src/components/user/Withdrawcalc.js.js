import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import { withdrawalAction } from '../Auths/Action'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'

function Withdrawcalc({
  amount,
  address,
  openModal,
  setOpenModal,
  setAddress,
  setamount,
  setisloading,
}) {
  const [newAmount, setNewAmount] = useState(1)

  const dispatch = useDispatch()
  const firebase = useFirebase()
  const profileInfo = useSelector((state) => state.firebase.profile)

  useEffect(() => {
    Axios.get(`https://blockchain.info/tobtc?currency=USD&value=${amount}`)
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => console.log(err))
  }, [amount])

  const handleCancel = () => {
    const cancel = prompt('Are you sure you want to cancel transaction')
    if (cancel) {
      setOpenModal(false)
      setAddress('')
      setamount('')
    }
  }

  const handleWithdraw = () => {
    setisloading(true)
    setTimeout(() => {
      setisloading(false)
      withdrawalAction(amount, profileInfo, address, dispatch, firebase)
    }, 2000)

    setOpenModal(false)
    setamount('')
    setAddress('')
  }
  return (
    <Modal show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Confirm Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You want to withdraw ${amount} from your account</p>
        <p>Bitcoin : {newAmount}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleWithdraw}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Withdrawcalc
